import React from 'react'

export type DocumentCardPropsProps = {
  imageSrc?: string
  isValid: boolean
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>
