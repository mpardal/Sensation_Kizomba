import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { Button } from '@mui/material';
import React from 'react';
import { auth } from '../config/firebase-config';
import { useAuth } from '../hooks/auth/use-auth';
import { useGlobalSnackbar } from '../hooks/use-global-snackbar';
import { logger } from '../utils/logger';
import NavOtherCitiesMenu from './nav-other-cities-menu';

function Nav() {
  const { logged, loading } = useAuth();
  const { setMessage } = useGlobalSnackbar();

  return (
    <nav className="flex h-full w-full items-center">
      <div className="hidden lg:flex lg:items-center gap-6">
        <Link href="/about" legacyBehavior passHref>
          <Button color="primary" component="a">
            L'association
          </Button>
        </Link>
        <Link href="/nantes" legacyBehavior passHref>
          <Button color="primary" component="a">
            Nantes
          </Button>
        </Link>

        <NavOtherCitiesMenu />
        <Link href="/contact" legacyBehavior passHref>
          <Button className="hidden lg:block" component="a">
            Nous contacter
          </Button>
        </Link>

        {!logged ? (
          <Link href="/login" legacyBehavior passHref>
            <Button className="hidden text-primary-500 lg:block" component="a">
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
        )}
      </div>
    </nav>
  );
}

export default Nav;
