import { createContext } from 'react'
import type { LoginPayload } from '@/shared/api/auth'
import type { SessionState } from '@/entities/session/model/types'

export type SessionContextValue = {
  session: SessionState | null
  isReady: boolean
  login: (payload: LoginPayload, rememberMe: boolean) => Promise<SessionState>
  logout: () => void
}

export const SessionContext = createContext<SessionContextValue | null>(null)
