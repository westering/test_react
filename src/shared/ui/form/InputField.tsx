import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { FieldErrorText } from '@/shared/ui/form/FieldErrorText'
import { Field, Input, Label } from '@/shared/ui/form/InputField.styles'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, ...props }, ref) => (
    <Field>
      <Label>{label}</Label>
      <Input ref={ref} hasError={Boolean(error)} {...props} />
      {error ? <FieldErrorText>{error}</FieldErrorText> : null}
    </Field>
  ),
)

InputField.displayName = 'InputField'
