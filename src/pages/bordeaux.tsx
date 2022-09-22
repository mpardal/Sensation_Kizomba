import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Image from 'next/image'
import bordeaux2023 from '../../public/BKSC2023.jpeg'
import Event from '../components/event'

const Bordeaux: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-center underline">Bordeaux</h1>
      <h2 className="ml-5 mt-10">Événements annuels</h2>
      <div className="p-4">
        <Event
          title="Bordeaux Kizomba Salsa Congress"
          city="Mérignac"
          image="/BKSC2023.jpeg"
          address="Mercure aéroport Mérignac"
          date="02/06/2023 & 04/06/2023"
          professor="Ludo & Constance, Miguel"
          dj="DJ Paraiso, DJ Anonymous"
          linkBuyTicket="https://my.weezevent.com/bordeaux-kizomba-salsa-congress-2023-1?fbclid=IwAR2rLJdr9chESVQARdrcw73EcYQntytC6ZjhD8GMbaGZReflaj10Vi0P6Do"
          linkDetails="#"
        />
      </div>
    </div>
  )
}

Bordeaux.Layout = function BordeauxLayout(page) {
  return <Layout>{page}</Layout>
}

export default Bordeaux
