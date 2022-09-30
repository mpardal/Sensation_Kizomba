import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Avatar,
  Container,
  Grow,
  TextField,
  Typography,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import { FirebaseError } from 'firebase/app';
//Gestion des formulaires
import { useFormik } from 'formik';
import { useState } from 'react';
//zod permet d'éviter la duplication de validation
import { z } from 'zod';
import Layout from '../components/layout';
import { useCreateUser } from '../hooks/auth/use-create-user';
import { useGlobalSnackbar } from '../hooks/use-global-snackbar';
import { toFormikValidationSchema } from '../utils/zod-formik-adapter';
import type { NextPageWithLayout } from '../components/layout';

const SignUpObject = z
  .object({
    email: z
      .string({
        required_error: "L'adresse e-mail est obligatoire",
      })
      .email({ message: "L'adresse e-mail n'est pas valide" }),
    password: z
      .string({
        required_error: 'Le mot de passe est requis',
        invalid_type_error:
          'Le mot de passe doit être une chaîne de caractères',
      })
      .min(6, { message: 'Le mot de passe doit faire au moins 6 caractères' }),
    confirmPassword: z
      .string({
        required_error: 'Le mot de passe est requis',
        invalid_type_error:
          'Le mot de passe doit être une chaîne de caractères',
      })
      .min(6, { message: 'Le mot de passe doit faire au moins 6 caractères' }),
    firstname: z
      .string({
        required_error: 'Le prénom est requis',
        invalid_type_error: 'Le prénom doit être une chaîne de caractères',
      })
      .min(2, {
        message: 'Le prénom doit faire au moins 2 caractères',
      }),
    lastname: z
      .string({
        required_error: 'Le nom est requis',
        invalid_type_error: 'Le nom doit être une chaîne de caractères',
      })
      .min(2, {
        message: 'Le nom doit faire au moins 2 caractères',
      }),
  })
  .superRefine(({ password, confirmPassword, firstname, lastname }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Les mots de passe ne sont pas égaux',
        path: ['password'],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Les mots de passe ne sont pas égaux',
        path: ['confirmPassword'],
      });
    }

    if (firstname === lastname) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Le prénom et le nom doivent être différents',
        path: ['lastname'],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Le prénom et le nom doivent être différents',
        path: ['firstname'],
      });
    }
  });

const SignUp: NextPageWithLayout = () => {
  const createUser = useCreateUser({
    onMutate: () => {
      setShowErrorMessage(false);
    },
    onSuccess: () => {
      setMessage(
        <>
          <div>Votre compte a bien été créé</div>
          <div>Un e-mail de vérification vous sera envoyé.</div>
        </>,
      );
    },
    onError: (err) => {
      if (err instanceof FirebaseError) {
        if (
          err.code === 'auth/wrong-password' ||
          err.code === 'auth/email-already-in-use'
        ) {
          setShowErrorMessage(true);

          switch (err.code) {
            case 'auth/wrong-password':
              setErrorMessage('Le mot de passe est incorrect');
              break;
            case 'auth/email-already-in-use':
              setErrorMessage("L'adresse e-mail est déjà utilisée");
              break;
          }
        }
      }
    },
  });
  const { setMessage } = useGlobalSnackbar();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    handleSubmit,
    errors,
    handleChange,
    handleBlur,
    values,
    touched,
    isSubmitting,
    isValid,
    isValidating,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
    },
    validationSchema: toFormikValidationSchema(SignUpObject),
    onSubmit: async ({ email, password, firstname, lastname }) => {
      try {
        await createUser.mutateAsync({ email, password, firstname, lastname });
      } catch {
        // l'erreur est gérée dans useMutation
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <div className="flex flex-col items-center gap-2">
        <Avatar className="bg-primary-500" />
        <Typography className="text-center" gutterBottom variant="h4">
          Inscription
        </Typography>
      </div>

      <Grow in={showErrorMessage}>
        <Alert className="mb-4" severity="error">
          {errorMessage}
        </Alert>
      </Grow>

      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <TextField
          aria-errormessage={errors.firstname}
          error={touched.firstname && Boolean(errors.firstname)}
          helperText={touched.firstname && errors.firstname}
          id="firstname"
          label="Prénom"
          name="firstname"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          type="text"
          value={values.firstname}
        />
        <TextField
          aria-errormessage={errors.lastname}
          error={touched.lastname && Boolean(errors.lastname)}
          helperText={touched.lastname && errors.lastname}
          id="lastname"
          label="Nom"
          name="lastname"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          type="text"
          value={values.lastname}
        />
        <TextField
          aria-errormessage={errors.email}
          className="col-span-2"
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          id="email"
          label="Adresse e-mail"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          type="email"
          value={values.email}
        />
        <TextField
          aria-errormessage={errors.password}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          id="password"
          label="Mot de passe"
          name="password"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          type="password"
          value={values.password}
        />
        <TextField
          aria-errormessage={errors.confirmPassword}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.confirmPassword && errors.confirmPassword}
          id="confirmPassword"
          label="Confirmer le mot de passe"
          name="confirmPassword"
          onBlur={handleBlur}
          onChange={handleChange}
          required
          type="password"
          value={values.confirmPassword}
        />
        <LoadingButton
          className="col-span-2"
          color="primary"
          disabled={!isValid || Object.keys(touched).length === 0}
          loading={isSubmitting || isValidating || createUser.isLoading}
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
