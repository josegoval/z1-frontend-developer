import useLogic from './logic'
import { AnimatedScanner, Container, Image } from './styles'
import { AutoIdDocumentScannerProps } from './types'

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
      {imageSrc ? <Image src={imageSrc} alt="Your scan" /> : <AnimatedScanner />}
    </Container>
  )
}
