import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { AnimateSharedLayout } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';

import { GA_TRACKING_ID, initAnalytics, useRouterTrackingForAnalytics } from '@/lib/analytics';
import theme from '@/styles/theme';
import Layout from '@/components/layout';

import '@fontsource/inter/variable.css';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAnalytics(window);
  }, []);
  useRouterTrackingForAnalytics();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      {!!GA_TRACKING_ID && (
        <Script key="gtag" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      )}
      <ChakraProvider theme={theme}>
        <AnimateSharedLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimateSharedLayout>
      </ChakraProvider>
    </>
  );
}

export default App;
