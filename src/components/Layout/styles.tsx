/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { H1 } from '../typography/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.primary100};
  padding: 18px 20px;
`

export const HeaderTitle = styled(H1)`
  font-style: italic;
  color: ${({ theme: { colors } }) => colors.primary};
`

export const Content = styled.div`
  padding: 36.55px 31px;
`
