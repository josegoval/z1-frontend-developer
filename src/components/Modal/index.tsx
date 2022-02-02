import { BackgroundImage, ChildrenContainer, Container } from './styles'
import { ModalProps } from './types'
import FALLBACK_BACKGROUND_IMG_SRC from '../../assets/backgrounds/andyone--WW8jBak7bo-unsplash.jpg'

export default function Modal({
  isVisible,
  backgroundImageSrc = FALLBACK_BACKGROUND_IMG_SRC,
  children,
  className,
  ...props
}: ModalProps) {
  if (!isVisible) return null

  return (
    <Container {...props}>
      <BackgroundImage src={backgroundImageSrc} />
      <ChildrenContainer className={className}>{children}</ChildrenContainer>
    </Container>
  )
}
