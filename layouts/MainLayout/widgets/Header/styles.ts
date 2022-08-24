import styled from 'styled-components'
import Container from 'components/Container/Container'
import { scRespondTo } from '../../../../styles/theme/respond'

interface Props {
  isActive?: boolean
}

export const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

export const Wrapper = styled(Container)`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  height: 50px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  display: none;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavigationCell = styled.a<Props>`
  padding: 15px;
  border-radius: 40px;
  background: ${({ theme, isActive }) => isActive && theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_14_24};
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_16_20};
  }
`
