import styled from 'styled-components'
import Cursor from 'components/Cursor/Cursor'
import { scRespondTo } from 'styles/theme/respond'

export const Root = styled.section`
  background: ${({ theme }) => theme.colors.accent.first};
  padding: 80px 0 80px 0;
  position: relative;
`

export const Heart = styled.div`
  position: absolute;
  top: auto;
  right: 10%;
  transform: rotate(15deg);
  max-width: 125px;
  max-height: 125px;
  display: none;

  ${scRespondTo.ms} {
    display: block;
    width: 80px;
  }
`

export const Title = styled.h1`
  font-weight: 800;
  margin: 0;
  text-align: center;
  font-size: 28px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.typography.third};
  margin-bottom: 10px;

  ${scRespondTo.sm} {
    font-size: 48px;
    line-height: 44px;
  }
`

export const Typing = styled.div`
  font-weight: 800;
  text-align: center;
  font-size: 23px;
  color: ${({ theme }) => theme.colors.accent.second};
  margin-bottom: 10px;
  min-height: 30px;

  ${scRespondTo.sm} {
    font-size: 48px;
    line-height: 44px;
  }

  .typed-cursor {
    display: none;
  }
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.fourth};
  margin-bottom: 50px;
`

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

export const Cover = styled.div`
  height: 200px;
  background: ${({ theme }) => theme.colors.background.fourth};
  border-radius: 5px;

  ${scRespondTo.sm} {
    height: 500px;
  }
`

export const CursorSearch = styled(Cursor)`
  position: absolute;
  right: 10%;
  top: 85%;
  width: 200px;

  ${scRespondTo.sm} {
    width: initial;
    right: 10%;
  }
`

export const CursorAdd = styled(Cursor)`
  position: absolute;
  left: 10%;
  top: 60%;
  display: none;

  ${scRespondTo.sm} {
    display: block;
    left: 5%;
  }
`

export const CursorCheck = styled(Cursor)`
  position: absolute;
  left: 20%;
  top: 80%;
  display: none;

  ${scRespondTo.sm} {
    display: block;
    left: 10%;
  }
`
