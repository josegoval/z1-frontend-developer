import { ModalProps } from '../../components/Modal/types'
import { AutoIdDocumentScannerProps } from '../AutoIdDocumentScanner/types'

export type CameraModalProps = {
  onCancel: () => unknown
} & AutoIdDocumentScannerProps &
  ModalProps
