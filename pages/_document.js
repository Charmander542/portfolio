import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/Footer/Footer";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <meta name="theme-color" content="#1c0f1f" />
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
