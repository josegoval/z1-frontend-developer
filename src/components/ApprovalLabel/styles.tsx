/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { ApprovalLabelProps } from './types'

export const Label = styled.p<ApprovalLabelProps>`
  /* layout */
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 8px;
  border: 2px solid ${({ isValid, theme: { colors } }) => (isValid ? colors.success : colors.error)};
  border-radius: 4px;
  background-color: ${({ isValid, theme: { colors } }) =>
    isValid ? colors.success : colors.error};

  /* font */
  text-transform: uppercase;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.75px;
  line-height: 12px;
`
