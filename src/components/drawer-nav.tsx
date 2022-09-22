import { Typography, SwipeableDrawer } from '@mui/material'
import { Divider, List, ListItemButton, ListItemText, Drawer as MuiDrawer } from '@mui/material'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { auth } from '../config/firebase-config'
import { useAuth } from '../hooks/use-auth'
import { useGlobalSnackbar } from '../hooks/use-global-snackbar'

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const Drawer = ({
  open,
  onClose,
  onOpen,
}: {
  open: boolean
  onClose: () => void
  onOpen: () => void
}) => {
  const router = useRouter()
  const { logged } = useAuth()
  const { setMessage } = useGlobalSnackbar()

  useEffect(() => {
    router.events.on('routeChangeComplete', onClose)

    return () => {
      router.events.off('routeChangeComplete', onClose)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
      <DrawerHeader className="flex items-center justify-end px-2">
        <Typography variant="h6">Sensation Kizomba</Typography>
      </DrawerHeader>
      <Divider />
      <List>
        <Link href="/about" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">L'association</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/nantes" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Nantes</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/bordeaux" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Bordeaux</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/le-mans" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Le Mans</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/orleans" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Orléans</ListItemText>
          </ListItemButton>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/contact" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Nous contacter</ListItemText>
          </ListItemButton>
        </Link>
        {!logged ? (
          <Link href="/login" passHref={true}>
            <ListItemButton component="a">
              <ListItemText className="mr-3 text-yellow-500">Se connecter</ListItemText>
            </ListItemButton>
          </Link>
        ) : (
          <ListItemButton
            onClick={() => {
              signOut(auth)
                .then(() => {
                  setMessage('Vous êtes déconnecté', 'success')
                  onClose()
                })
                .catch((err) => {
                  console.error('Error signOut', err)
                })
            }}
          >
            <ListItemText className="text-yellow-500">Déconnexion</ListItemText>
          </ListItemButton>
        )}
      </List>
    </SwipeableDrawer>
  )
}

export default Drawer
