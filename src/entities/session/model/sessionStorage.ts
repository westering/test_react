import type { SessionState } from '@/entities/session/model/types'

const LOCAL_STORAGE_KEY = 'auth-persistent'
const SESSION_STORAGE_KEY = 'auth-session'

const parseSession = (value: string | null): SessionState | null => {
  if (!value) {
    return null
  }

  try {
    return JSON.parse(value) as SessionState
  } catch {
    return null
  }
}

export const getStoredSession = (): SessionState | null =>
  parseSession(localStorage.getItem(LOCAL_STORAGE_KEY)) ??
  parseSession(sessionStorage.getItem(SESSION_STORAGE_KEY))

export const persistSession = (session: SessionState, rememberMe: boolean) => {
  const serialized = JSON.stringify(session)

  localStorage.removeItem(LOCAL_STORAGE_KEY)
  sessionStorage.removeItem(SESSION_STORAGE_KEY)

  if (rememberMe) {
    localStorage.setItem(LOCAL_STORAGE_KEY, serialized)
    return
  }

  sessionStorage.setItem(SESSION_STORAGE_KEY, serialized)
}

export const clearSessionStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY)
  sessionStorage.removeItem(SESSION_STORAGE_KEY)
}
