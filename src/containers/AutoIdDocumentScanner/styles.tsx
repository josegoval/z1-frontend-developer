/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'
import MOCK_BACKGROUND_IMG_SRC from '../../assets/backgrounds/andyone--WW8jBak7bo-unsplash.jpg'
import { AutoIdDocumentScannerProps } from './types'

export const Container = styled.div<Partial<AutoIdDocumentScannerProps>>`
  position: relative;
  box-sizing: border-box;
  height: 179px;
  width: 289px;
  border-radius: 18px;

  ${({ imageSrc, isValid, theme: { colors } }) =>
    imageSrc &&
    css`
      border: 2px solid ${isValid ? colors.success : colors.error};
    `}
  /* mock data */
  background-image: url(${MOCK_BACKGROUND_IMG_SRC});
  object-fit: none;
`

export const AnimatedScanner = styled.div`
  height: 1px;
  width: 290px;
  /* TODO: remove if not necessary */
  /* background: rgb(2, 0, 36); */
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 5%,
    rgba(89, 192, 221, 1) 51%,
    rgba(0, 0, 0, 0) 94%
  );
  /* animation */
  @keyframes backandforth {
    0% {
      top: 0;
    }
    50% {
      top: 58%;
    }
    100% {
      top: 0;
    }
  }
`
