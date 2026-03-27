import { api } from '@/shared/api/base'
import type { SessionState } from '@/entities/session/model/types'

export type LoginPayload = {
  username: string
  password: string
}

export const authApi = {
  login: async (payload: LoginPayload) => {
    const response = await api.post<SessionState>('/auth/login', {
      ...payload,
      expiresInMins: 60,
    })

    return response.data
  },
}
