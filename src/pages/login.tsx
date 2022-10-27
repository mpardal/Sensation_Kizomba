import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  FormControl,
  Grow,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Container,
  Avatar,
  Link as MuiLink,
  FormHelperText,
} from '@mui/material';
import { FirebaseError } from 'firebase/app';
import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import type { GetServerSideProps } from 'next';
import Layout from '../components/layout';
import { useAuth } from '../hooks/auth/use-auth';
import { useLogin } from '../hooks/auth/use-login';
import { useGlobalSnackbar } from '../hooks/use-global-snackbar';
import { toFormikValidationSchema } from '../utils/zod-formik-adapter';
import type { NextPageWithLayout } from '../components/layout';

const LoginObject = z.object({
  email: z
    .string({
      required_error: "L'adresse e-mail est obligatoire",
    })
    .email({ message: "L'adresse e-mail n'est pas valide" }),
  password: z
    .string({
      required_error: 'Le mot de passe est requis',
      invalid_type_error: 'Le mot de passe doit être une chaîne de caractères',
    })
    .min(6, { message: 'Le mot de passe doit faire au moins 6 caractères' }),
});

const LoginPage: NextPageWithLayout<{
  defaultEmail: string;
  fromForgotPassword: boolean;
}> = ({ defaultEmail, fromForgotPassword }) => {
  const { setMessage, hide } = useGlobalSnackbar();
  const { logged } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();

  const login = useLogin({
    onMutate: () => {
      setShowErrorMessage(false);
      hide();
    },
    onSuccess: () => {
      void router.push((router.query.from as string | undefined) ?? '/');
    },
    onError: (err) => {
      if (err instanceof FirebaseError) {
        if (
          err.code === 'auth/wrong-password' ||
          err.code === 'auth/user-not-found'
        ) {
          setErrorMessage("L'adresse e-mail ou le mot de passe est incorrect");
          setShowErrorMessage(true);
        }
      }
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    isValid,
    touched,
    errors,
    values,
  } = useFormik({
    initialValues: {
      email: defaultEmail,
      password: '',
    },
    validationSchema: toFormikValidationSchema(LoginObject),
    onSubmit: async ({ email, password }) => {
      try {
        await login.mutateAsync({ email, password });
      } catch {
        // l'erreur est catchée dans useMutation
      }
    },
  });

  useEffect(() => {
    if (fromForgotPassword) {
      setMessage('Votre mot de passe a été modifié', 'success', 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromForgotPassword]);

  return (
    <>
      <Head>
        <title>SENSATION-KIZOMBA — Connexion</title>
      </Head>
      <Container maxWidth="xs">
        <div className="mb-4 flex flex-col items-center gap-2">
          <Avatar className="bg-primary-500">
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="text-center" gutterBottom variant="h4">
            Sensation Kizomba
          </Typography>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <TextField
              aria-errormessage={errors.email}
              aria-label="adresse e-mail"
              aria-required="true"
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
            <FormControl>
              <InputLabel htmlFor="password">Mot de passe</InputLabel>
              <OutlinedInput
                aria-label="mot de passe"
                aria-required="true"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setShowPassword((s) => !s)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                error={touched.password ? Boolean(errors.password) : undefined}
                id="password"
                label="Mot de passe"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                type={showPassword ? 'text' : 'password'}
                value={values.password}
              />
              {touched.password && Boolean(errors.password) ? (
                <FormHelperText error>{errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <div className="flex justify-between">
              <Link href="/forgot-password" passHref>
                <MuiLink>Mot de passe oublié ?</MuiLink>
              </Link>
              <Link href="/sign-up" passHref>
                <MuiLink>Inscription</MuiLink>
              </Link>
            </div>
          </div>

          <LoadingButton
            color="primary"
            disabled={logged || !isValid || Object.keys(touched).length === 0}
            loading={login.isLoading || isSubmitting}
            loadingPosition="start"
            startIcon={<LoginIcon />}
            type="submit"
            variant="contained"
          >
            Se connecter
          </LoadingButton>

          <Grow in={showErrorMessage}>
            <Alert onClose={() => setShowErrorMessage(false)} severity="error">
              {errorMessage}
            </Alert>
          </Grow>
        </form>
      </Container>
    </>
  );
};

LoginPage.Layout = function LoginLayout(page) {
  return <Layout>{page}</Layout>;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      defaultEmail: (ctx.query.email as string | undefined) ?? '',
      fromForgotPassword:
        ((ctx.query.fromForgotPassword as string | undefined) ?? '') === 'true',
    },
  };
};

export default LoginPage;
