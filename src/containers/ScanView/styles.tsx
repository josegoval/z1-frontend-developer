/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { H1, P } from '../../components/typography/styles'

export const Title = styled(H1)`
  text-align: center;
`

export const Description = styled(P)`
  margin-top: 29.24px;
  margin-bottom: 27px;
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
