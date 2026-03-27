export type AddProductModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export type AddProductValues = {
  title: string
  price: string
  brand: string
  sku: string
}
