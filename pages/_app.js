import { ThemeProvider } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo-config'

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
        <Layout theme={theme} themeToggler={themeToggler}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
