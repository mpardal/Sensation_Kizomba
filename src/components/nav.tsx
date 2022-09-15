import Link from 'next/link'
import { Button } from '@mui/material'
import React from 'react'
import OtherCitiesMenu from './other-cities-menu'
import Search from './search'

const Nav = () => {
  return (
    <div className="hidden h-full w-full items-center justify-center lg:flex">
      <div className="flex grow lg:gap-3">
        <Link href="/about" passHref={true}>
          <Button component="a" className="text-yellow-500">
            L'association
          </Button>
        </Link>
        <Link href="/nantes" passHref={true}>
          <Button component="a" className="text-yellow-500">
            Nantes
          </Button>
        </Link>

        <OtherCitiesMenu />
      </div>

      <div className="flex gap-3">
        <Link href="/contact" passHref={true}>
          <Button component="a" className="text-yellow-500">
            Nous contacter
          </Button>
        </Link>

        <Link href="/login" passHref={true}>
          <Button component="a" className="text-yellow-500">
            Se connecter
          </Button>
        </Link>

        <Search />
      </div>
    </div>
  )
}

export default Nav
