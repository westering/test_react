import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import type { ColumnDef, SortingState } from '@tanstack/react-table'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useAddProductModal } from '@/features/products/add-product/lib/useAddProductModal'
import addCircleIconUrl from '@/assets/icons/add-circle.svg'
import caretLeftIconUrl from '@/assets/icons/caret-left.svg'
import caretRightIconUrl from '@/assets/icons/caret-right.svg'
import dotsCircleIconUrl from '@/assets/icons/dots-circle.svg'
import plusWhiteIconUrl from '@/assets/icons/plus-white.svg'
import refreshIconUrl from '@/assets/icons/refresh.svg'
import { PAGE_SIZE, CURRENCY_RATE } from '@/widgets/products-table/model/constants'
import {
  AddButton,
  ActionIcon,
  Actions,
  BodyCell,
  ButtonIcon,
  Checkbox,
  EmptyState,
  HeadCell,
  RefreshIconButton,
  CaretButton,
  PageButton,
  Pagination,
  PaginationControls,
  PaginationInfo,
  PaginationInfoNumber,
  Panel,
  ProductCell,
  ProductImage,
  ProductMeta,
  ProductTitle,
  ProductHeader,
  ProductCellWrap,
  RatingValue,
  RatingSuffix,
  Search,
  VendorValue,
  RowActions,
  MiniPlusButton,
  DotsButton,
  SortButton,
  TableLoadingBarWrap,
  TableLoadingOverlay,
  Table,
  TableWrap,
  PanelHeader,
  PanelTitle,
  PriceWhole,
  PriceFraction,
} from '@/widgets/products-table/ui/ProductsTableWidget.styles'
import { productsApi } from '@/shared/api/products'
import type { Product } from '@/entities/product/model/types'
import { usePersistentState } from '@/shared/lib/storage/usePersistentState'
import { ProgressBar } from '@/shared/ui/feedback/ProgressBar'

const SORTING_KEY = 'product-sorting'

type ProductsTableWidgetProps = {
  hideSearch?: boolean
  searchValue?: string
  onSearchChange?: (value: string) => void
}

