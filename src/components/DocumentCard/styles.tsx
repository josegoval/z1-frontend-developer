/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'
import ApprovalLabel from '../ApprovalLabel'
import { DocumentCardPropsProps } from './types'

export const Container = styled.div<DocumentCardPropsProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 160px;
  width: 260px;

  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);

  ${({ imageSrc, isValid, theme: { colors } }) =>
    imageSrc &&
    css`
      border: 2px solid ${isValid ? colors.success : colors.error};
    `}
`

export const FeedbackLabel = styled.p`
  /* TODO: componetize */
`

export const ChildContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const StatusPill = styled(ApprovalLabel)`
  position: absolute;
  bottom: -15px;
  right: 24px;
  z-index: 3;
`
