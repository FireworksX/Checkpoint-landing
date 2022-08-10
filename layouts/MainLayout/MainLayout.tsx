import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import Footer from './widgets/Footer/Footer'

interface MainLayoutProps {
  className?: string
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      <main>{children}</main>
      <Footer />
    </Styled.Root>
  )
}

export default MainLayout