export const ProductsTableWidget = ({
  hideSearch = false,
  searchValue,
  onSearchChange,
}: ProductsTableWidgetProps) => {
  const { open } = useAddProductModal()
  const queryClient = useQueryClient()
  const [localSearch, setLocalSearch] = useState('')
  const search = typeof searchValue === 'string' ? searchValue : localSearch
  const setSearch = (value: string) => {
    if (onSearchChange) {
      onSearchChange(value)
      return
    }
    setLocalSearch(value)
  }
  const deferredSearch = useDeferredValue(search)
  const [page, setPage] = useState(1)
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([])
  const [sorting, setSorting] = usePersistentState<SortingState>(
    SORTING_KEY,
    [],
  )

  useEffect(() => {
    setPage(1)
  }, [deferredSearch, sorting])

  const apiSkip = (page - 1) * PAGE_SIZE
  const activeSorting = sorting[0]
  const sortBy = typeof activeSorting?.id === 'string' ? activeSorting.id : undefined
  const order = activeSorting ? (activeSorting.desc ? 'desc' : 'asc') : undefined

  const productsQuery = useQuery({
    queryKey: ['products', deferredSearch, page, sortBy, order],
    queryFn: () =>
      productsApi.getProducts({
        search: deferredSearch,
        limit: PAGE_SIZE,
        skip: apiSkip,
        sortBy,
        order,
      }),
    placeholderData: (previousData) => previousData,
  })

  const products = useMemo(() => productsQuery.data?.products ?? [], [productsQuery.data?.products])
  const totalCount = productsQuery.data?.total ?? 0
  const pageCount = Math.max(1, Math.ceil(totalCount / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)
  const shownFrom = totalCount === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1
  const shownTo = totalCount === 0 ? 0 : Math.min(safePage * PAGE_SIZE, totalCount)
  const currentPageProductIds = useMemo(
    () => products.map((product) => product.id),
    [products],
  )
  const isAllSelected =
    currentPageProductIds.length > 0 &&
    currentPageProductIds.every((id) => selectedProductIds.includes(id))

  useEffect(() => {
    if (page !== safePage) {
      setPage(safePage)
    }
  }, [page, safePage])

  useEffect(() => {
    setSelectedProductIds((currentIds) =>
      currentIds.filter((id) => currentPageProductIds.includes(id)),
    )
  }, [currentPageProductIds])

  const visiblePages = useMemo(() => {
    const start = Math.max(1, safePage - 2)
    const end = Math.min(pageCount, start + 4)
    const firstPage = Math.max(1, end - 4)

    return Array.from(
      { length: end - firstPage + 1 },
      (_, index) => firstPage + index,
    )
  }, [pageCount, safePage])

  const formatTablePrice = (value: number) => {
    const formatted = new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
    const normalized = formatted.replace(/\u00A0/g, ' ')
    const [whole, fraction = '00'] = normalized.split(',')
    return { whole, fraction }
  }

  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'title',
        header: () => (
          <ProductHeader>
            <Checkbox
              type="checkbox"
              data-variant="table-checkbox"
              aria-label="Выбрать все товары"
              checked={isAllSelected}
              onClick={(event) => event.stopPropagation()}
              onChange={() =>
                setSelectedProductIds(() =>
                  isAllSelected ? [] : currentPageProductIds,
                )
              }
            />
            Наименование
          </ProductHeader>
        ),
        cell: ({ row }) => (
          <ProductCellWrap>
            <Checkbox
              type="checkbox"
              data-variant="table-checkbox"
              aria-label="Выбрать товар"
              checked={selectedProductIds.includes(row.original.id)}
              onClick={(event) => event.stopPropagation()}
              onChange={() =>
                setSelectedProductIds((currentIds) =>
                  currentIds.includes(row.original.id)
                    ? currentIds.filter((id) => id !== row.original.id)
                    : [...currentIds, row.original.id],
                )
              }
            />
            <ProductCell>
              <ProductImage src={row.original.thumbnail} alt={row.original.title} />
              <div>
                <ProductTitle>{row.original.title}</ProductTitle>
                <ProductMeta>{row.original.category}</ProductMeta>
              </div>
            </ProductCell>
          </ProductCellWrap>
        ),
      },
      {
        accessorKey: 'brand',
        header: 'Вендор',
        cell: ({ row }) => <VendorValue>{row.original.brand}</VendorValue>,
      },
      {
        accessorKey: 'sku',
        header: 'Артикул',
      },
      {
        accessorKey: 'rating',
        header: 'Оценка',
        cell: ({ row }) => (
          <span>
            <RatingValue isLow={row.original.rating < 3.5}>
              {row.original.rating.toFixed(1)}
            </RatingValue>
            <RatingSuffix>/5</RatingSuffix>
          </span>
        ),
      },
      {
        accessorKey: 'price',
        header: 'Цена',
        cell: ({ row }) => {
          const price = formatTablePrice(row.original.price * CURRENCY_RATE)
          return (
            <span>
              <PriceWhole>{price.whole}</PriceWhole>
              <PriceFraction>,{price.fraction}</PriceFraction>
            </span>
          )
        },
      },
      {
        id: 'action',
        header: '',
        enableSorting: false,
        cell: () => (
          <RowActions>
            <MiniPlusButton
              type="button"
              aria-label="Действие"
              onClick={(event) => {
                event.preventDefault()
              }}
            >
              <ActionIcon src={plusWhiteIconUrl} alt="" width="24" height="24" />
            </MiniPlusButton>

            <DotsButton
              type="button"
              aria-label="Меню"
              onClick={(event) => {
                event.preventDefault()
              }}
            >
              <ActionIcon src={dotsCircleIconUrl} alt="" width="32" height="32" />
            </DotsButton>
          </RowActions>
        ),
      },
    ],
    [currentPageProductIds, isAllSelected, selectedProductIds],
  )

  const table = useReactTable({
    data: products,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Все позиции</PanelTitle>
        <Actions>
          <RefreshIconButton
            type="button"
            onClick={() =>
              queryClient.invalidateQueries({
                queryKey: ['products'],
              })
            }
            aria-label="Обновить"
          >
            <ButtonIcon src={refreshIconUrl} alt="" />
          </RefreshIconButton>

          <AddButton type="button" onClick={open}>
            <ButtonIcon src={addCircleIconUrl} alt="" />
            Добавить
          </AddButton>
        </Actions>
      </PanelHeader>

      {!hideSearch ? (
        <div style={{ padding: '20px 30px 0' }}>
          <Search
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Найти"
          />
        </div>
      ) : null}

      <TableWrap>
        {productsQuery.isFetching ? (
          <TableLoadingOverlay>
            <TableLoadingBarWrap>
              <ProgressBar />
            </TableLoadingBarWrap>
          </TableLoadingOverlay>
        ) : null}

        <Table hasPagination={totalCount > 0}>
          <colgroup>
            <col style={{ width: '38%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '133px', minWidth: '133px', maxWidth: '133px' }} />
          </colgroup>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <HeadCell key={header.id}>
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <SortButton
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getIsSorted()
                          ? {
                              asc: '↑',
                              desc: '↓',
                            }[header.column.getIsSorted() as string]
                          : null}
                      </SortButton>
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </HeadCell>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <BodyCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </BodyCell>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>

      {productsQuery.isError ? (
        <EmptyState>Не удалось загрузить товары. Попробуйте обновить страницу.</EmptyState>
      ) : null}

      {!table.getRowModel().rows.length &&
      !productsQuery.isLoading &&
      !productsQuery.isError ? (
        <EmptyState>По вашему запросу товары не найдены.</EmptyState>
      ) : null}

      {totalCount > 0 ? (
        <Pagination>
          <PaginationInfo>
            Показано <PaginationInfoNumber>{shownFrom}-{shownTo}</PaginationInfoNumber> из{' '}
            <PaginationInfoNumber>{totalCount}</PaginationInfoNumber>
          </PaginationInfo>

          <PaginationControls>
            <CaretButton
              type="button"
              onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
              disabled={safePage === 1}
              aria-label="Предыдущая страница"
            >
              <ActionIcon src={caretLeftIconUrl} alt="" width="20" height="20" />
            </CaretButton>

            {visiblePages.map((pageNumber) => (
              <PageButton
                key={pageNumber}
                type="button"
                active={pageNumber === safePage}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </PageButton>
            ))}

            <CaretButton
              type="button"
              onClick={() =>
                setPage((currentPage) => Math.min(pageCount, currentPage + 1))
              }
              disabled={safePage === pageCount}
              aria-label="Следующая страница"
            >
              <ActionIcon src={caretRightIconUrl} alt="" width="20" height="20" />
            </CaretButton>
          </PaginationControls>
        </Pagination>
      ) : null}
    </Panel>
  )
}
