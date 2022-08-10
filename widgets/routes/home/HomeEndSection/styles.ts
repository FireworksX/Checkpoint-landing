import styled from 'styled-components'

export const Root = styled.section`
  padding: 0;
  position: relative;
`

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 200px;
`

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-size: 45px;
  margin-top: 48px;
  font-weight: 800;
  margin-bottom: 60px;
`

export const ButtonWrapper = styled.div`
  text-align: center;
`
