import React from 'react';
import Layout from '../components/layout';
import Event from '../components/event';
import type { NextPageWithLayout } from '../components/layout';

const Nantes: NextPageWithLayout = () => {
  return (
    <div>
      <div className="m-3 lg:m-5">
        <h1 className="text-center underline">Nantes</h1>
        <h2 className="ml-5 mt-10">Événements hebdomadaires</h2>
        <Event
          address="Quai des Antilles"
          city="Nantes"
          date="tous les mardis"
          dj="DJ Man, DJ Kyle & DJ QDS"
          image="/mardi.jpeg"
          linkBuyTicket="#"
          linkDetails="#"
          professor="Jonathan & Laura"
          title="Les mardis au Sao"
        />
        <h2 className="ml-5 mt-10">Événements mensuels</h2>
        <Event
          address="Smash Goal"
          city="Nantes"
          date="08/10/2022"
          dj="DJ Man & DJ QDS"
          image="/conexao-8_10.jpeg"
          linkBuyTicket="#"
          linkDetails="#"
          professor="Jonathan & Laura"
          title="conexao"
        />
        <h2 className="ml-5 mt-10">Événements trimestriels</h2>
        <Event
          address="Orange Bleue"
          city="La Chapelle sur Erdre"
          date="01/10/2022"
          dj="DJ Man & DJ QDS"
          image="/unidade-01_10.jpeg"
          linkBuyTicket="#"
          linkDetails="#"
          professor="Mervil & Amandine"
          title="Unidade"
        />
        <h2 className="ml-5 mt-10">Événements annuels</h2>
        <Event
          address="Vigneux de Bretagne"
          city="Vigneux de Bretagne"
          date="10/11/2022 au 14/11/2022"
          dj="DJ internationaux"
          image="/SDC.jpeg"
          linkBuyTicket="#"
          linkDetails="#"
          professor="internationaux"
          title="Sensation Dance Congress"
        />
      </div>
    </div>
  );
};

Nantes.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Nantes;
