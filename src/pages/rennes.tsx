import Head from 'next/head';
import type { NextPageWithLayout } from '@/components/layout';
import MetaForCity from '@/components/meta-for-city';
import City from '@/components/ui/city';
import Layout from '@/components/layout';
import { withStaticQuerySSR } from '@/utils/react-query/ssr';
import { fetchEvents, getEventsQueryKey } from '@/hooks/use-events';

const Rennes: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Les événements à Rennes</title>
        <MetaForCity city="rennes" />
      </Head>
      <City city="rennes" />
    </>
  );
};

Rennes.Layout = function RennesLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = withStaticQuerySSR(async (_, queryClient) => {
  await queryClient.fetchQuery(getEventsQueryKey('rennes'), () =>
    fetchEvents('rennes'),
  );

  return {
    props: {},
  };
});

export default Rennes;
