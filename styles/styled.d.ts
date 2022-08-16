import 'styled-components'
import { light } from './theme'

type TypographySizeType = {
  fontSize: string
  lineHeight: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof light.colors
    typography: {
      fontFamily: string
      textEllipsis: string

      text_48_54: TypographySizeType
      text_38_44: TypographySizeType
      text_32_38: TypographySizeType
      text_26_30: TypographySizeType
      text_20_24: TypographySizeType
      text_18_22: TypographySizeType
      text_16_20: TypographySizeType
      text_14_24: TypographySizeType
      text_14_20: TypographySizeType
      text_12_16: TypographySizeType
      text_11_16: TypographySizeType
      text_11_12: TypographySizeType
      text_10_12: TypographySizeType
      text_9_9: TypographySizeType
    }
    baseStyles: {
      links: {
        linkDecoration: string
        linkHoverDecoration: string
      }
      shadows: {
        shadowBasic: string
        shadowBig: string
        shadowSecondary: string
        shadowHover: string
      }
      radius: {
        radiusMain: string
        radiusSecond: string
      }
      paddings: {
        gutterMobile: string
        gutterDesktop: string
      }
      sizes: {
        headerHeight: number
        layoutLeft: number
        layoutCenter: number
        layoutRight: number
      }
    }
    animation: {
      transitionDuration: string
    }
  }
}
