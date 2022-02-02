/* eslint-disable react/jsx-props-no-spreading */
import { Label } from './styles'
import { ApprovalLabelProps } from './types'
import { ReactComponent as ApprovedIconSvg } from '../../assets/icons/approved-icon.svg'
import { ReactComponent as NotApprovedIconSvg } from '../../assets/icons/not-approved-icon.svg'

export default function ApprovalLabel({ isValid, ...props }: ApprovalLabelProps) {
  // WARNING: I would use react-icons library if necessary
  return (
    <Label isValid={isValid} {...props}>
      {isValid ? (
        <>
          <ApprovedIconSvg />
          Accepted
        </>
      ) : (
        <>
          <NotApprovedIconSvg />
          Rejected
        </>
      )}
    </Label>
  )
}
