import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Event from '../components/event'
import noite from '/noite-24_09.jpeg'

const Orleans: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-center underline">Orléans</h1>
      <h2 className="ml-5 mt-10">Événements mensuels</h2>
      <Event
        title="Noite Orléans"
        city="Saint-Jean-De-Braye"
        image="/noite-24_09.jpeg"
        address="Orange Bleue - 21 avenue Gay Lussac"
        date="24/09/2022"
        professor="DJ Thao"
        dj="Jonathan"
        linkBuyTicket="#"
        linkDetails="#"
      />
    </div>
  )
}

Orleans.Layout = function OrleansLayout(page) {
  return <Layout>{page}</Layout>
}

export default Orleans
