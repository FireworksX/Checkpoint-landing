import styled from 'styled-components'

export const Root = styled.section`
  background: ${({ theme }) => theme.colors.accent.first};
  position: relative;
  padding: 340px 0 100px 0;
  margin-top: 200px;
`

export const Image = styled.div`
  width: calc(100% - ${({ theme }) => theme.baseStyles.paddings.gutterDesktop});
  height: 400px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -100px;
  max-width: 600px;
  background: ${({ theme }) => theme.colors.background.first};
`

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.fourth};
  ${({ theme }) => theme.typography.text_32_38};
  font-weight: 800;
`

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.typography.fourth};
  ${({ theme }) => theme.typography.text_16_20};
  margin-bottom: 40px;
`

export const ButtonWrapper = styled.div`
  text-align: center;
`
