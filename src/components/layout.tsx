import { NextPage } from 'next'
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import NextEventsBanner from './next-events-banner'
import PageContainer from './page-container'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: ReactElement) => ReactNode
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <NextEventsBanner />
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  )
}

export default Layout
