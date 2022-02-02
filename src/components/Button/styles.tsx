/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const StyledButton = styled.button<ButtonProps>`
  /* layout */
  min-height: 48px;
  min-width: 160px;
  padding: 12px 20px;
  border-width: 0;

  /* font */
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
  color: #ffffff;

  :hover {
    cursor: pointer;
  }

  /* colors */
  ${({ color }) =>
    color === 'primary' &&
    css`
      background-color: ${({ theme: { colors } }) => colors.primary};
      box-shadow: 0 10px 20px -5px ${({ theme: { colors } }) => colors.primary300};

      :hover {
        background-color: ${({ theme: { colors } }) => colors.primary800};
        box-shadow: 0 10px 20px -2px ${({ theme: { colors } }) => colors.primary300};
      }
    `}
  /* variants */
  ${({ variant }) => {
    if (variant === 'rounded')
      return css`
        border-radius: 24px;
      `
    return css`
      background: none;
      box-shadow: none;
      :hover {
        background: none;
        box-shadow: none;
      }
    `
  }}
`
