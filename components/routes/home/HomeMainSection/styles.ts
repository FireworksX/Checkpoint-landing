import styled from 'styled-components'
import Image from 'next/image'
import Cursor from 'components/Cursor/Cursor'

export const Root = styled.section`
  background: ${({ theme }) => theme.colors.accent.first};
  padding: 140px 0 150px 0;
  position: relative;
`

export const Heart = styled.div`
  position: absolute;
  top: auto;
  right: 10%;
  transform: rotate(15deg);
  max-width: 125px;
  max-height: 125px;
`

export const Title = styled.h1`
  font-weight: 800;
  margin: 0 0 30px 0;
  text-align: center;
  font-size: 58px;
  line-height: 54px;
  color: ${({ theme }) => theme.colors.typography.third};
`

export const Typing = styled.div`
  font-weight: 800;
  text-align: center;
  font-size: 58px;
  color: ${({ theme }) => theme.colors.accent.second};
  margin-bottom: 10px;
  min-height: 30px;
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
  height: 600px;
  background: ${({ theme }) => theme.colors.background.fourth};
  border-radius: 5px;
`

export const CursorSearch = styled(Cursor)`
  position: absolute;
  right: 20%;
  top: 50%;
`

export const CursorAdd = styled(Cursor)`
  position: absolute;
  left: 10%;
  top: 60%;
`

export const CursorCheck = styled(Cursor)`
  position: absolute;
  left: 20%;
  top: 80%;
`
