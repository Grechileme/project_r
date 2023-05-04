import { appWithTranslation } from 'next-i18next'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)