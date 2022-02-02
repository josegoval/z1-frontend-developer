import Button from '../../components/Button'
import DocumentCard from '../../components/DocumentCard'
import Layout from '../../components/Layout'
import CameraModal from '../CameraModal'
import useLogic from './logic'
import { Container, Description, Title } from './styles'

export default function ScanView() {
  const {
    picture,
    isDocumentValid,
    isCameraModalVisible,
    handleEnableCameraModal,
    handleDisableCameraModal,
    handleScan,
  } = useLogic()

  return (
    <Layout>
      <Container>
        <Title>Scan your ID</Title>
        <Description>
          Take a picture. It may take time to validate your personal information.
        </Description>
        <DocumentCard isValid={isDocumentValid} imageSrc={picture}>
          {!isDocumentValid && (
            <Button onClick={handleEnableCameraModal}>
              {picture ? 'Retake picture' : 'Take picture'}
            </Button>
          )}
        </DocumentCard>
        <CameraModal
          isVisible={isCameraModalVisible}
          onCancel={handleDisableCameraModal}
          onScan={handleScan}
          imageSrc={picture}
          isDocumentValid={isDocumentValid}
        />
      </Container>
    </Layout>
  )
}
