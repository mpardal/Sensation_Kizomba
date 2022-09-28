import React from 'react';
import Layout from '../components/layout';
import Event from '../components/event';
import type { NextPageWithLayout } from '../components/layout';

const Orleans: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-center underline">Orléans</h1>
      <h2 className="ml-5 mt-10">Événements mensuels</h2>
      <Event
        address="Orange Bleue - 21 avenue Gay Lussac"
        city="Saint-Jean-De-Braye"
        date="24/09/2022"
        dj="Jonathan"
        image="/noite-24_09.jpeg"
        linkBuyTicket="#"
        linkDetails="#"
        teacher="DJ Thao"
        title="Noite Orléans"
      />
    </div>
  );
};

Orleans.Layout = function OrleansLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Orleans;
