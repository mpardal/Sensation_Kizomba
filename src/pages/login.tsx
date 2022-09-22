import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Login as LoginIcon,
} from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
  Alert,
  Button,
  FormControl,
  Grow,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import { auth } from '../config/firebase-config'
import { useAuth } from '../hooks/use-auth'
import { useGlobalSnackbar } from '../hooks/use-global-snackbar'

const LoginPage: NextPageWithLayout = () => {
  const { setMessage, hide } = useGlobalSnackbar()
  const { logged } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (loading || logged) return

    setLoading(true)
    setShowErrorMessage(false)
    hide()

    // aucune validation n'est effectuée ici, il faudra rajouter quelque chose comme zod et formik
    const formData = new FormData(evt.currentTarget)

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      // permet de se connecter à firebase, l'utilisateur est récupéré dans hooks/use-auth.tsx
      const cred = await signInWithEmailAndPassword(auth, email, password)

      // par la suite, on supprimera le console.log
      console.log(cred)

      setMessage('Vous êtes connecté', 'success')
    } catch (err) {
      console.error(err)

      if (err instanceof FirebaseError) {
        if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
          setErrorMessage('Adresse email ou mot de passe incorrect')
          setShowErrorMessage(true)
        }
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-3 flex flex-col">
      <Typography variant="h3" className="text-center" gutterBottom>
        Sensation Kizomba
      </Typography>

      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <TextField type="email" label="adresse e-mail" name="email" id="email" required />
          <FormControl>
            <InputLabel htmlFor="password">mot de passe</InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              label="mot de passe"
              id="password"
              name="password"
              required
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
            />
          </FormControl>
        </div>

        <LoadingButton
          loading={loading}
          variant="outlined"
          type="submit"
          startIcon={<LoginIcon />}
          loadingPosition="start"
          disabled={logged}
        >
          Se connecter
        </LoadingButton>

        <Grow in={showErrorMessage}>
          <Alert severity="error" onClose={() => setShowErrorMessage(false)}>
            {errorMessage}
          </Alert>
        </Grow>
      </form>
    </div>
  )
}

LoginPage.Layout = function LoginLayout(page) {
  return <Layout>{page}</Layout>
}

export default LoginPage
