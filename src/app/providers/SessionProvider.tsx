import { useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { authApi } from '@/shared/api/auth'
import type { LoginPayload } from '@/shared/api/auth'
import {
  clearSessionStorage,
  getStoredSession,
  persistSession,
} from '@/entities/session/model/sessionStorage'
import type { SessionState } from '@/entities/session/model/types'
import type { SessionContextValue } from '@/app/providers/session-context'
import { SessionContext } from '@/app/providers/session-context'

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<SessionState | null>(() =>
    getStoredSession(),
  )

  const value = useMemo<SessionContextValue>(
    () => ({
      session,
      isReady: true,
      login: async (payload: LoginPayload, rememberMe: boolean) => {
        const nextSession = await authApi.login(payload)
        persistSession(nextSession, rememberMe)
        setSession(nextSession)

        return nextSession
      },
      logout: () => {
        clearSessionStorage()
        setSession(null)
      },
    }),
    [session],
  )

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  )
}
