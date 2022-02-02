/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { ModalProps } from './types'
import FALLBACK_BACKGROUND_IMG_SRC from '../../assets/backgrounds/andyone--WW8jBak7bo-unsplash.jpg'

export const Container = styled.div<ModalProps>`
  /* layout */
  position: fixed;
  inset: 0;
  max-width: 100vw;
  max-height: 100vh;
  z-index: 100;
  /* background */
  background: ${({ backgroundImageSrc, theme: { colors } }) => `linear-gradient(0deg, ${
    colors.overlay
  }, ${colors.overlay}),
    url(${backgroundImageSrc || FALLBACK_BACKGROUND_IMG_SRC})}`};
  background-size: cover;
  /* blur effect */
  /* -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  transform: scale(1.015); */
  /* spacing */
  padding: 104.55px 46px 48px;
`
