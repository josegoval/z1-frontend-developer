import React from 'react'
import { ChildContainer, Container, Image } from './styles'
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
      {imageSrc ? <Image src={imageSrc} alt="Your document" /> : <DocumentFallbackSvg />}
      {children && <ChildContainer>{children}</ChildContainer>}
      {/* TODO: FeedbackLabel componetized */}
    </Container>
  )
}
