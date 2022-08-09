import { css } from 'styled-components'

export const BREAKPOINTS = {
  xs: 320,
  ms: 480,
  sm: 768,
  md: 1030,
  laptop: 1440,
  xl: 1920
}

const breakpointsKeys = Object.keys(BREAKPOINTS)

export const scRespondTo = breakpointsKeys.reduce<any>((accumulator, label) => {
  accumulator[label] = css`
    @media (min-width: ${BREAKPOINTS[label as 'sm']}px);
  `
  return accumulator
}, {}) as { [P in keyof typeof BREAKPOINTS]: any }
