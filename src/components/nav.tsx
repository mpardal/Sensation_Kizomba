import Link from 'next/link';
import { Button } from '@mui/material';
import React from 'react';
import NavOtherCitiesMenu from './nav-other-cities-menu';

function Nav() {
  return (
    <nav className="flex h-full w-full items-center">
      <div className="hidden lg:flex lg:items-center gap-6">
        <Link href="/about" legacyBehavior passHref>
          <Button color="primary" component="a" title="qui sommes-nous ?">
            L'association
          </Button>
        </Link>
        <Link href="/nantes" legacyBehavior passHref>
          <Button color="primary" component="a" title="événements sur Nantes">
            Nantes
          </Button>
        </Link>

        <NavOtherCitiesMenu />
        <Link href="/contact" legacyBehavior passHref>
          <Button
            className="hidden lg:block"
            component="a"
            title="nous contacter"
          >
            Nous contacter
          </Button>
        </Link>

        {/*{!logged ? (
          <Link href="/login" legacyBehavior passHref>
            <Button
              className="hidden text-primary-500 lg:block"
              component="a"
              title="connexion à Sensation Kizomba"
            >
              Se connecter
            </Button>
          </Link>
        ) : (
          //Bouton de déconnexion
          <Button
            className="ml-auto sm:ml-0"
            color="primary"
            disabled={loading}
            onClick={() => {
              signOut(auth)
                .then(() => {
                  setMessage('Vous êtes déconnecté', 'success');
                })
                .catch((error) => {
                  logger.error('cannot logout', error);
                });
            }}
          >
            Déconnexion
          </Button>
        )}*/}
      </div>
    </nav>
  );
}

export default Nav;
