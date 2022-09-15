import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'

const Logout: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Disconnect</h1>
    </div>
  )
}

Logout.Layout = function LogoutLayout(page) {
  return <Layout>{page}</Layout>
}

export default Logout
