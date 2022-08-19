import { FC } from 'react'
import Link from 'next/link'
import * as Styled from './styles'
import { useRouter } from 'next/router'

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { pathname } = useRouter()

  return (
    <Styled.Root className={className}>
        <Styled.Wrapper>
          <Styled.Logo />
          <Styled.Navigation>
            <Link href='/' passHref>
              <Styled.NavigationCell isActive={pathname === '/'}>Главная</Styled.NavigationCell>
            </Link>
            <Link href='/about' passHref>
              <Styled.NavigationCell isActive={pathname === '/about'}>О нас</Styled.NavigationCell>
            </Link>
          </Styled.Navigation>
        </Styled.Wrapper>
    </Styled.Root>
  )
}

export default Header
