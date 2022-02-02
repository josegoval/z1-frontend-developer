import React from 'react'
import Button from '../../components/Button'
import DocumentCard from '../../components/DocumentCard'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'
import useLogic from './logic'
import { AnimatedScanner, Container } from './styles'
import { AutoIdDocumentScannerProps } from './types'

export default function AutoIdDocumentScanner({
  isValid,
  imageSrc,
  onScan,
  ...props
}: AutoIdDocumentScannerProps) {
  return (
    <Container isValid={isValid} imageSrc={imageSrc} {...props}>
      {/* Mock id document */}
      {imageSrc ? (
        <img src={imageSrc} width="100%" height="100%" alt="Your scan" />
      ) : (
        <AnimatedScanner />
      )}
    </Container>
  )
}
