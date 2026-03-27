import styled from '@emotion/styled'

export const Card = styled.section`
  width: min(100%, 495px);
  padding: 30px;
  border-radius: 34px;
  border: 1px solid #ededed;
  background: linear-gradient(
      180deg,
      rgba(35, 35, 35, 0.03) 0%,
      rgba(35, 35, 35, 0) 50%
    ),
    #ffffff;
  box-shadow:
    0 0 0 6px #ffffff,
    0 12px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 500px) { 
    padding: 48px;
  }
`

export const Logo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 1px solid rgba(237, 237, 237, 0.7);
  background: linear-gradient(
      0deg,
      rgba(35, 35, 35, 0) 50%,
      rgba(35, 35, 35, 0.06) 100%
    ),
    #ffffff;
  box-shadow:
    0 0 0 2px #ffffff,
    0 12px 8px rgba(0, 0, 0, 0.03);
  display: grid;
  place-items: center;
`

export const LogoImage = styled.img`
  width: 35px;
  height: 34px;
  object-fit: contain;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.6px;
  text-align: center;
  color: #232323;
`

export const Subtitle = styled.p`
  margin: 0;
  color: #e0e0e0;
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 500;
`

export const Form = styled.form`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 500px) {
    width: 399px;
  }
`

export const BottomLink = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  color: #6c6c6c;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
`

export const BottomLinkAccent = styled.span`
  color: #242edb;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
`

export const Heading = styled.div`
  display: grid;
  gap: 12px;
  text-align: center;
`

export const FieldGroup = styled.div`
  display: grid;
  gap: 16px;
`

export const Field = styled.label`
  display: grid;
  gap: 6px;
`

export const Label = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.27px;
  color: #232323;
`

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1.5px solid #ededed;
  background: #ffffff;
  overflow: hidden;
`

export const IconSlot = styled.span`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  flex: 0 0 24px;
  color: #b2b3b9;
`

export const IconImage = styled.img`
  display: block;
  object-fit: contain;
`

export const IconButton = styled.button`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  flex: 0 0 24px;
  padding: 0;
  border: none;
  background: transparent;
  color: #b2b3b9;
  cursor: pointer;
`

export const TextInput = styled.input<{ hasError?: boolean }>`
  flex: 1 1 auto;
  min-width: 0;
  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.27px;
  color: #232323;

  &::placeholder {
    color: #b2b3b9;
  }

  ${({ hasError }) =>
    hasError
      ? `
    color: #dc2626;
  `
      : ''}
`

export const KeepRow = styled.label`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`

export const KeepCheckbox = styled.input`
  width: 18px;
  height: 18px;
  margin: 0;
  appearance: none;
  position: relative;
  display: inline-grid;
  place-items: center;
  border: 1px solid #ededed;
  border-radius: 4px;
  background: #ffffff;
  cursor: pointer;

  &::after {
    content: '';
    width: 5px;
    height: 9px;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: rotate(45deg) translate(-1px, -1px);
    opacity: 0;
  }

  &:checked {
    background: #242edb;
    border-color: #242edb;
  }

  &:checked::after {
    opacity: 1;
  }
`

export const KeepText = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: #9c9c9c;
  font-weight: 500;
`

export const PrimaryButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  min-height: 54px;
  border-radius: 12px;
  border: 1px solid #367aff;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
    #242edb;
  box-shadow:
    0 8px 8px rgba(54, 122, 255, 0.03),
    inset 0 -2px 0 1px rgba(0, 0, 0, 0.08);
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.18px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:disabled {
    cursor: wait;
  }
`

export const OrRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const OrLine = styled.span`
  height: 1px;
  background: #ebebeb;
  flex: 1 1 auto;
`

export const OrText = styled.span`
  color: #ebebeb;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`
