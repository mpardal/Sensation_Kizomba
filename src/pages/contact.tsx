import Head from 'next/head';
import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import type { FormEvent } from 'react';
import type { GetStaticProps } from 'next';
import { dehydrate } from '@tanstack/react-query';
import { logger } from '@/utils/logger';
import type { NextPageWithLayout } from '@/components/layout';
import { initHydration } from '@/utils/react-query/ssr';
import {
  staticPropsRevalidate,
  staticPropsRevalidateError,
} from '@/utils/static-props';
import Layout from '../components/layout';

const Contact: NextPageWithLayout = () => {
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const comment = formData.get('comment') as string;

    await fetch('/api/mail', {
      body: JSON.stringify({
        email,
        firstname,
        lastname,
        message,
      }),
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    });

    logger.log(firstname, lastname, email, comment);
  };

  //État des champs du formulaire de contact
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Nous contacter</title>
      </Head>
      <Container maxWidth="sm">
        <div className="mb-4 flex flex-col items-center gap-2">
          <Avatar className="bg-primary-500">
            <MessageIcon />
          </Avatar>
          <Typography className="text-center" gutterBottom variant="h4">
            Nous contacter
          </Typography>
        </div>
        <form className="mx-3 flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <div className="my-3 flex flex-col lg:w-full">
              <TextField
                id="firstname"
                label="Prénom"
                name="firstname"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                required
                type="text"
                value={firstname}
              />
            </div>
            <div className="my-3 flex flex-col lg:w-full">
              <TextField
                id="lastname"
                label="Nom"
                name="lastname"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
                type="text"
                value={lastname}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-row lg:gap-4">
            <div className="my-3 flex flex-col lg:w-full">
              <TextField id="tel" label="Téléphone" name="tel" type="tel" />
            </div>
            <div className="my-3 flex flex-col lg:w-full">
              <TextField
                id="email"
                label="Adresse e-mail"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                type="email"
                value={email}
              />
            </div>
          </div>
          <div className="my-3 flex flex-col">
            <TextField
              id="comment"
              label="Commentaires"
              minRows={3}
              multiline
              name="comment"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              type="text"
              value={message}
            />
          </div>
          <Button
            color="primary"
            startIcon={<SendIcon />}
            type="submit"
            variant="contained"
          >
            Envoyer
          </Button>
        </form>
      </Container>
    </>
  );
};

Contact.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { queryClient, hydrate } = initHydration();

  try {
    await hydrate();
  } catch (err) {
    logger.error('prefetch error', err);

    return {
      notFound: true,
      revalidate: staticPropsRevalidateError,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: staticPropsRevalidate,
  };
};

export default Contact;
