import React from 'react';
import Layout from '../components/layout';
import Event from '../components/event';
import type { NextPageWithLayout } from '../components/layout';

const LeMans: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-center underline">Le Mans</h1>
      <h2 className="ml-5 mt-10">Événements hebdomadaires</h2>
      <Event
        address="Restaurant Loso - 16 rue d'Alger"
        city="Le Mans"
        date="du 13/07/2023 au 16/07/2023"
        dj="DJ Persy & DJ Anonymous"
        image="/jeudi-mans.jpeg"
        linkBuyTicket="#"
        linkDetails="#"
        professor="Jonathan"
        title="Cours & soirée KIZOMBA"
      />
      <h2 className="ml-5 mt-10">Événements annuels</h2>
      <Event
        address="Château de Montbraye"
        city="Pârigné l'évêque"
        date="du 13/07/2023 au 16/07/2023"
        dj="internationaux"
        image="/EXKIZ2023.jpeg"
        linkBuyTicket="https://my.weezevent.com/kizomba-castle-exkiz-festival-2023?fbclid=IwAR1F6NwZTfSmyPfkxjT2MDqu2pIvCKv7YeUmCqGZwA-8ccjc8CqDz8h5Agg"
        linkDetails="#"
        professor="internationaux"
        title="Kizomba Castle Exkiz festival"
      />
      <Event
        address="Château de Montbraye"
        city="Pârigné l'évêque"
        date="du 14/07/2023 au 18/07/2023"
        dj="internationaux"
        image="/EXKIZ2022.jpeg"
        linkBuyTicket="#"
        linkDetails="#"
        professor="internationaux"
        title="Kizomba Castle Exkiz festival"
      />
    </div>
  );
};

LeMans.Layout = function LeMansLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LeMans;
