export type Product = {
  id: number
  title: string
  price: number
  brand: string
  category: string
  rating: number
  stock: number
  thumbnail: string
  sku: string
}

export type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}
