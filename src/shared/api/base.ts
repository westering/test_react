import axios from 'axios'
import { getStoredSession } from '@/entities/session/model/sessionStorage'

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = getStoredSession()?.accessToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
