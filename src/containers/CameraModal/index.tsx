import React from 'react'
import Button from '../../components/Button'
import AutoIdDocumentScanner from '../AutoIdDocumentScanner'
import { Content, Description, StyledModal, Title } from './styles'
import { CameraModalProps } from './types'

function CameraModal({
  isVisible,
  onCancel,
  onScan,
  isDocumentValid,
  imageSrc,
  ...props
}: CameraModalProps) {
  console.log('RE-RENDER')
  return (
    <StyledModal isVisible={isVisible} {...props}>
      <Content>
        <Title>Take picture</Title>
        <Description>
          Fit your ID card inside the frame. The picture will be taken automatically.
        </Description>
        <AutoIdDocumentScanner
          imageSrc={imageSrc}
          isDocumentValid={isDocumentValid}
          onScan={onScan}
        />
      </Content>
      <Button variant="no-background" onClick={onCancel}>
        Cancel
      </Button>
    </StyledModal>
  )
}

export default React.memo(CameraModal)
