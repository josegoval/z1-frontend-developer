import { HTMLAttributes } from 'react'

export type OnScanFunction = (image: string, isValid: bool) => unknown

export type AutoIdDocumentScannerProps = {
  isDocumentValid: boolean
  imageSrc: string
  onScan: OnScanFunction
} & HTMLAttributes<HTMLDivElement>
