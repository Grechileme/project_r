import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl';


export function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages = {pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default App
