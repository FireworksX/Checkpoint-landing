import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

interface Props {
  scheme?: ButtonProps['scheme']
}

const themeByScheme = {
  primary: css`
    border-radius: 40px;
    background: ${({ theme }) => theme.colors.background.first};
    color: ${({ theme }) => theme.colors.typography.first};

    &:hover {
      transform: scale(1.1);
    }
  `
}

export const Root = styled.button<Props>`
  font-weight: 700;
  text-decoration: none !important;
  background-color: ${({ theme }) => theme.colors.background.third};
  color: ${({ theme }) => theme.colors.typography.first};
  border: none;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSecond};
  cursor: pointer;
  justify-content: center;
  padding: 0 32px;
  height: 48px;
  text-align: center;
  white-space: nowrap;
  transition: all ${({ theme }) => theme.animation.transitionDuration};
  ${({ theme }) => theme.typography.text_14_24};

  &:hover {
    background: ${({ theme }) => theme.colors.accent.second};
  }

  &:active {
    outline: 0;
  }

  ${({ scheme }) => scheme && themeByScheme[scheme]};
`
