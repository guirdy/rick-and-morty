import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/globals'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, lightTheme } from '@/styles/themes/default'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '@/components/Header'
import { useState } from 'react'
import { FavoriteContextProvider } from '@/context/CharContext'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <FavoriteContextProvider>
      <ThemeProvider theme={isDarkTheme ? defaultTheme : lightTheme}>
        <>
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <Component {...pageProps} />
          <Footer />
        </>
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </FavoriteContextProvider>
  )
}
