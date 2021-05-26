import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import '@/styles/fonts.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
