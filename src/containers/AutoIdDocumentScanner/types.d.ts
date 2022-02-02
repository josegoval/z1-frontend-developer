import { HTMLAttributes } from 'react'

export type AutoIdDocumentScannerProps = {
  isValid: boolean
  imageSrc: string
  onScan: (image: string, isValid: bool) => unknown
} & HTMLAttributes<HTMLDivElement>
