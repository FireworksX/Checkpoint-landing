import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface MainLayoutProps {
  className?: string
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      <main>{children}</main>
    </Styled.Root>
  )
}

export default MainLayout
