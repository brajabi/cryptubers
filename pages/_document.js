import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  html,
  body {
    padding: 0;
    margin: 0;
    text-rendering: optimizeSpeed;
    font-family: 'roboto';
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    font-family: 'roboto';
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <head>
          <title>CrypTubers</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
