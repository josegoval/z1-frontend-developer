/* eslint-disable react/jsx-props-no-spreading */
import { StyledButton } from './styles'
import { ButtonProps } from './types'

export default function Button({ color = 'primary', variant = 'rounded', ...props }: ButtonProps) {
  return <StyledButton color={color} variant={variant} {...props} />
}
