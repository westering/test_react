import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useAddProductModal } from '@/features/products/add-product/lib/useAddProductModal'
import type { AddProductValues } from '@/features/products/add-product/model/types'
import {
  Footer,
  Form,
} from '@/features/products/add-product/ui/AddProductModal.styles'
import { Button } from '@/shared/ui/controls/Button'
import { InputField } from '@/shared/ui/form/InputField'
import { Modal } from '@/shared/ui/overlay/Modal'

export const AddProductModal = () => {
  const { isOpen, close } = useAddProductModal()
  const [isSaving, setIsSaving] = useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductValues>()

  const onSubmit = handleSubmit(async (values) => {
    setIsSaving(true)
    void values
    toast.success('Товар добавлен')
    reset()
    close()
    setIsSaving(false)
  })

  return (
    <Modal isOpen={isOpen} title="Добавить товар" onClose={close}>
      <Form onSubmit={onSubmit}>
        <InputField
          label="Наименование"
          placeholder="Например, Wireless Keyboard"
          error={errors.title?.message}
          {...register('title', { required: 'Укажите наименование.' })}
        />
        <InputField
          label="Цена"
          type="number"
          min="1"
          step="0.01"
          placeholder="120"
          error={errors.price?.message}
          {...register('price', {
            required: 'Укажите цену.',
            validate: (value) =>
              Number(value) > 0 || 'Цена должна быть больше нуля.',
          })}
        />
        <InputField
          label="Вендор"
          placeholder="Например, Logitech"
          error={errors.brand?.message}
          {...register('brand', { required: 'Укажите вендора.' })}
        />
        <InputField
          label="Артикул"
          placeholder="Например, LOGI-K380"
          error={errors.sku?.message}
          {...register('sku', { required: 'Укажите артикул.' })}
        />

        <Footer>
          <Button type="button" variant="secondary" onClick={close}>
            Отмена
          </Button>
          <Button type="submit" isLoading={isSaving}>
            Сохранить
          </Button>
        </Footer>
      </Form>
    </Modal>
  )
}
