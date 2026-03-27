import { useSession } from '@/app/providers/useSession'
import { useState } from 'react'
import { AddProductModal } from '@/features/products/add-product/ui/AddProductModal'
import { NavSearch } from '@/widgets/products-table/ui/NavSearch'
import { ProductsTableWidget } from '@/widgets/products-table/ui/ProductsTableWidget'
import {
  Content,
  Header,
  Page,
  SearchSlot,
  Shell,
  Subtitle,
  Title,
  UserBadge,
  Welcome,
} from '@/pages/products-page/ui/ProductsPage.styles'

export const ProductsPage = () => {
  const { session, logout } = useSession()
  const [search, setSearch] = useState('')

  return (
    <Page>
      <Shell>
        <Header>
          <Welcome>
            <Title>Товары</Title>
            <Subtitle>
              Добро пожаловать, {session?.firstName} {session?.lastName}
            </Subtitle>
          </Welcome>

          <SearchSlot>
            <NavSearch value={search} onChange={setSearch} />
          </SearchSlot>

          <UserBadge type="button" onClick={logout} aria-label="Выйти">
            Выйти
          </UserBadge>
        </Header>

        <Content>
          <ProductsTableWidget hideSearch searchValue={search} onSearchChange={setSearch} />
        </Content>
      </Shell>
      <AddProductModal />
    </Page>
  )
}
