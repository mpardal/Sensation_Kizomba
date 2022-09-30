import Head from 'next/head';
import React from 'react';
import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import Layout from '../components/layout';
import { logger } from '../utils/logger';
import type { FormEvent } from 'react';
import type { NextPageWithLayout } from '../components/layout';

const Contact: NextPageWithLayout = () => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const comment = formData.get('comment') as string;

    logger.log(firstname, lastname, email, comment);
  };

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
                required
                type="text"
              />
            </div>
            <div className="my-3 flex flex-col lg:w-full">
              <TextField
                id="lastname"
                label="Nom"
                name="lastname"
                required
                type="text"
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
                required
                type="email"
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
              type="text"
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

export default Contact;
