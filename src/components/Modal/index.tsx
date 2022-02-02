import { Container } from './styles'
import { ModalProps } from './types'

export default function Modal({ isVisible, children, ...props }: ModalProps) {
  if (!isVisible) return null

  return <Container {...props}>{children}</Container>
}
