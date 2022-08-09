import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { light } from 'styles/theme'
import { Head } from 'next/document'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
