import styled from '@emotion/styled'

export const Page = styled.main`
  min-height: 100vh;
  background: #f6f6f6;
  padding: 0 30px;
`

export const Shell = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Header = styled.header`
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 30px;
  flex-direction: column;

  @media(min-width: 500px) {
    flex-direction: row;
    height: 105px;
  }
`

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: #202020;
`

export const Subtitle = styled.p`
  margin: 0;
  display: none;
`

export const UserBadge = styled.button`
  border: none;
  background: transparent;
  color: #202020;
  padding: 10px 12px;
  font-size: 14px;
  cursor: pointer;
`

export const SearchSlot = styled.div`
  width: 1023px;
  max-width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
`
