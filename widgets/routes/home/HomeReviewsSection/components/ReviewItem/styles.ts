import styled from 'styled-components'

export const Root = styled.div``

export const Rates = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Rate = styled.img`
  height: 20px;
  margin: 0 3px;
`

export const Text = styled.p`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.typography.third};
  text-align: center;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.typography.third};
`

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  font-weight: 800;
`

export const Deal = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
`
