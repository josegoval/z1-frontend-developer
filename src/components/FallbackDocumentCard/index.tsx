import React from 'react'
import { ChildContainer, Container } from './styles'
import { ReactComponent as DocumentFallbackSvg } from '../../assets/document-fallback-sketch.svg'
import { FallbackDocumentCardProps } from './types'

export default function FallbackDocumentCard({ children, ...props }: FallbackDocumentCardProps) {
  return (
    <Container {...props}>
      <DocumentFallbackSvg />
      {children && <ChildContainer>{children}</ChildContainer>}
    </Container>
  )
}
