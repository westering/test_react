import { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSession } from '@/app/providers/useSession'
import type { LoginFormValues } from '@/features/auth/login-form/model/types'
import {
  BottomLinkAccent,
  BottomLink,
  Card,
  Field,
  FieldGroup,
  Form,
  Heading,
  IconButton,
  IconImage,
  IconSlot,
  InputWrap,
  KeepCheckbox,
  KeepRow,
  KeepText,
  Logo,
  LogoImage,
  OrLine,
  OrRow,
  OrText,
  PrimaryButton,
  Subtitle,
  Label,
  TextInput,
  Title,
} from '@/features/auth/login-form/ui/LoginForm.styles'
import { FieldErrorText } from '@/shared/ui/form/FieldErrorText'
import clearIconUrl from '@/assets/icons/clear.svg'
import eyeClosedIconUrl from '@/assets/icons/eye-closed.svg'
import eyeOpenIconUrl from '@/assets/icons/eye-open.svg'
import lockIconUrl from '@/assets/icons/lock.svg'
import logoUrl from '@/assets/logo.svg'
import userIconUrl from '@/assets/icons/user.svg'

export const LoginForm = () => {
  const navigate = useNavigate()
  const { login } = useSession()
  const [apiError, setApiError] = useState<string | null>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      username: '',
      password: '',
      rememberMe: true,
    },
  })
  const usernameValue = useWatch({
    control,
    name: 'username',
  })

  const onSubmit = handleSubmit(async (values) => {
    setApiError(null)

    try {
      await login(
        {
          username: values.username.trim(),
          password: values.password,
        },
        values.rememberMe,
      )
      navigate('/products', { replace: true })
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response?.data as { message?: string } | undefined)?.message ??
          'Не удалось выполнить вход. Проверьте логин и пароль.'

        setApiError(message)
        return
      }

      setApiError('Произошла непредвиденная ошибка. Попробуйте ещё раз.')
    }
  })

  return (
    <Card>
      <Logo>
        <LogoImage src={logoUrl} alt="Aiti Guru" />
      </Logo>

      <Heading>
        <Title>Добро пожаловать!</Title>
        <Subtitle>Пожалуйста, авторизируйтесь</Subtitle>
      </Heading>

      <Form onSubmit={onSubmit}>
        <FieldGroup>
          <Field>
            <Label>Логин</Label>
            <InputWrap>
              <IconSlot aria-hidden="true">
                <IconImage src={userIconUrl} alt="" />
              </IconSlot>
              <TextInput
                placeholder="Введите логин"
                autoComplete="username"
                hasError={Boolean(errors.username?.message)}
                {...register('username', {
                  required: 'Укажите логин.',
                })}
              />
              {usernameValue ? (
                <IconButton
                  type="button"
                  aria-label="Очистить логин"
                  onClick={() => setValue('username', '', { shouldValidate: true })}
                >
                  <IconImage src={clearIconUrl} alt="" />
                </IconButton>
              ) : (
                <IconSlot aria-hidden="true" />
              )}
            </InputWrap>
            {errors.username?.message ? (
              <FieldErrorText>{errors.username.message}</FieldErrorText>
            ) : null}
          </Field>

          <Field>
            <Label>Пароль</Label>
            <InputWrap>
              <IconSlot aria-hidden="true">
                <IconImage src={lockIconUrl} alt="" />
              </IconSlot>
              <TextInput
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Введите пароль"
                autoComplete="current-password"
                hasError={Boolean(errors.password?.message)}
                {...register('password', {
                  required: 'Укажите пароль.',
                })}
              />
              <IconButton
                type="button"
                aria-label={
                  isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'
                }
                onClick={() => setIsPasswordVisible((current) => !current)}
              >
                <IconImage
                  src={isPasswordVisible ? eyeOpenIconUrl : eyeClosedIconUrl}
                  alt=""
                />
              </IconButton>
            </InputWrap>
            {errors.password?.message ? (
              <FieldErrorText>{errors.password.message}</FieldErrorText>
            ) : null}
          </Field>
        </FieldGroup>

        <KeepRow>
          <KeepCheckbox type="checkbox" {...register('rememberMe')} />
          <KeepText>Запомнить данные</KeepText>
        </KeepRow>

        {apiError ? <FieldErrorText>{apiError}</FieldErrorText> : null}

        <div style={{ display: 'grid', gap: 16 }}>
          <PrimaryButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Загрузка...' : 'Войти'}
          </PrimaryButton>
          <OrRow aria-hidden="true">
            <OrLine />
            <OrText>или</OrText>
            <OrLine />
          </OrRow>
        </div>
      </Form>
      <BottomLink type="button">
        Нет аккаунта? <BottomLinkAccent>Создать</BottomLinkAccent>
      </BottomLink>
    </Card>
  )
}
