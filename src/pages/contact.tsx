import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import { Button, TextField } from '@mui/material'

const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="mb-10 text-center">Formulaire de contact</h1>
      <div className="mx-3 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="firstName">Nom :</label>
            <input
              required
              type="text"
              id="firstName"
              placeholder="Prénom"
              className="rounded-md !text-black"
              //variant="outlined"
            />
          </div>
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="lastName">Nom :</label>
            <input required type="text" id="lastName" placeholder="Nom" className="rounded-md" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-row lg:gap-4">
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="phoneNumber">Numéro de téléphone :</label>
            <input
              type="number"
              id="phoneNumber"
              className="rounded-md"
              placeholder="06.12.34.56.78"
            />
          </div>
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="email">Adresse email :</label>
            <input
              required
              type="email"
              id="email"
              placeholder="prenom.nom@domain.fr"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="my-3 flex flex-col">
          <label htmlFor="comment">Commentaires</label>
          <input type="text" id="comment" className="max-w-full rounded-md" />
        </div>
        <Button className="my-10 mx-auto bg-neutral-200 lg:w-1/2">Envoyer</Button>
      </div>
    </div>
  )
}

Contact.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>
}

export default Contact