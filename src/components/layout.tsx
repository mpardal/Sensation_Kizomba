import { Alert, Snackbar } from '@mui/material'
import { NextPage } from 'next'
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { useGlobalSnackbar } from '../hooks/use-global-snackbar'
import Footer from './footer'
import Header from './header'
import NextEventsBanner from './next-events-banner'
import PageContainer from './page-container'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: ReactElement) => ReactNode
}

const Layout = ({ children }: PropsWithChildren) => {
  const { message, severity, hide, open } = useGlobalSnackbar()

  return (
    <div>
      <NextEventsBanner />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
      <Snackbar open={open} autoHideDuration={4000} onClose={hide}>
        <Alert severity={severity} onClose={hide}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Layout
