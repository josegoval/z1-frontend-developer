/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import Modal from '../../components/Modal'
import { H1, P } from '../../components/typography/styles'

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled(H1)`
  color: white;
  text-align: center;
`

export const Description = styled(P)`
  color: white;
  margin-top: 16px;
  margin-bottom: 56px;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
