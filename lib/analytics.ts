export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

let constantParams = {};

export const initAnalytics = (window: Window & { gtag: (...args: any[]) => void; dataLayer: any[] }) => {
  //console.log('init analytics');
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    debug_mode: process.env.NODE_ENV === 'development',
  });
};

export const logEvent = (action: string, params?: Record<string, any>) => {
  //@ts-expect-error window
  if (!window || !window.gtag) {
    return;
  }
  //@ts-expect-error window
  window.gtag('event', action, { ...constantParams, ...params });
};

export const setParams = (params: Record<string, any>) => {
  constantParams = Object.assign({}, params);
};
