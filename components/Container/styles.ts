import styled from 'styled-components'
import {BREAKPOINTS, scRespondTo } from 'styles/theme/respond'

export const Root = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  padding-right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  max-width: ${BREAKPOINTS.laptop}px;

  ${scRespondTo.sm} {
    padding-left: ${({ theme }) => theme.baseStyles.paddings.gutterDesktop};
    padding-right: ${({ theme }) => theme.baseStyles.paddings.gutterDesktop};
  }
`
