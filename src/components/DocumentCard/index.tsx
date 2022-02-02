import { ChildContainer, Container, Image, StatusPill } from './styles'
import { ReactComponent as DocumentFallbackSvg } from '../../assets/document-fallback-sketch.svg'
import { DocumentCardPropsProps } from './types'

export default function DocumentCard({
  imageSrc,
  isValid,
  children,
  ...props
}: DocumentCardPropsProps) {
  return (
    <Container imageSrc={imageSrc} isValid={isValid} {...props}>
      {imageSrc ? (
        <>
          <Image src={imageSrc} alt="Your document" />
          <StatusPill isValid={isValid} />
        </>
      ) : (
        <DocumentFallbackSvg />
      )}
      {children && <ChildContainer>{children}</ChildContainer>}
    </Container>
  )
}
