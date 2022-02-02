import { useCallback, useEffect, useState } from 'react'
import validateIdDocument from '../../api/idDocuments'

const useLogic = () => {
  const [picture, setPicture] = useState('')
  const [isDocumentValid, setIsDocumentValid] = useState(false)
  const [isCameraModalVisible, setIsCameraModalVisible] = useState(false)

  // WARNING: To me, all these useCallbacks is overoptimizing,
  // and probably not good for performance,
  // but since you ask for hooks, I decided to set it here.
  const handleEnableCameraModal = useCallback(() => {
    setIsCameraModalVisible(true)
  }, [setIsCameraModalVisible])

  const handleDisableCameraModal = useCallback(() => {
    setIsCameraModalVisible(false)
  }, [setIsCameraModalVisible])

  const handleAutoTakePicture = useCallback(
    async (document: string) => {
      setPicture(document)
      const isValid = (await validateIdDocument(document)).summary.outcome === 'Approved'
      setIsDocumentValid(isValid)
      // WARNING: I would the below useEffect here
    },
    [setPicture, setIsDocumentValid]
  )

  useEffect(() => {
    if (!isDocumentValid) return

    const id = setTimeout(() => {
      setIsCameraModalVisible(false)
    }, 2000)
    // eslint-disable-next-line consistent-return
    return () => id && clearTimeout(id)
  }, [isDocumentValid])

  return {
    picture,
    isDocumentValid,
    isCameraModalVisible,
    handleEnableCameraModal,
    handleDisableCameraModal,
    handleAutoTakePicture,
  }
}

export default useLogic
