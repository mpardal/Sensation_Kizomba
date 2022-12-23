import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { staticPropsRevalidate } from '@/utils/static-props';
import type { NextPageWithLayout } from '@/components/layout';
import Layout from '@/components/layout';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import MetaForDescription from '@/components/meta-for-description';
import MetaForTitle from '@/components/meta-for-title';

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Détails de l'association</title>
        <MetaForTitle title="SENSATION-KIZOMBA — Détails de l'association" />
        <MetaForDescription description="Détails de l'association SENSATION-KIZOMBA" />
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
            <Link
              className="text-inherit no-underline"
              href="/nantes"
              title="événements sur Nantes"
            >
              <h4 className="italic">Nantes</h4>
            </Link>
            <p />
            <Link
              className="text-inherit no-underline"
              href="/bordeaux"
              title="événements sur Bordeaux"
            >
              <h4 className="italic">Bordeaux</h4>
            </Link>
            <p />
            <Link
              className="text-inherit no-underline"
              href="/le-mans"
              title="événements au Mans"
            >
              <h4 className="italic">Le Mans</h4>
            </Link>
            <p />
            <Link
              className="text-inherit no-underline"
              href="/orleans"
              title="événements sur Orléans"
            >
              <h4 className="italic">Orléans</h4>
            </Link>
            <p />
            <Link
              className="text-inherit no-underline"
              href="/rennes"
              title="événements sur Rennes"
            >
              <h4 className="italic">Rennes</h4>
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

export const getStaticProps = withStaticQuerySSR(() => {
  return { props: {}, revalidate: staticPropsRevalidate };
});

export default About;
