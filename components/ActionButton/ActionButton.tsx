import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import Button from '../Button/Button'

interface ActionButtonProps {
  className?: string
  children: ReactNode | ReactNode[]
}

const ActionButton: FC<ActionButtonProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className} href='https://app.checkpoint.guide'>
      <Button scheme='primary'>{children}</Button>
    </Styled.Root>
  )
}

export default ActionButton
