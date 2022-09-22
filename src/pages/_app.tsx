import type { AppProps } from 'next/app'
import { NextPageWithLayout } from '../components/layout'
import MuiTheme from '../components/mui-theme'
import FirebaseAuthProvider from '../hooks/use-auth'
import GlobalSnackbarProvider from '../hooks/use-global-snackbar'
import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page) => page)

  return (
    <MuiTheme>
      <FirebaseAuthProvider>
        <GlobalSnackbarProvider>{Layout(<Component {...pageProps} />)}</GlobalSnackbarProvider>
      </FirebaseAuthProvider>
    </MuiTheme>
  )
}

export default MyApp
