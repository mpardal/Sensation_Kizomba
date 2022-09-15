import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'

const Orleans: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Orléans</h1>
    </div>
  )
}

Orleans.Layout = function OrleansLayout(page) {
  return <Layout>{page}</Layout>
}

export default Orleans
