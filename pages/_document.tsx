import Document, { Html, Main, NextScript, DocumentContext, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {}

export default class extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const documentProps = await Document.getInitialProps(ctx)

      return {
        ...documentProps,
        styles: (
          <>
            {documentProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>My page</title>
          <link href='https://fonts.googleapis.com/css?family=Montserrat:regular,700,800' rel='stylesheet' />

          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
