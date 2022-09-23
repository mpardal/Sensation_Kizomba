import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { Button } from '@mui/material';
import React from 'react';
import { auth } from '../config/firebase-config';
import { useAuth } from '../hooks/use-auth';
import { logger } from '../utils/logger';
import NavOtherCitiesMenu from './nav-other-cities-menu';
import Search from './search';

function Nav() {
  const { logged, loading } = useAuth();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="hidden lg:flex lg:items-center">
        <Link href="/about" passHref>
          <Button color="primary" component="a">
            L'association
          </Button>
        </Link>
        <Link href="/nantes" passHref>
          <Button color="primary" component="a">
            Nantes
          </Button>
        </Link>

        <NavOtherCitiesMenu />
      </div>

      <div className="flex w-full gap-3">
        <Link href="/contact" passHref>
          <Button className="hidden lg:block" component="a">
            Nous contacter
          </Button>
        </Link>

        <Search />

        {!logged ? (
          <Link href="/login" passHref>
            <Button className="hidden text-primary-500 lg:block" component="a">
              Se connecter
            </Button>
          </Link>
        ) : (
          <Button
            className="ml-auto sm:ml-0"
            color="primary"
            disabled={loading}
            onClick={() => {
              signOut(auth).catch((error) => {
                logger.error('cannot logout', error);
              });
            }}
          >
            Déconnexion
          </Button>
        )}
      </div>
    </div>
  );
}

export default Nav;
