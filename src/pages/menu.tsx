import * as React from 'react'
import { NextPage } from 'next'
import cx from 'classnames'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { styled, alpha, useTheme } from '@mui/material/styles'
import theme from 'tailwindcss/defaultTheme'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Image from 'next/image'
import logo from '../../public/logo_SK.jpeg'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey.A400, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: '50%',
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: 'gold',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const drawerWidth = 200
const navItems = ["L'association", 'Nantes', 'Autres villes']
const actionItems = ['Nous contacter', 'Se connecter']

const Menu = () => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const burger = (
    <IconButton
      size="medium"
      edge="start"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      className={cx('mr-4', open && 'hidden', 'text-neutral-200', 'lg:hidden')}
    >
      <MenuIcon />
    </IconButton>
  )

  const drawer = (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      className={cx('lg:hidden')}
      variant="persistent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          return (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText className={cx('text-yellow-500')} primary={item} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <List>
        {actionItems.map((action, index) => {
          return (
            <ListItem key={action} disablePadding>
              <ListItemButton>
                <ListItemText className={cx('text-yellow-500')} primary={action} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )

  const navLink = (
    <Toolbar className={cx('hidden', 'lg:flex', 'justify-start', 'items-center', 'lg:w-5/6')}>
      {navItems.map((item, index) => {
        return (
          <Button className={cx('text-yellow-500', 'mr-3')} key={index}>
            {item}
          </Button>
        )
      })}
      <Image src={logo} alt="logo" width="50px" height="50px" className={cx('rounded-full')} />
      {actionItems.map((action, index) => {
        return (
          <Button className={cx('text-yellow-500', 'ml-3')} key={index}>
            {action}
          </Button>
        )
      })}
    </Toolbar>
  )

  const linkName = (
    <Typography
      variant="h6"
      component="div"
      className={cx('grow', 'flex-nowrap', 'text-neutral-200', 'mr-4', 'lg:hidden')}
    >
      Home
    </Typography>
  )

  const search = (
    <Search className={cx('hidden', 'sm:flex', 'lg:w-1/6')}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInput placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
    </Search>
  )
  const image = (
    <Toolbar className={cx('lg:hidden')}>
      <Image
        src={logo}
        alt="logo"
        layout="fixed"
        width="50px"
        height="50px"
        className={cx('rounded-full', 'mx-4')}
      />
    </Toolbar>
  )

  return (
    <Box className={cx('w-full')}>
      <AppBar position="sticky">
        <Toolbar>
          {navLink}
          {burger}
          {linkName}
          {drawer}
          {image}
          {search}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Menu
