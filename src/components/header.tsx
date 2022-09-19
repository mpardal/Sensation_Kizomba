import ButtonBase from '@mui/material/ButtonBase'
import Link from 'next/link'
import React, { useState } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Burger from './burger'
import Search from './search'
import Nav from './nav'
import Drawer from './drawer-nav'
import Image from 'next/future/image'
import logo from '../../public/logo_SK.png'

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
        <Drawer open={open} onClose={handleDrawerClose} onOpen={handleDrawerOpen} />
        <span className="h-full p-2 lg:mr-4">
          <Link href="/" passHref>
            <ButtonBase component="a" className="h-full rounded-full text-center">
              <Image src={logo} alt="logo" className="h-full w-auto rounded-full" />
            </ButtonBase>
          </Link>
        </span>
        <Nav />
      </Toolbar>
    </AppBar>
  )
}

export default Header
