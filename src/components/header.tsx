import ButtonBase from '@mui/material/ButtonBase';
import Link from 'next/link';
import React, { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/logo_SK.png';
import Burger from './burger';
import Nav from './nav';
import Drawer from './drawer-nav';

function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <Toolbar className="relative h-[64px] w-full overflow-hidden lg:flex">
        <Burger onOpen={handleDrawerOpen} />
        <Drawer
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
          open={open}
        />
        <span className="h-full p-2 lg:mr-4">
          <Link href="/app/" legacyBehavior passHref>
            <ButtonBase
              className="h-full rounded-full text-center"
              component="a"
            >
              <Image
                alt="logo"
                className="h-full w-auto rounded-full"
                src={logo}
              />
            </ButtonBase>
          </Link>
        </span>
        <Nav />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
