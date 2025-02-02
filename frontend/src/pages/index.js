import 'regenerator-runtime';
import React from 'react';
import Head from 'next/head';

import Description from '../components/Description';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | VLM </title>
      </Head>
      <Hero />
      <Description /> 
      <Spacer sx={{ pt: 20 }} />
    </>
  );
};

export default Home;
