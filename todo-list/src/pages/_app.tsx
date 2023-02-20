import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import darkDefaultTheme from "@/styles/themes/dark-default"
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkDefaultTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
