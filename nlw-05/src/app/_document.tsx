import Document, { Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
        <Html>
            <Head>
                <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
  }
}