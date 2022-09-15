import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'

const Bordeaux: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Bordeaux</h1>
    </div>
  )
}

Bordeaux.Layout = function BordeauxLayout(page) {
  return <Layout>{page}</Layout>
}

export default Bordeaux
