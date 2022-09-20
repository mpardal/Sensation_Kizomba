import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Event from '../components/event'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>Derniers articles</h1>
      <div className="flex flex-col">
        <Event
          title="Conexao"
          city="Nantes"
          image="/conexao-8_10.jpeg"
          address="Smash Goal - 5 rue de la Garde"
          date="08/10/2022"
          professor="Jonathan & Laura"
          dj="DJ Man & DJ QDS"
          linkBuyTicket="#"
          linkDetails="#"
        />
        <Event
          title="Unidade"
          image="/unidade-01_10.jpeg"
          city="La Chapelle sur Erdre"
          address="Orange Bleue"
          date="01/10/2022"
          professor="Jonathan & Laura, Miguel"
          dj="DJ Anonymous, DJ Kin"
          linkBuyTicket="#"
          linkDetails="#"
        />
        <Event
          title="Noite Orléans"
          image="/noite-24_09.jpeg"
          city="Saint-Jean-De-Braye"
          address="Orange Bleue"
          date="24/09/2022"
          professor="Jonathan"
          dj="DJ Thao, DJ Anonymous"
          linkBuyTicket="#"
          linkDetails="#"
        />
      </div>
    </>
  )
}

Home.Layout = function HomeLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home
