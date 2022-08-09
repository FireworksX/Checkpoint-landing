import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface ContainerProps {
  className?: string
  children: ReactNode | ReactNode[]
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default Container
