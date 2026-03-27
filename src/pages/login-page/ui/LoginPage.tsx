import { Navigate, useLocation } from 'react-router-dom'
import { useSession } from '@/app/providers/useSession'
import { LoginForm } from '@/features/auth/login-form/ui/LoginForm'
import { Page } from '@/pages/login-page/ui/LoginPage.styles'

export const LoginPage = () => {
  const location = useLocation()
  const { session, isReady } = useSession()
  const redirectPath =
    (location.state as { from?: string } | null)?.from ?? '/products'

  if (isReady && session) {
    return <Navigate to={redirectPath} replace />
  }

  return (
    <Page>
      <LoginForm />
    </Page>
  )
}
