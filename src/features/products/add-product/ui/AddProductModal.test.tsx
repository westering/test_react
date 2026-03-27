import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import toast from 'react-hot-toast'
import { AddProductModal } from '@/features/products/add-product/ui/AddProductModal'

const closeMock = jest.fn()

jest.mock('@/features/products/add-product/lib/useAddProductModal', () => ({
  useAddProductModal: () => ({
    isOpen: true,
    close: closeMock,
  }),
}))

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
  },
}))

describe('AddProductModal', () => {
  beforeEach(() => {
    closeMock.mockReset()
    jest.mocked(toast.success).mockReset()
  })

  it('shows validation errors when required fields are empty', async () => {
    const user = userEvent.setup()

    render(<AddProductModal />)

    await user.click(screen.getByRole('button', { name: 'Сохранить' }))

    expect(await screen.findByText('Укажите наименование.')).toBeInTheDocument()
    expect(await screen.findByText('Укажите цену.')).toBeInTheDocument()
    expect(await screen.findByText('Укажите вендора.')).toBeInTheDocument()
    expect(await screen.findByText('Укажите артикул.')).toBeInTheDocument()
    expect(toast.success).not.toHaveBeenCalled()
  })

  it('shows success toast and closes modal after valid submit', async () => {
    const user = userEvent.setup()

    render(<AddProductModal />)

    await user.type(
      screen.getByPlaceholderText('Например, Wireless Keyboard'),
      'Wireless Keyboard',
    )
    await user.type(screen.getByPlaceholderText('120'), '120')
    await user.type(
      screen.getByPlaceholderText('Например, Logitech'),
      'Logitech',
    )
    await user.type(
      screen.getByPlaceholderText('Например, LOGI-K380'),
      'LOGI-K380',
    )

    await user.click(screen.getByRole('button', { name: 'Сохранить' }))

    expect(toast.success).toHaveBeenCalledWith('Товар добавлен')
    expect(closeMock).toHaveBeenCalled()
  })
})
