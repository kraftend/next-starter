import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

let constantParams = {};

export const initAnalytics = (window: Window & typeof globalThis) => {
  if (!GA_TRACKING_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    debug_mode: process.env.NODE_ENV === 'development',
  });
};

export const pageview = (url: URL) => {
  if (!window || !window.gtag) {
    return;
  }
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const logEvent = (
  action: Gtag.EventNames | string,
  params?: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams,
) => {
  if (!window || !window.gtag) {
    return;
  }
  window.gtag('event', action, { ...constantParams, ...params });
};

export const setParams = (params: Record<string, any>) => {
  constantParams = Object.assign({}, params);
};

export const useRouterTrackingForAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
