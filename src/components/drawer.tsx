import cx from 'classnames'
import { Divider, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import theme from 'tailwindcss/defaultTheme'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Link from 'next/link'
import * as React from 'react'
import { styled } from '@mui/material/styles'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const Drawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <div className={cx('shrink-0 lg:hidden', open)}>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
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
        <Link href="/others/bordeaux" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Bordeaux</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/others/le-mans" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Le Mans</ListItemText>
          </ListItemButton>
        </Link>
        <Link href="/others/orleans" passHref={true}>
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
        <Link href="/connect" passHref={true}>
          <ListItemButton component="a">
            <ListItemText className="mr-3 text-yellow-500">Se connecter</ListItemText>
          </ListItemButton>
        </Link>
      </List>
    </div>
  )
}

export default Drawer
