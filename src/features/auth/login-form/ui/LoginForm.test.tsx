import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '@/features/auth/login-form/ui/LoginForm'

const loginMock = jest.fn()
const navigateMock = jest.fn()

jest.mock('@/app/providers/useSession', () => ({
  useSession: () => ({
    login: loginMock,
  }),
}))

jest.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}))

describe('LoginForm', () => {
  beforeEach(() => {
    loginMock.mockReset()
    navigateMock.mockReset()
  })

  it('shows validation errors for empty fields', async () => {
    const user = userEvent.setup()

    render(<LoginForm />)

    await user.click(screen.getByRole('button', { name: 'Войти' }))

    expect(await screen.findByText('Укажите логин.')).toBeInTheDocument()
    expect(await screen.findByText('Укажите пароль.')).toBeInTheDocument()
    expect(loginMock).not.toHaveBeenCalled()
  })

  it('clears username by action button', async () => {
    const user = userEvent.setup()

    render(<LoginForm />)

    const usernameInput = screen.getByPlaceholderText('Введите логин')
    await user.type(usernameInput, 'emilys')

    await user.click(screen.getByRole('button', { name: 'Очистить логин' }))

    expect(usernameInput).toHaveValue('')
  })

  it('toggles password visibility', async () => {
    const user = userEvent.setup()

    render(<LoginForm />)

    const passwordInput = screen.getByPlaceholderText('Введите пароль')
    expect(passwordInput).toHaveAttribute('type', 'password')

    await user.click(screen.getByRole('button', { name: 'Показать пароль' }))
    expect(passwordInput).toHaveAttribute('type', 'text')

    await user.click(screen.getByRole('button', { name: 'Скрыть пароль' }))
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('submits valid credentials and navigates to products', async () => {
    const user = userEvent.setup()
    loginMock.mockResolvedValueOnce(undefined)

    render(<LoginForm />)

    await user.type(screen.getByPlaceholderText('Введите логин'), 'emilys')
    await user.type(screen.getByPlaceholderText('Введите пароль'), 'emilyspass')
    fireEvent.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: 'Войти' }))

    expect(loginMock).toHaveBeenCalledWith(
      {
        username: 'emilys',
        password: 'emilyspass',
      },
      false,
    )
    expect(navigateMock).toHaveBeenCalledWith('/products', { replace: true })
  })
})
