'use client';

import { AppBar, Button, Toolbar } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo_SK.png';
import PageContainer from '../../components/page-container';

function AdminLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar className="relative h-[64px] w-full overflow-hidden lg:flex py-2 gap-4">
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
          <Link href="/app/" legacyBehavior passHref>
            <Button
              className="h-full text-center"
              color="primary"
              component="a"
              variant="contained"
            >
              Retour
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <PageContainer>{children}</PageContainer>
    </>
  );
}

export default AdminLayout;
