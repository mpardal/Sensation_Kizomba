import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  SwipeableDrawer,
} from '@mui/material';
import { signOut } from 'firebase/auth';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { auth } from '@/config/firebase-config';
import { useAuth } from '@/hooks/auth/use-auth';
import { useGlobalSnackbar } from '@/hooks/use-global-snackbar';
import { logger } from '@/utils/logger';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function Drawer({
  open,
  onClose,
  onOpen,
}: {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}) {
  const router = useRouter() as NextRouter | null;
  const { logged } = useAuth();
  const { setMessage } = useGlobalSnackbar();

  //Ferme le menu quand on change de page
  useEffect(() => {
    router?.events.on('routeChangeComplete', onClose);

    return () => {
      router?.events.off('routeChangeComplete', onClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SwipeableDrawer onClose={onClose} onOpen={onOpen} open={open}>
      <DrawerHeader className="flex items-center justify-end px-2">
        <Typography variant="h6">Sensation Kizomba</Typography>
      </DrawerHeader>
      <Divider />
      <List>
        <Link href="/about" legacyBehavior passHref>
          <ListItemButton component="a" title="qui sommes-nous ?">
            <ListItemText className="mr-3 text-primary-500">
              L'association
            </ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/nantes" legacyBehavior passHref>
          <ListItemButton component="a" title="événements sur Nantes">
            <ListItemText className="mr-3 text-primary-500">
              Nantes
            </ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/bordeaux" legacyBehavior passHref>
          <ListItemButton component="a" title="événements sur Bordeaux">
            <ListItemText className="mr-3 text-primary-500">
              Bordeaux
            </ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/le-mans" legacyBehavior passHref>
          <ListItemButton component="a" title="événements au Mans">
            <ListItemText className="mr-3 text-primary-500">
              Le Mans
            </ListItemText>
          </ListItemButton>
        </Link>
        <Link
          href="/orleans"
          legacyBehavior
          passHref
          title="événements sur Orléans"
        >
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-primary-500">
              Orléans
            </ListItemText>
          </ListItemButton>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/contact" legacyBehavior passHref>
          <ListItemButton component="a" title="nous contacter">
            <ListItemText className="mr-3 text-primary-500">
              Nous contacter
            </ListItemText>
          </ListItemButton>
        </Link>
        {!logged ? (
          <Link href="/login" legacyBehavior passHref>
            <ListItemButton component="a" title="Connexion à Sensation Kizomba">
              <ListItemText className="mr-3 text-primary-500">
                Se connecter
              </ListItemText>
            </ListItemButton>
          </Link>
        ) : (
          <ListItemButton
            onClick={() => {
              signOut(auth)
                .then(() => {
                  setMessage('Vous êtes déconnecté', 'success');
                  onClose();
                })
                .catch((err) => {
                  logger.error('Error signOut', err);
                });
            }}
          >
            <ListItemText className="text-primary-500">
              Déconnexion
            </ListItemText>
          </ListItemButton>
        )}
      </List>
    </SwipeableDrawer>
  );
}

export default Drawer;
