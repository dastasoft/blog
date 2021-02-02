import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'
import { lightTheme, darkTheme } from '@/components/Themes'
import Layout from '@/components/Layout'
import { useDarkMode } from '@/hooks/useDarkMode'

export default function App({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Layout themeToggler={themeToggler}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
