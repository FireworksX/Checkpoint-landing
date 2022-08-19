import { FC, ReactNode } from 'react'
import * as Styled from './styles'

export interface ButtonProps {
  className?: string
  children: ReactNode
  scheme?: 'primary' | 'primaryReverse'
}

const Button: FC<ButtonProps> = ({ className, children, scheme }) => {
  return (
    <Styled.Root className={className} scheme={scheme}>
      {children}
    </Styled.Root>
  )
}

export default Button
