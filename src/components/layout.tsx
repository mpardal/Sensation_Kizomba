import { NextPage } from 'next'
import { PropsWithChildren, ReactElement, ReactNode, useState } from 'react'
import Footer from './footer'
import Header from './header'
import PageContainer from './page-container'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (page: ReactElement) => ReactNode
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  )
}

export default Layout
