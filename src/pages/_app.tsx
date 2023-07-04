import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl';
import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';


export function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 500,
    });
  }, []);
  return (
    <NextIntlProvider messages = {pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default App
