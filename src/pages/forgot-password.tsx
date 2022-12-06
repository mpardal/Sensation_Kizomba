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
import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { z } from 'zod';
import Layout from '../components/layout';
import { useAskPassword } from '../hooks/auth/use-ask-password';
import { toFormikValidationSchema } from '../utils/zod-formik-adapter';
import type { NextPageWithLayout } from '../components/layout';

const ForgotPasswordObject = z.object({
  email: z
    .string({
      required_error: "L'adresse e-mail est obligatoire",
    })
    .email({ message: "L'adresse e-mail n'est pas valide" }),
});

const ForgotPassword: NextPageWithLayout = () => {
  const [messageToShow, setMessageToShow] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const askPassword = useAskPassword<{ setCompleteMessage: () => void }>({
    onMutate: () => {
      setShowMessage(false);

      return {
        setCompleteMessage: () => {
          setShowMessage(true);
          setMessageToShow(
            'Vous recevrez un e-mail avec un lien pour réinitialiser votre mot de passe si cette adresse e-mail est associée à un compte',
          );
        },
      };
    },
    onSuccess: (data, variables, ctx) => {
      ctx?.setCompleteMessage();
    },
    onError: (err, variables, ctx) => {
      if (err instanceof FirebaseError) {
        if (err.code === 'auth/user-not-found') {
          ctx?.setCompleteMessage();

          return;
        }
      }

      throw err;
    },
  });

  const {
    handleSubmit,
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    isValid,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: toFormikValidationSchema(ForgotPasswordObject),
    onSubmit: async ({ email }) => {
      if (askPassword.isLoading) return;

      await askPassword.mutateAsync({ email });
    },
  });

  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Mot de passe oublié</title>
      </Head>
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
              aria-errormessage={errors.email}
              error={touched.email ? Boolean(errors.email) : undefined}
              helperText={touched.email ? errors.email : undefined}
              id="email"
              label="Adresse e-mail"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              required
              type="email"
              value={values.email}
            />
            <Link href="/login" legacyBehavior passHref>
              <MuiLink>Retour à la connexion</MuiLink>
            </Link>
          </div>

          <LoadingButton
            color="primary"
            disabled={!isValid || Object.keys(touched).length === 0}
            loading={askPassword.isLoading || isSubmitting}
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
    </>
  );
};

ForgotPassword.Layout = function ForgotPasswordLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ForgotPassword;
