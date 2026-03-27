import type { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSession } from '@/app/providers/useSession'
import { FullPageLoader } from '@/shared/ui/feedback/FullPageLoader'

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const location = useLocation()
  const { isReady, session } = useSession()

  if (!isReady) {
    return <FullPageLoader label="Восстанавливаем сессию..." />
  }

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
