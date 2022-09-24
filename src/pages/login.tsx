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
} from '@mui/material';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import { auth } from '../config/firebase-config';
import { useAuth } from '../hooks/use-auth';
import { useGlobalSnackbar } from '../hooks/use-global-snackbar';
import { logger } from '../utils/logger';
import type { GetServerSideProps } from 'next';
import type { NextPageWithLayout } from '../components/layout';
import type { FormEvent } from 'react';

const LoginPage: NextPageWithLayout<{
  defaultEmail: string;
  fromForgotPassword: boolean;
}> = ({ defaultEmail, fromForgotPassword }) => {
  const { setMessage, hide } = useGlobalSnackbar();
  const { logged } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (fromForgotPassword) {
      setMessage('Votre mot de passe a été modifié', 'success', 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromForgotPassword]);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loading || logged) return;

    setLoading(true);
    setShowErrorMessage(false);
    hide();

    // aucune validation n'est effectuée ici, il faudra rajouter quelque chose comme zod et formik
    const formData = new FormData(evt.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      // permet de se connecter à firebase, l'utilisateur est récupéré dans hooks/use-auth.tsx
      const cred = await signInWithEmailAndPassword(auth, email, password);

      // par la suite, on supprimera le console.log
      logger.debug(cred);

      setMessage('Vous êtes connecté', 'success');

      void router.push((router.query.from as string | undefined) ?? '/');
    } catch (err) {
      logger.error(err);

      if (err instanceof FirebaseError) {
        if (
          err.code === 'auth/wrong-password' ||
          err.code === 'auth/user-not-found'
        ) {
          setErrorMessage('Adresse email ou mot de passe incorrect');
          setShowErrorMessage(true);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
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
            defaultValue={defaultEmail}
            id="email"
            label="Adresse e-mail"
            name="email"
            required
            type="email"
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
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              id="password"
              label="Mot de passe"
              name="password"
              required
              type={showPassword ? 'text' : 'password'}
            />
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
          disabled={logged}
          loading={loading}
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
