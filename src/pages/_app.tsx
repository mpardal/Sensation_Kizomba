import type { AppProps } from 'next/app'
import { NextPageWithLayout } from '../components/layout'
import MuiTheme from '../components/mui-theme'
import '../styles/globals.css'
import FirebaseAuthProvider from '../hooks/use-auth'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page) => page)

  return (
    <MuiTheme>
      <FirebaseAuthProvider>{Layout(<Component {...pageProps} />)}</FirebaseAuthProvider>
    </MuiTheme>
  )
}

export default MyApp
