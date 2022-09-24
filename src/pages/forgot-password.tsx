import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { LoadingButton } from '@mui/lab';
import {
  Avatar,
  Container,
  TextField,
  Typography,
  Link as MuiLink,
  Alert,
  Grow,
} from '@mui/material';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { FirebaseError } from 'firebase/app';
import Link from 'next/link';
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import Layout from '../components/layout';
import { auth } from '../config/firebase-config';
import { logger } from '../utils/logger';
import type { FormEvent } from 'react';
import type { NextPageWithLayout } from '../components/layout';

const ForgotPassword: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const [messageToShow, setMessageToShow] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const setCompleteMessage = () => {
    setMessageToShow(
      'Vous recevrez un e-mail avec un lien pour réinitialiser votre mot de passe',
    );
    setShowMessage(true);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loading) return;

    setLoading(true);
    setShowMessage(false);

    const formData = new FormData(evt.currentTarget);

    const email = formData.get('email') as string;

    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/login?email=${email}`,
      });

      setCompleteMessage();
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (err.code === 'auth/user-not-found') {
          setCompleteMessage();

          return;
        }
      }

      logger.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <div className="mb-4 flex flex-col items-center gap-2">
        <Avatar className="bg-primary-500">
          <HelpCenterIcon />
        </Avatar>
        <Typography className="text-center" gutterBottom variant="h4">
          Mot de passe oublié
        </Typography>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <TextField
            id="email"
            label="Adresse e-mail"
            name="email"
            required
            type="email"
          />
          <Link href="/login" passHref>
            <MuiLink>Retour à la connexion</MuiLink>
          </Link>
        </div>

        <LoadingButton
          color="primary"
          loading={loading}
          loadingPosition="start"
          startIcon={<AlternateEmailIcon />}
          type="submit"
          variant="contained"
        >
          Demander un nouveau mot de passe
        </LoadingButton>

        <Grow in={showMessage}>
          <Alert onClose={() => setShowMessage(false)} severity="warning">
            {messageToShow}
          </Alert>
        </Grow>
      </form>
    </Container>
  );
};

ForgotPassword.Layout = function ForgotPasswordLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ForgotPassword;
