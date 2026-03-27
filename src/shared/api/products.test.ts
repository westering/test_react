import { productsApi } from '@/shared/api/products'
import { api } from '@/shared/api/base'

describe('productsApi.getProducts', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('uses search endpoint with trimmed query', async () => {
    const getSpy = jest.spyOn(api, 'get').mockResolvedValue({
      data: {
        products: [],
        total: 0,
        skip: 0,
        limit: 20,
      },
    })

    await productsApi.getProducts({
      search: '  phone  ',
      limit: 20,
      skip: 40,
      sortBy: 'price',
      order: 'desc',
    })

    expect(getSpy).toHaveBeenCalledWith('/products/search', {
      params: {
        q: 'phone',
        limit: 20,
        skip: 40,
        sortBy: 'price',
        order: 'desc',
      },
    })
  })

  it('uses base products endpoint when search is empty', async () => {
    const getSpy = jest.spyOn(api, 'get').mockResolvedValue({
      data: {
        products: [],
        total: 0,
        skip: 0,
        limit: 20,
      },
    })

    await productsApi.getProducts({
      search: '   ',
      limit: 20,
      skip: 0,
      sortBy: 'rating',
      order: 'asc',
    })

    expect(getSpy).toHaveBeenCalledWith('/products', {
      params: {
        limit: 20,
        skip: 0,
        sortBy: 'rating',
        order: 'asc',
      },
    })
  })
})
