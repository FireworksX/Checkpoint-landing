import styled, { css } from 'styled-components'
import { scRespondTo } from 'styles/theme/respond'
import { CursorProps } from './Cursor'

interface Props {
  direction?: CursorProps['direction']
  scheme?: CursorProps['scheme']
}

export const Arrow = styled.div`
  position: absolute;
  top: -40px;
  width: 27px;
  height: 32px;
  color: ${({ theme }) => theme.colors.accent.second};
`

const directions = {
  left: css`
    border-radius: 0 100px 100px 100px;

    ${Arrow} {
      left: -40px;
      transform: rotate(-45deg);
    }
  `,
  right: css`
    border-radius: 100px 0 100px 100px;

    ${Arrow} {
      left: initial;
      right: -40px;
      transform: rotate(45deg);
    }
  `
}

const colors = {
  green: css`
    color: ${({ theme }) => theme.colors.typography.fourth};
    background: ${({ theme }) => theme.colors.accent.sixth};

    ${Arrow} {
      color: ${({ theme }) => theme.colors.accent.sixth};
    }
  `,
  blue: css`
    color: ${({ theme }) => theme.colors.typography.first};
    background: ${({ theme }) => theme.colors.accent.second};

    ${Arrow} {
      color: ${({ theme }) => theme.colors.accent.second};
    }
  `,
  orange: css`
    color: ${({ theme }) => theme.colors.typography.fourth};
    background: ${({ theme }) => theme.colors.accent.seventh};

    ${Arrow} {
      color: ${({ theme }) => theme.colors.accent.seventh};
    }
  `,
  pink: css`
    color: ${({ theme }) => theme.colors.typography.first};
    background: ${({ theme }) => theme.colors.accent.eighth};

    ${Arrow} {
      color: ${({ theme }) => theme.colors.accent.eighth};
    }
  `
}

export const Root = styled.div<Props>`
  padding: 10px 15px 10px 10px;
  display: inline-flex;
  align-items: center;
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.typography.first};
  background: ${({ theme }) => theme.colors.accent.second};
  font-weight: 400;

  ${({ direction }) => directions[direction || 'left']}
  ${({ scheme }) => scheme && colors[scheme]}
  
  ${scRespondTo.sm} {
    ${({ theme }) => theme.typography.text_14_24};
  }
`

export const Avatar = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
