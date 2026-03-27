import { api } from '@/shared/api/base'
import type { ProductsResponse } from '@/entities/product/model/types'

type GetProductsParams = {
  search: string
  limit?: number
  skip?: number
  sortBy?: string
  order?: 'asc' | 'desc'
}

export const productsApi = {
  getProducts: async ({
    search,
    limit = 20,
    skip = 0,
    sortBy,
    order,
  }: GetProductsParams) => {
    const response = search.trim()
      ? await api.get<ProductsResponse>('/products/search', {
          params: { q: search.trim(), limit, skip, sortBy, order },
        })
      : await api.get<ProductsResponse>('/products', {
          params: { limit, skip, sortBy, order },
        })

    return response.data
  },
}
