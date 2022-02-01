import React from 'react'
import Button from '../../components/Button'
import FallbackDocumentCard from '../../components/FallbackDocumentCard'
import Layout from '../../components/Layout'
import useLogic from './logic'
import { Container, Description, Title } from './styles'

export default function ScanView() {
  const {
    picture,
    isDocumentValid,
    isModalVisible,
    handleEnableCameraModal,
    handleDisableCameraModal,
    handleAutoTakePicture,
  } = useLogic()

  return (
    <Layout>
      <Container>
        <Title>Scan your ID</Title>
        <Description>
          Take a picture. It may take time to validate your personal information.
        </Description>
        <FallbackDocumentCard>
          <Button onClick={handleEnableCameraModal}>Take picture</Button>
        </FallbackDocumentCard>
        {/* TODO: camera modal (use React.memo) */}
      </Container>
    </Layout>
  )
}
