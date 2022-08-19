import { FC } from 'react'
import * as Styled from './styles'
import MainLayout from 'layouts/MainLayout/MainLayout'

interface DonateRouteProps {
  className?: string
}

const DonateRoute: FC<DonateRouteProps> = ({ className }) => {
  return (
    <MainLayout>
      <Styled.Root className={className}>DonateRoute</Styled.Root>
    </MainLayout>
  )
}

export default DonateRoute
