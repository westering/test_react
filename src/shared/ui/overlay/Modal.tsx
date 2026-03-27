import type { PropsWithChildren } from 'react'
import {
  CloseButton,
  Dialog,
  Header,
  Overlay,
  Title,
} from '@/shared/ui/overlay/Modal.styles'

type ModalProps = PropsWithChildren<{
  isOpen: boolean
  title: string
  onClose: () => void
}>

export const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay role="presentation" onClick={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <Header>
          <Title>{title}</Title>
          <CloseButton type="button" onClick={onClose}>
            ×
          </CloseButton>
        </Header>
        {children}
      </Dialog>
    </Overlay>
  )
}
