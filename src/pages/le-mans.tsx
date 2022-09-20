import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Event from '../components/event'

const LeMans: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-center underline">Le Mans</h1>
      <h2 className="ml-5 mt-10">Événements hebdomadaires</h2>
      <Event
        title="Cours & soirée KIZOMBA"
        image="/jeudi-mans.jpeg"
        city="Le Mans"
        address="Restaurant Loso - 16 rue d'Alger"
        date="du 13/07/2023 au 16/07/2023"
        professor="Jonathan"
        dj="DJ Persy & DJ Anonymous"
        linkBuyTicket="#"
        linkDetails="#"
      />
      <h2 className="ml-5 mt-10">Événements annuels</h2>
      <Event
        title="Kizomba Castle Exkiz festival"
        city="Pârigné l'évêque"
        image="/EXKIZ2023.jpeg"
        address="Château de Montbraye"
        date="du 13/07/2023 au 16/07/2023"
        professor="internationaux"
        dj="internationaux"
        linkBuyTicket="https://my.weezevent.com/kizomba-castle-exkiz-festival-2023?fbclid=IwAR1F6NwZTfSmyPfkxjT2MDqu2pIvCKv7YeUmCqGZwA-8ccjc8CqDz8h5Agg"
        linkDetails="#"
      />
      <Event
        title="Kizomba Castle Exkiz festival"
        city="Pârigné l'évêque"
        image="/EXKIZ2022.jpeg"
        address="Château de Montbraye"
        date="du 14/07/2023 au 18/07/2023"
        professor="internationaux"
        dj="internationaux"
        linkBuyTicket="#"
        linkDetails="#"
      />
    </div>
  )
}

LeMans.Layout = function LeMansLayout(page) {
  return <Layout>{page}</Layout>
}

export default LeMans
