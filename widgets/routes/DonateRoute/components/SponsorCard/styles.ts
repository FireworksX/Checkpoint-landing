import styled from 'styled-components'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.accent.first};
  text-align: center;
  padding: 15px 30px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
`

export const FullName = styled.div`
  ${({ theme }) => theme.typography.text_20_24};
  color: ${({ theme }) => theme.colors.typography.fourth};
  font-weight: 800;
`

export const Username = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.typography.second};
  margin-bottom: 20px;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.typography.fourth};
  margin-bottom: 30px;
`
