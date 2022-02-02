import React from 'react'
import Button from '../../components/Button'
import DocumentCard from '../../components/DocumentCard'
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
        {/* TODO: image rendering with document image */}
        <DocumentCard isValid={isDocumentValid} imageSrc={picture}>
          {!isDocumentValid && (
            <Button onClick={handleEnableCameraModal}>
              {picture ? 'Retake picture' : 'Take picture'}
            </Button>
          )}
        </DocumentCard>
        {/* TODO: camera modal (use React.memo) */}
      </Container>
    </Layout>
  )
}
