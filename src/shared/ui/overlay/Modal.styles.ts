import styled from '@emotion/styled'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(6px);
  z-index: 40;
`

export const Dialog = styled.section`
  width: min(100%, 520px);
  padding: 28px;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.28);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
`

export const Title = styled.h2`
  margin: 0;
  color: #0f172a;
  font-size: 1.4rem;
`

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 999px;
  background: #e2e8f0;
  color: #0f172a;
  cursor: pointer;
`
