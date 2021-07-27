import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { SWRConfig } from 'swr';
import { AnimateSharedLayout } from 'framer-motion';

import { fetcher } from '@/lib/fetcher';
import { GA_TRACKING_ID, initAnalytics } from '@/lib/analytics';

import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    //@ts-expect-error window type
    initAnalytics(window);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Script key="vhfix" src="/viewport-height-fix.js" strategy="beforeInteractive" />
      {!!GA_TRACKING_ID && <Script key="gtag" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />}
      <SWRConfig value={{ fetcher }}>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </SWRConfig>
    </>
  );
}

export default App;
