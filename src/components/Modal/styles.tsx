/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { ModalProps } from './types'

export const Container = styled.div<ModalProps>`
  /* layout */
  position: fixed;
  inset: 0;
  max-width: 100vw;
  max-height: 100vh;
  z-index: 100;

  ::after {
    content: ''; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.overlay};
    z-index: 2;
  }
`

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
  z-index: 1;
  /* blur effect */
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  transform: scale(1.015);
`

export const ChildrenContainer = styled.div`
  position: absolute;
  inset: 0;
  max-width: 100vw;
  z-index: 3;
  margin: 0;
  padding: 104.55px 46px 48px;
`
