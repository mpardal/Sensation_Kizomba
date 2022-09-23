import { Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/layout';
import Event from '../components/event';
import type { NextPageWithLayout } from '../components/layout';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Typography className="text-center" component="h1" variant="h3">
        Derniers articles
      </Typography>
      <div className="flex flex-col p-4 gap-4">
        <Event
          address="Smash Goal - 5 rue de la Garde"
          city="Nantes"
          date="8 octobre 2022"
          dj="DJ Man & DJ QDS"
          image="/conexao-8_10.jpeg"
          linkBuyTicket="#"
          linkDetails="#"
          professor="Jonathan & Laura"
          title="Conexao"
        />
        <Event
          address="Orange Bleue"
          city="La Chapelle sur Erdre"
          date="1 octobre 2022"
          dj="DJ Anonymous, DJ Kin"
          image="/unidade-01_10.jpeg"
          linkBuyTicket="#"
          linkDetails="#"
          professor="Jonathan & Laura, Miguel"
          title="Unidade"
        />
        <Event
          address="Orange Bleue"
          city="Saint-Jean-De-Braye"
          date="24 septembre 2022"
          dj="DJ Thao, DJ Anonymous"
          image="/noite-24_09.jpeg"
          linkBuyTicket="#"
          linkDetails="#"
          professor="Jonathan"
          title="Noite Orléans"
        />
      </div>
    </>
  );
};

Home.Layout = function HomeLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
