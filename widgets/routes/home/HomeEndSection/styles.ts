import styled from 'styled-components'
import { scRespondTo } from 'styles/theme/respond'

export const Root = styled.section`
  padding: 0;
  position: relative;
`

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 85px;
  width: 70%;

  ${scRespondTo.sm} {
    top: 115px;
  }

  ${scRespondTo.md} {
    top: 150px;
  }
`

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.fourth};
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: 800;
  margin-bottom: 10px;

  ${scRespondTo.sm} {
    margin-bottom: 30px;
    ${({ theme }) => theme.typography.text_32_38};
  }

  ${scRespondTo.md} {
    ${({ theme }) => theme.typography.text_38_44};
  }
`

export const ButtonWrapper = styled.div`
  text-align: center;
`

export const CoverMobile = styled.img`
  width: 100%;
  height: 250px;

  ${scRespondTo.ms} {
    display: none;
  }
`

export const Cover = styled.img`
  width: 100%;
  display: none;
  height: 350px;

  ${scRespondTo.ms} {
    display: block;
  }

  ${scRespondTo.md} {
    display: block;
    height: 450px;
  }
`
