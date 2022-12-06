import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import type { NextPageWithLayout } from '../components/layout';

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — L'association</title>
      </Head>
      <div>
        <div className="m-3 lg:m-5">
          <h2 className="underline">Qui sommes nous ?</h2>
          <p>
            Nous sommes une association de danse, basé dans l'ouest de la
            France, depuis plus de dix ans.
          </p>
          <h2 className="underline">Que faisons-nous ?</h2>
          <p>
            Nous donnons des cours de kizomba, nous organisons des soirées et
            festivals kizomba, mais également quelques soirées et festivals avec
            de la bachata et de la salsa, dans plusieurs villes de l'ouest de la
            France.
          </p>
          <h2 className="underline">Où sommes nous ?</h2>
          <p>Vous pouvez nous retoruver dans les villes suivantes :</p>
          <div className="flex flex-row justify-around">
            <Link href="/nantes" legacyBehavior passHref>
              <a className="text-inherit no-underline">
                <h4 className="italic">Nantes</h4>
              </a>
            </Link>
            <p />
            <Link href="/le-mans" legacyBehavior passHref>
              <a className="text-inherit no-underline">
                <h4 className="italic">Le Mans</h4>
              </a>
            </Link>
            <p />
            <Link href="/orleans" legacyBehavior passHref>
              <a className="text-inherit no-underline">
                <h4 className="italic">Orléans</h4>
              </a>
            </Link>
            <p />
            <Link href="/bordeaux" legacyBehavior passHref>
              <a className="text-inherit no-underline">
                <h4 className="italic">Bordeaux</h4>
              </a>
            </Link>
          </div>
          <p />
          <div>
            <p>
              Si vous souhaitez plus d'informations, vous pouvez prendre contact
              avec nous.
            </p>
            <p>Mais aussi venir essayer la Kizomba dans une de nos villes.</p>
          </div>
        </div>
      </div>
    </>
  );
};

About.Layout = function AboutLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
