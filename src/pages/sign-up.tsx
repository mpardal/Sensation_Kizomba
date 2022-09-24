import { LoadingButton } from '@mui/lab';
import { Avatar, Container, TextField, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import { useState } from 'react';
import Layout from '../components/layout';
import type { FormEvent } from 'react';
import type { NextPageWithLayout } from '../components/layout';

const SignUp: NextPageWithLayout = () => {
  const [loading] = useState(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    /*if (loading) return;

    setLoading(true);

    const formData = new FormData(evt.currentTarget);

    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    try {
      console.log(firstname, lastname, email, password, confirmPassword);
    } catch (err) {
    } finally {
      setLoading(false);
    }*/
  };

  return (
    <Container maxWidth="sm">
      <div className="mb-4 flex flex-col items-center gap-2">
        <Avatar className="bg-primary-500" />
        <Typography className="text-center" gutterBottom variant="h4">
          Inscription
        </Typography>
      </div>

      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <TextField
          id="firstname"
          label="Prénom"
          name="firstname"
          required
          type="text"
        />
        <TextField
          id="lastname"
          label="Nom"
          name="lastname"
          required
          type="text"
        />
        <TextField
          className="col-span-2"
          id="email"
          label="Adresse e-mail"
          name="email"
          required
          type="email"
        />
        <TextField
          id="password"
          label="Mot de passe"
          name="password"
          required
          type="password"
        />
        <TextField
          id="confirmPassword"
          label="Confirmer le mot de passe"
          name="confirmPassword"
          required
          type="password"
        />
        <LoadingButton
          className="col-span-2"
          color="primary"
          loading={loading}
          loadingPosition="start"
          startIcon={<PeopleIcon />}
          type="submit"
          variant="contained"
        >
          S'inscrire
        </LoadingButton>
      </form>
    </Container>
  );
};

SignUp.Layout = function ForgotPasswordLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SignUp;
