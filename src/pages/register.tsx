import { Button } from '@mui/material';
import React from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from '../components/layout';

const Register: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="mb-10 text-center">Formulaire d'inscription</h1>
      <div className="mx-3 flex flex-col">
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="firstName">Nom :</label>
            <input
              className="rounded-md !text-black"
              id="firstName"
              placeholder="Prénom"
              required
              type="text"
              //variant="outlined"
            />
          </div>
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="firstName">Prénom :</label>
            <input
              className="rounded-md"
              id="firstName"
              placeholder="Prénom"
              required
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-row lg:gap-4">
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="address">Adresse :</label>
            <input
              className="rounded-md"
              id="address"
              placeholder="Numéro et rue"
              type="text"
            />
          </div>
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="city">Ville :</label>
            <input
              className="rounded-md"
              id="city"
              placeholder="Nantes"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-row lg:gap-4">
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="phoneNumber">Numéro de téléphone :</label>
            <input
              className="rounded-md"
              id="phoneNumber"
              placeholder="06.12.34.56.78"
              type="number"
            />
          </div>
          <div className="my-3 flex flex-col lg:w-full">
            <label htmlFor="email">Adresse email :</label>
            <input
              className="rounded-md"
              id="email"
              placeholder="prenom.nom@domain.fr"
              required
              type="email"
            />
          </div>
        </div>
        <Button className="my-10 mx-auto bg-neutral-200 lg:w-1/2">
          Envoyer
        </Button>
      </div>
    </div>
  );
};

Register.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Register;
