import { useCallback, useEffect } from 'react'
import validateIdDocument from '../../api/idDocuments'
import { OnScanFunction } from './types'
import MOCK_ID_DOCUMENT_SRC from '../../assets/mock-id-card.png'

const useLogic = (imageSrc: string, isDocumentValid: boolean, onScan: OnScanFunction) => {
  const autoTakePicture = useCallback(
    async (document: string) => {
      const isValid = (await validateIdDocument(document)).summary.outcome === 'Approved'
      onScan(document, isValid)
    },
    [onScan]
  )

  useEffect(() => {
    // WARNING: mocked step!
    if (imageSrc && isDocumentValid) return

    const id = setInterval(() => {
      autoTakePicture(MOCK_ID_DOCUMENT_SRC)
    }, 2000)
    // eslint-disable-next-line consistent-return
    return () => id && clearInterval(id)
  }, [autoTakePicture, isDocumentValid, imageSrc])
}

export default useLogic
