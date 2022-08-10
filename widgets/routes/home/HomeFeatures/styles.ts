import styled, { DefaultTheme } from 'styled-components'
import Cursor from '../../../../components/Cursor/Cursor'

interface Props {
  scheme?: 'save' | 'friends' | 'organize'
}

const colorsByScheme = (theme: DefaultTheme) => ({
  save: theme.colors.accent.fourth,
  organize: 'transparent',
  friends: theme.colors.accent.fifth
})

export const Section = styled.section`
  padding: 40px 0;
  position: relative;
  overflow: hidden;
`

export const Wrapper = styled.div<Props>`
  padding: 30px;
  border-radius: 40px;
  background: ${({ theme, scheme }) => colorsByScheme(theme)[scheme || 'save']};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;
  position: relative;
`

export const Title = styled.h2`
  margin: 0 0 15px 0;
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const Item = styled.li`
  color: ${({ theme }) => theme.colors.typography.third};
  ${({ theme }) => theme.typography.text_16_20};
  margin-bottom: 10px;

  span {
    font-weight: 800;
  }
`

export const Image = styled.div`
  height: 500px;
`

export const CursorSave = styled(Cursor)`
  position: absolute;
  left: 25%;
  bottom: 10%;
  z-index: 1;
`

export const CursorOrganize = styled(Cursor)`
  position: absolute;
  right: 10%;
  bottom: 18%;
  z-index: 1;
`

export const FragmentOne = styled.img`
  position: absolute;
  right: 0;
  top: 9%;
  transform: rotate(270deg);
`

export const FragmentTwo = styled.img`
  position: absolute;
  left: -20%;
  top: 5%;
`

export const FragmentThree = styled.img`
  position: absolute;
  right: 2%;
  top: 5%;
`
