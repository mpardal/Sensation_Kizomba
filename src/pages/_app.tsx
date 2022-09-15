import type { AppProps } from 'next/app'
import { NextPageWithLayout } from '../components/layout'
import MuiTheme from '../components/mui-theme'
import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page) => page)

  return <MuiTheme>{Layout(<Component {...pageProps} />)}</MuiTheme>
}

export default MyApp
