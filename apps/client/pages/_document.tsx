import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="cs">
        <Head title={'Skaut Třebíč'}>
          <meta name="description" content="2. katolické oddíly Třebíč" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="icon" type="image/png" href="/skaut_logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script defer src="https://umami.dominikjasek.cz/script.js" data-website-id="3a0f4766-a62b-4ae8-ba21-ab8e21c06ce9" />
        </body>
      </Html>
    )
  }
}
