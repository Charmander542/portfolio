import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/Footer/Footer";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicons/favicon192x192.png" />
          <meta name="theme-color" content="#7000FF" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
