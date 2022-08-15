import styled from 'styled-components'
import Container from 'components/Container/Container'
import { scRespondTo } from 'styles/theme/respond'

export const Root = styled.div`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.background.first};
`

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  ${scRespondTo.sm} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`

export const Logo = styled.div`
  width: 120px;
  height: 60px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.typography.second};
`

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_14_24}
`

export const List = styled.div`
  list-style-type: none;
`

export const Hiring = styled.div`
  color: ${({ theme }) => theme.colors.accent.first};
  ${({ theme }) => theme.typography.text_18_22}
  margin-bottom: 15px;
`

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.typography.first};
  ${({ theme }) => theme.typography.text_18_22}
  font-weight: 800;
`
