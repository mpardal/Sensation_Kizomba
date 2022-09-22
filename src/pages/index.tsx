import {Typography} from '@mui/material'
import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Event from '../components/event'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Typography variant="h3" component="h1" className="text-center">Derniers articles</Typography>
      <div className="flex flex-col p-4 gap-4">
        <Event
          title="Conexao"
          city="Nantes"
          image="/conexao-8_10.jpeg"
          address="Smash Goal - 5 rue de la Garde"
          date="8 octobre 2022"
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
          date="1 octobre 2022"
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
          date="24 septembre 2022"
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
