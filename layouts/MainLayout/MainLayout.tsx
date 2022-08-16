import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import Footer from './widgets/Footer/Footer'
import Header from './widgets/Header/Header'

interface MainLayoutProps {
  className?: string
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Styled.Root>
  )
}

export default MainLayout
