import { useContext } from 'react'
import { AddProductModalContext } from '@/features/products/add-product/lib/addProductModalContext'

export const useAddProductModal = () => {
  const context = useContext(AddProductModalContext)

  if (!context) {
    throw new Error(
      'useAddProductModal must be used within AddProductModalProvider',
    )
  }

  return context
}
