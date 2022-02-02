import useLogic from './logic'
import { AnimatedScanner, Container, FeedbackText, Image } from './styles'
import { AutoIdDocumentScannerProps } from './types'
import { ReactComponent as WarningIcon } from '../../assets/icons/bulb-icon.svg'
import { ReactComponent as SuccessIcon } from '../../assets/icons/success-icon.svg'

export default function AutoIdDocumentScanner({
  isDocumentValid,
  imageSrc,
  onScan,
  ...props
}: AutoIdDocumentScannerProps) {
  useLogic(imageSrc, isDocumentValid, onScan)

  return (
    <Container isDocumentValid={isDocumentValid} imageSrc={imageSrc} {...props}>
      {/* Mock id documents */}
      {imageSrc ? (
        <>
          <Image src={imageSrc} alt="Your scan" />
          {isDocumentValid && (
            <FeedbackText>
              <SuccessIcon />
              <span>Picture taken!</span>
            </FeedbackText>
          )}
        </>
      ) : (
        <>
          <AnimatedScanner />
          <FeedbackText>
            <WarningIcon />
            <span>Room lighting is too low</span>
          </FeedbackText>
        </>
      )}
    </Container>
  )
}
