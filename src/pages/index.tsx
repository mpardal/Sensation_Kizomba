import { Typography } from '@mui/material';
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import type { NextPageWithLayout } from '@/components/layout';
import { useNextEvents } from '@/hooks/use-next-events';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import Event from '@/components/event';
import { staticPropsRevalidate } from '@/utils/static-props';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';

const Home: NextPageWithLayout = () => {
  const nextEvents = useNextEvents();

  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les prochains événements</title>
        <meta
          content="Sensation Kizomba, nous sommes une association de danse, basé dans l'ouest de la
            France, depuis plus de dix ans. Nous donnons des cours de kizomba, nous organisons des soirées et
            festivals kizomba, mais également quelques soirées et festivals avec
            de la bachata et de la salsa, dans plusieurs villes de l'ouest de la
            France."
          key="desc"
          name="description"
        />
        <meta content="Sensation Kizomba" property="og:title" />
        <meta
          content="Association de danse, basé dans l'ouest de la
            France, depuis plus de dix ans. Nous donnons des cours de kizomba, nous organisons des soirées et
            festivals kizomba, mais également quelques soirées et festivals avec
            de la bachata et de la salsa, dans plusieurs villes de l'ouest de la
            France."
          property="og:description"
        />
        <meta
          content="https://example.com/images/cool-page.jpg"
          property="og:image"
        />
      </Head>
      <div>
        <Typography className="text-center mb-10" component="h1" variant="h3">
          Prochains événements
        </Typography>
        {nextEvents.isSuccess ? (
          <div className="flex flex-col w-full mx-auto grow overflow-auto gap-3 px-4">
            {nextEvents.data.map((event) => (
              <Event
                address={event.address}
                date={event.date}
                key={event.id}
                linkDetails={slugifyEventLink(event)}
                title={event.title}
              />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

Home.Layout = function HomeLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(() => {
  return { props: {}, revalidate: staticPropsRevalidate };
});

export default Home;
