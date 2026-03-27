import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

const readValue = <T,>(key: string, fallbackValue: T) => {
  const rawValue = localStorage.getItem(key)

  if (!rawValue) {
    return fallbackValue
  }

  try {
    return JSON.parse(rawValue) as T
  } catch {
    return fallbackValue
  }
}

export const usePersistentState = <T,>(
  key: string,
  fallbackValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => readValue(key, fallbackValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
