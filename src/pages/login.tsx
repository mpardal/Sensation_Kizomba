import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material'
import { useState, FormEvent } from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import {
  Button,
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

const LoginPage: NextPageWithLayout = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
  }

  return (
    <div>
      <div className="mx-3 flex flex-col">
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
          <Button variant="outlined">Se connecter</Button>
        </form>
      </div>
    </div>
  )
}

LoginPage.Layout = function LoginLayout(page) {
  return <Layout>{page}</Layout>
}

export default LoginPage
