import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,200&display=optional"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.jpg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
      </Head>
      <body className="paper-texture">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
