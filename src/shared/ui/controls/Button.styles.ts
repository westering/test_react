import styled from '@emotion/styled'

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid
    ${({ variant }) => (variant === 'primary' ? '#3b5bff' : '#d1d5db')};
  border-radius: 8px;
  background: ${({ variant }) =>
    variant === 'primary' ? '#3b5bff' : '#fff'};
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#111827')};
  font-weight: 600;
  font-size: 0.82rem;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  box-shadow: ${({ variant }) =>
    variant === 'primary' ? 'none' : 'none'};

  &:hover:not(:disabled) {
    opacity: 0.92;
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`
