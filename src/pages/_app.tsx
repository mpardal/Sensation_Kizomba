import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MuiTheme from '../components/mui-theme'
import Header from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiTheme>
      <Component {...pageProps} />
    </MuiTheme>
  )
}

export default MyApp
