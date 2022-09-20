import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Event from '../components/event'

const Nantes: NextPageWithLayout = () => {
  return (
    <div>
      <div className="m-3 lg:m-5">
        <h1 className="text-center underline">Nantes</h1>
        <h2 className="ml-5 mt-10">Événements hebdomadaires</h2>
        <Event
          title="Les mardis au Sao"
          image="/mardi.jpeg"
          address="Quai des Antilles"
          city="Nantes"
          date="tous les mardis"
          dj="DJ Man, DJ Kyle & DJ QDS"
          professor="Jonathan & Laura"
          linkDetails="#"
          linkBuyTicket="#"
        />
        <h2 className="ml-5 mt-10">Événements mensuels</h2>
        <Event
          title="conexao"
          image="/conexao-8_10.jpeg"
          address="Smash Goal"
          city="Nantes"
          date="08/10/2022"
          dj="DJ Man & DJ QDS"
          professor="Jonathan & Laura"
          linkDetails="#"
          linkBuyTicket="#"
        />
        <h2 className="ml-5 mt-10">Événements trimestriels</h2>
        <Event
          title="Unidade"
          image="/unidade-01_10.jpeg"
          address="Orange Bleue"
          city="La Chapelle sur Erdre"
          date="01/10/2022"
          dj="DJ Man & DJ QDS"
          professor="Mervil & Amandine"
          linkDetails="#"
          linkBuyTicket="#"
        />
        <h2 className="ml-5 mt-10">Événements annuels</h2>
        <Event
          title="Sensation Dance Congress"
          image="/SDC.jpeg"
          address="Vigneux de Bretagne"
          city="Vigneux de Bretagne"
          date="10/11/2022 au 14/11/2022"
          dj="DJ internationaux"
          professor="internationaux"
          linkDetails="#"
          linkBuyTicket="#"
        />
      </div>
    </div>
  )
}

Nantes.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>
}

export default Nantes
