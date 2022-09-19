import Link from 'next/link'
import { Button, Drawer } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import * as React from 'react'

const Nav = () => {
  return (
    <div className="hidden h-full items-center justify-center lg:flex">
      <Link href="/about" passHref={true}>
        <Button component="a" className="mr-3 text-yellow-500">
          L'association
        </Button>
      </Link>
      <Link href="/nantes" passHref={true}>
        <Button component="a" className="mr-3 text-yellow-500">
          Nantes
        </Button>
      </Link>
      <Link href="/others/" passHref={true}>
        <Button component="a" className="mr-3 text-yellow-500">
          Autres villes
        </Button>
      </Link>
      <Link href="/">
        <a className="text-yellow-600">
          <HomeIcon className="text-3xl" />
        </a>
      </Link>
      <Link href="/contact" passHref={true}>
        <Button component="a" className="ml-3 text-yellow-500">
          Nous contacter
        </Button>
      </Link>
      <Link href="/connect" passHref={true}>
        <Button component="a" className="ml-3 text-yellow-500">
          Se connecter
        </Button>
      </Link>
    </div>
  )
}

export default Nav
