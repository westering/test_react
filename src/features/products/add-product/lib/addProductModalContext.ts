import { createContext } from 'react'
import type { AddProductModalContextValue } from '@/features/products/add-product/model/types'

export const AddProductModalContext =
  createContext<AddProductModalContextValue | null>(null)
