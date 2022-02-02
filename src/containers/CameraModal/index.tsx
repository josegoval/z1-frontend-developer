import Button from '../../components/Button'
import AutoIdDocumentScanner from '../AutoIdDocumentScanner'
import { Content, Description, StyledModal, Title } from './styles'
import { CameraModalProps } from './types'

export default function CameraModal({ isVisible, onCancel, ...props }: CameraModalProps) {
  return (
    <StyledModal isVisible={isVisible} {...props}>
      <Content>
        <Title>Take picture</Title>
        <Description>
          Fit your ID card inside the frame. The picture will be taken automatically.
        </Description>
        <AutoIdDocumentScanner imageSrc="" isValid onScan={() => {}} />
      </Content>
      <Button variant="no-background" onClick={onCancel}>
        Cancel
      </Button>
    </StyledModal>
  )
}
