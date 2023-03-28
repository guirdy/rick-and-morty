import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/globals'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/default'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
