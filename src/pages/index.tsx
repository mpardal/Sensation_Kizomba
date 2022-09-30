import { Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from '../components/layout';

const Home: NextPageWithLayout = () => {
  return (
    <Typography className="text-center" component="h1" variant="h3">
      Derniers articles
    </Typography>
  );
};

Home.Layout = function HomeLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
