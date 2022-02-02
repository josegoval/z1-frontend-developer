import React from 'react'

export type ModalProps = {
  isVisible?: boolean
  backgroundImageSrc?: string
} & React.HTMLAttributes<HTMLDivElement>
