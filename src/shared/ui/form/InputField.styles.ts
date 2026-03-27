import styled from '@emotion/styled'

export const Field = styled.label`
  display: grid;
  gap: 6px;
`

export const Label = styled.span`
  font-size: 0.74rem;
  font-weight: 500;
  color: #6b7280;
`

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  min-height: 34px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? '#dc2626' : '#e5e7eb')};
  background: #fff;
  color: #111827;
  font-size: 0.8rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b5bff;
  }
`
