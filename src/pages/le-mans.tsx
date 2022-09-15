import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'

const LeMans: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Le Mans</h1>
    </div>
  )
}

LeMans.Layout = function LeMansLayout(page) {
  return <Layout>{page}</Layout>
}

export default LeMans
