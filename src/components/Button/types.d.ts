import React from 'react'

export type ButtonProps = {
  color?: 'primary'
  variant?: 'rounded' | 'no-background'
} & React.HTMLAttributes<HTMLButtonElement>
