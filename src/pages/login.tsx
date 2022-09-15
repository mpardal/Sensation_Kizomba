import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'

const Login: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Connect</h1>
    </div>
  )
}

Login.Layout = function LoginLayout(page) {
  return <Layout>{page}</Layout>
}

export default Login
