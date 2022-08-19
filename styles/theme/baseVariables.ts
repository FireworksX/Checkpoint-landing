// базовые стили для всех тем
import typography from './typography'

const baseStyles = {
  links: {
    linkDecoration: 'none',
    linkHoverDecoration: 'none'
  },
  shadows: {
    shadowBasic: '0 1px 2px 0 rgba(9, 10, 11, 0.08)',
    shadowBig: '0px 30px 40px 0px rgba(9, 10, 11, 0.1)',
    shadowSecondary: '0 0 1px 0 rgba(9, 10, 11, 0.08), 0 3px 4px 0 rgba(9, 10, 11, 0.1)',
    shadowHover: '0 0 2px -1px rgba(9, 10, 11, 0.2), 0 30px 40px 0 rgba(9, 10, 11, 0.1)'
  },
  radius: {
    radiusMain: '10px',
    radiusSecond: '2px',
    radiusThird: '20px'
  },
  paddings: {
    gutterMobile: '15px',
    gutterDesktop: '30px',
  },
  sizes: {
    headerHeight: 50,
    layoutLeft: 270,
    layoutCenter: 760,
    layoutRight: 410
  }
}

const animation = {
  transitionDuration: '0.25s'
}

const baseVariables = {
  typography,
  baseStyles,
  animation
}

export { baseVariables }
