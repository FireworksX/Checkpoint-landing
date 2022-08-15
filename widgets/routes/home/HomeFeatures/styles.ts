import styled, { DefaultTheme } from 'styled-components'
import Cursor from '../../../../components/Cursor/Cursor'
import { scRespondTo } from '../../../../styles/theme/respond'

interface Props {
  scheme?: 'save' | 'friends' | 'organize'
}

const colorsByScheme = (theme: DefaultTheme) => ({
  save: theme.colors.accent.fourth,
  organize: 'transparent',
  friends: theme.colors.accent.fifth
})

export const Section = styled.section`
  padding: 30px 0;
  position: relative;

  ${scRespondTo.sm} {
    padding: 50px 0;
  }
`

export const Wrapper = styled.div<Props>`
  padding: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  border-radius: 40px;
  background: ${({ theme, scheme }) => colorsByScheme(theme)[scheme || 'save']};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  align-items: center;
  position: relative;

  ${scRespondTo.sm} {
    grid-template-columns: 1fr 1fr;
    padding: ${({ theme }) => theme.baseStyles.paddings.gutterDesktop};
  }
`

export const Title = styled.h2`
  margin: 0 0 15px 0;
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;
  ${({ theme }) => theme.typography.text_26_30}

  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_32_38}
  }
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
  height: 200px;
  grid-row: 1 / 1;

  ${scRespondTo.sm} {
    grid-row: initial;
    height: 500px;
  }
`

export const ButtonWrapper = styled.div`
  text-align: center;

  ${scRespondTo.sm} {
    text-align: left;
  }
`

export const CursorSave = styled(Cursor)`
  width: 200px;
  position: absolute;
  left: 40%;
  bottom: -3%;
  z-index: 1;

  ${scRespondTo.ms} {
    left: calc(35% + 100px);
  }

  ${scRespondTo.sm} {
    width: initial;
    left: calc(35% - 100px);
    bottom: 17%;
  }
`

export const CursorOrganize = styled(Cursor)`
  width: 200px;
  position: absolute;
  right: 5%;
  bottom: -7%;
  z-index: 1;

  ${scRespondTo.sm} {
    width: initial;
    bottom: 17%;
  }
`

export const FragmentOne = styled.img`
  position: absolute;
  right: 0;
  top: 9%;
  transform: rotate(270deg);
  width: 60px;
  z-index: 1;

  ${scRespondTo.sm} {
    width: 300px;
  }
`

export const FragmentTwo = styled.img`
  position: absolute;
  width: 150px;
  left: -20%;
  top: 5%;

  ${scRespondTo.sm} {
    left: -20%;
    top: 5%;
    width: 250px;
  }
`

export const FragmentThree = styled.img`
  position: absolute;
  right: 2%;
  top: 5%;
  width: 60px;
  z-index: 1;

  ${scRespondTo.sm} {
    right: 2%;
    top: 5%;
    width: 150px;
  }
`
