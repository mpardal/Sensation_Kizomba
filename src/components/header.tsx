import React, { useState } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Burger from './burger'
import Search from './search'
import Nav from './nav'
import DrawerNav from './drawer-nav'
import logo from '../../public/logo_SK.png'
import Image from 'next/future/image'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <AppBar position="sticky">
      <Toolbar className="relative h-[64px] w-full overflow-hidden lg:flex">
        <Burger open={open} onOpen={handleDrawerOpen} />
        <DrawerNav open={open} onClose={handleDrawerClose} />
        <Image src={logo} alt="logo" className="mx-5 h-full w-auto rounded-full" />
        <Nav />
        <Search />
      </Toolbar>
    </AppBar>
  )
}

export default Header
