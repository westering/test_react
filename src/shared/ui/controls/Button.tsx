import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { StyledButton } from '@/shared/ui/controls/Button.styles'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
    isLoading?: boolean
  }
>

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  ...props
}: ButtonProps) => (
  <StyledButton variant={variant} disabled={isLoading || props.disabled} {...props}>
    {isLoading ? 'Загрузка...' : children}
  </StyledButton>
)
