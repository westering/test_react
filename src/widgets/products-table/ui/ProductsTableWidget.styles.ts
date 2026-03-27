import styled from '@emotion/styled'

export const Panel = styled.section`
  border-radius: 12px;
  background: #ffffff;
  border: none;
  box-shadow: none;
  overflow: hidden;
`

export const PanelHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 30px 30px 0;
`

export const PanelTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #333333;
`

export const Search = styled.input`
  flex: 0 1 520px;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 8px;
  border: none;
  background: #f3f3f3;
  font-size: 14px;
  color: #333;

  &::placeholder {
    color: #999;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const RefreshIconButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #ececeb;
  background: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const ButtonIcon = styled.img`
  display: block;
  width: 22px;
  height: 22px;
  object-fit: contain;
`

export const AddButton = styled.button`
  min-height: 42px;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  background: #242edb;
  color: #ebf3ea;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const TableWrap = styled.div`
  position: relative;
  overflow-x: auto;
  padding: 40px 30px 0;
`

export const TableLoadingOverlay = styled.div`
  position: absolute;
  left: 30px;
  right: 30px;
  top: 24px;
  z-index: 2;
  pointer-events: none;
`

export const TableLoadingBarWrap = styled.div`
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 6px;
`

export const Table = styled.table<{ hasPagination: boolean }>`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  min-width: 1100px;

  thead tr {
    height: 73px;
  }

  tbody tr {
    height: 71px;
    transition: box-shadow 0.15s ease;
    position: relative;
  }

  thead th:not(:first-of-type) {
    text-align: center;
  }

  tbody td:not(:first-of-type) {
    text-align: center;
  }

  tbody tr:last-of-type td {
    border-bottom: ${({ hasPagination }) =>
      hasPagination ? '1px solid #e2e2e2' : 'none'};
  }

  tbody tr:hover td:first-of-type::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1px;
    bottom: 1px;
    width: 3px;
    background: #3c538e;
    border-radius: 1px;
  }

  tbody tr:hover input[data-variant='table-checkbox'] {
    background-color: #3c538e;
    border-color: #3c538e;
  }
`

export const HeadCell = styled.th`
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: #b2b3b9;
  border-bottom: 1px solid #e2e2e2;
  white-space: nowrap;

  &:first-of-type {
    padding-left: 18px;
  }

  &:last-of-type {
    padding-right: 18px;
  }
`

export const SortButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  padding: 0;
  color: inherit;
  font: inherit;
  cursor: pointer;
`

export const BodyCell = styled.td`
  padding: 0;
  border-bottom: 1px solid #e2e2e2;
  vertical-align: middle;
  font-size: 16px;
  color: #222;

  &:first-of-type {
    padding-left: 18px;
  }

  &:last-of-type {
    padding-right: 18px;
  }
`

export const ProductCell = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  min-width: 0;

  & > div {
    min-width: 0;
  }
`

export const ProductImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 8px;
  background: #c4c4c4;
  border: 1px solid #ececeb;
`

export const ProductTitle = styled.div`
  font-weight: 700;
  color: #161919;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductMeta = styled.div`
  color: #b2b3b9;
  font-size: 14px;
`

export const VendorValue = styled.span`
  font-weight: 700;
  color: #161919;
`

export const RatingValue = styled.span<{ isLow: boolean }>`
  color: ${({ isLow }) => (isLow ? '#f11010' : '#000000')};
`

export const RatingSuffix = styled.span`
  color: #000000;
  font-weight: 400;
`

export const EmptyState = styled.div`
  padding: 48px 24px;
  text-align: center;
  color: #64748b;
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 30px 0;
  color: #9ca3af;
  font-size: 0.68rem;
`

export const Checkbox = styled.input`
  width: 22px;
  height: 22px;
  margin: 0;
  appearance: none;
  position: relative;
  display: inline-grid;
  place-items: center;
  border: 1px solid #b2b3b9;
  border-radius: 4px;
  background: #ffffff;
  cursor: pointer;

  &::after {
    content: '';
    width: 6px;
    height: 10px;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: rotate(45deg) translate(-1px, -1px);
    opacity: 0;
  }

  &:checked {
    background: #3c538e;
    border-color: #3c538e;
  }

  &:checked::after {
    opacity: 1;
  }
`

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-width: 0;
`

export const ProductCellWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  width: 100%;
  min-width: 0;
`

export const PriceWhole = styled.span`
  line-height: 1.1;
  color: #222222;
  font-family: 'Roboto Mono', monospace;
`

export const PriceFraction = styled.span`
  line-height: 1.1;
  color: #999999;
  font-family: 'Roboto Mono', monospace;
`

export const RowActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  width: 133px;
`

export const MiniPlusButton = styled.button`
  width: 52px;
  height: 27px;
  border-radius: 23px;
  border: none;
  background: #242edb;
  display: grid;
  place-items: center;
  cursor: pointer;
`

export const DotsButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0px;
  display: flex;
  align-items: center;
`

export const ActionIcon = styled.img`
  display: block;
  object-fit: contain;
`

export const Pagination = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 28px 30px 30px;
  border-top: none;
  flex-direction: column;

  @media(min-width: 500px) {
    flex-direction: row;
  }
`

export const PaginationInfo = styled.span`
  color: #969b9f;
  font-size: 18px;
`

export const PaginationInfoNumber = styled.span`
  color: #333333;
`

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CaretButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: #b2b3b9;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`

export const PageButton = styled.button<{ active?: boolean }>`
  min-width: 30px;
  height: 30px;
  padding: 0 10px;
  border: 1px solid #ececeb;
  border-radius: 4px;
  background: ${({ active }) => (active ? '#797fea' : '#ffffff')};
  color: ${({ active }) => (active ? '#ffffff' : '#b2b3b9')};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`

export const NavSearchWrap = styled.div`
  width: 100%;
  background: #f3f3f3;
  border-radius: 8px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const NavSearchIcon = styled.span`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  flex: 0 0 24px;
`

export const NavSearchField = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  color: #333;

  &::placeholder {
    color: #999;
  }
`
