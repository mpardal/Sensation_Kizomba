import React from 'react';
import Layout from '../components/layout';
import Event from '../components/event';
import type { NextPageWithLayout } from '../components/layout';

const Bordeaux: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-center underline">Bordeaux</h1>
      <h2 className="ml-5 mt-10">Événements annuels</h2>
      <div className="p-4">
        <Event
          address="Mercure aéroport Mérignac"
          city="Mérignac"
          date="02/06/2023 & 04/06/2023"
          dj="DJ Paraiso, DJ Anonymous"
          image="/BKSC2023.jpeg"
          linkBuyTicket="https://my.weezevent.com/bordeaux-kizomba-salsa-congress-2023-1?fbclid=IwAR2rLJdr9chESVQARdrcw73EcYQntytC6ZjhD8GMbaGZReflaj10Vi0P6Do"
          linkDetails="#"
          professor="Ludo & Constance, Miguel"
          title="Bordeaux Kizomba Salsa Congress"
        />
      </div>
    </div>
  );
};

Bordeaux.Layout = function BordeauxLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Bordeaux;
