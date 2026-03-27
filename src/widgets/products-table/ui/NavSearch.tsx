import searchIconUrl from '@/assets/icons/search.svg'
import {
  ButtonIcon,
  NavSearchField,
  NavSearchIcon,
  NavSearchWrap,
} from '@/widgets/products-table/ui/ProductsTableWidget.styles'

type NavSearchProps = {
  value: string
  onChange: (value: string) => void
}

export const NavSearch = ({ value, onChange }: NavSearchProps) => {
  return (
    <NavSearchWrap>
      <NavSearchIcon aria-hidden="true">
        <ButtonIcon src={searchIconUrl} alt="" />
      </NavSearchIcon>
      <NavSearchField
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Найти"
      />
    </NavSearchWrap>
  )
}
