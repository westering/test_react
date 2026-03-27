import { useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'
import { AddProductModalContext } from '@/features/products/add-product/lib/addProductModalContext'
import type { AddProductModalContextValue } from '@/features/products/add-product/model/types'

export const AddProductModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo<AddProductModalContextValue>(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen],
  )

  return (
    <AddProductModalContext.Provider value={value}>
      {children}
    </AddProductModalContext.Provider>
  )
}
