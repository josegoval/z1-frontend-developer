/* eslint-disable import/prefer-default-export */
import styled, { css, keyframes } from 'styled-components'
import MOCK_BACKGROUND_IMG_SRC from '../../assets/backgrounds/andyone--WW8jBak7bo-unsplash.jpg'
import { AutoIdDocumentScannerProps } from './types'

export const Container = styled.div<Partial<AutoIdDocumentScannerProps>>`
  position: relative;
  height: 179px;
  width: 289px;
  border-radius: 18px;

  ${({ imageSrc, isDocumentValid, theme: { colors } }) =>
    imageSrc &&
    css`
      border: 2px solid ${isDocumentValid ? colors.success : colors.error};
    `}

  /* mock data */
  background-image: url(${MOCK_BACKGROUND_IMG_SRC});
  background-size: 500%;
  background-position: center;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`

const ScanAnimation = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(179px);
    transform: translateY(179px);
  }
`

export const AnimatedScanner = styled.div`
  height: 3px;
  width: 290px;
  position: absolute;
  z-index: 10;
  /* TODO: remove if not necessary */
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 3%,
    rgba(89, 192, 221, 1) 50%,
    rgba(0, 0, 0, 0) 97%
  );
  /* animation */
  -moz-animation: ${ScanAnimation} 3s infinite;
  -webkit-animation: ${ScanAnimation} 3s infinite;
  animation: ${ScanAnimation} 3s infinite;
  -webkit-animation-direction: alternate-reverse;
`
