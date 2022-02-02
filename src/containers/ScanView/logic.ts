import { useCallback, useEffect, useState } from 'react'
import { OnScanFunction } from '../AutoIdDocumentScanner/types'

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

  const handleScan = useCallback<OnScanFunction>(
    (image, isValid) => {
      console.log('SCANNED -> IS VALID', isValid)
      setPicture(image)
      setIsDocumentValid(isValid)
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
    handleScan,
  }
}

export default useLogic
