import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'

const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

Contact.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>
}

export default Contact
