import { Typography } from '@mui/material';
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import type { NextPageWithLayout } from '@/components/layout';
import { useNextEvents } from '@/hooks/use-next-events';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import { staticPropsRevalidate } from '@/utils/static-props';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import MetaForDescription from '@/components/meta-for-description';
import MetaForTitle from '@/components/meta-for-title';
import EventCard from '@/components/event-card';

const Home: NextPageWithLayout = () => {
  const nextEvents = useNextEvents();

  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les prochains événements</title>
        <MetaForDescription
          description="Sensation Kizomba, les prochains événements. Nous sommes une association de danse, basé dans l'ouest de la
            France, depuis plus de dix ans. Nous donnons des cours de kizomba, soirées et festivals."
        />
        <MetaForTitle title="Sensation Kizomba - Les prochains événements" />
      </Head>
      <div>
        <Typography className="text-center mb-10" component="h1" variant="h3">
          Prochains événements
        </Typography>
        {nextEvents.isSuccess ? (
          <div className="flex flex-col w-full mx-auto grow overflow-auto gap-3 px-4">
            {nextEvents.data.map((event) => (
              <EventCard
                address={event.address}
                date={event.date}
                images={event.images}
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
