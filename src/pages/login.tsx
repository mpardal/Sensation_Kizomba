import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import { Button } from '@mui/material'

const Login: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="mt-10 text-center">Formulaire de connexion</h1>
      <div className="mx-3 flex flex-col">
        <div className="mt-20 flex flex-col lg:w-full">
          <div className="my-3 flex flex-col gap-2">
            <label htmlFor="identifiant">Identifiant :</label>
            <input
              required
              type="text"
              id="identifiant"
              placeholder="nom d'utilisateur"
              className="rounded-md lg:w-full"
            />
          </div>
          <div className="my-3 flex flex-col gap-2">
            <label htmlFor="password">Mot de passe :</label>
            <input
              required
              type="password"
              id="password"
              placeholder="*******"
              className="rounded-md lg:w-full"
            />
          </div>
        </div>
        <Button className="my-10 mx-auto bg-neutral-200 lg:w-1/2">Connexion</Button>
      </div>
    </div>
  )
}

Login.Layout = function LoginLayout(page) {
  return <Layout>{page}</Layout>
}

export default Login
