import Link from 'next/link'
import { Button } from '@mui/material'
import cx from 'classnames'
import HomeIcon from '@mui/icons-material/Home'
import * as React from 'react'

const Nav = () => {
  return (
    <div className="hidden h-full items-center justify-center lg:flex">
      <Link href="/about" passHref={true}>
        <Button component="a" className={cx('text-yellow-500', 'mr-3')}>
          L'association
        </Button>
      </Link>
      <Link href="/nantes" passHref={true}>
        <Button component="a" className={cx('text-yellow-500', 'mr-3')}>
          Nantes
        </Button>
      </Link>
      <Link href="/others/Index" passHref={true}>
        <Button component="a" className={cx('text-yellow-500', 'mr-3')}>
          Autres villes
        </Button>
      </Link>
      <Link href="/">
        <a className="text-yellow-600">
          <HomeIcon className="text-3xl" />
        </a>
      </Link>
      <Link href="/contact" passHref={true}>
        <Button component="a" className={cx('text-yellow-500', 'ml-3')}>
          Nous contacter
        </Button>
      </Link>
      <Link href="/connect" passHref={true}>
        <Button component="a" className={cx('text-yellow-500', 'ml-3')}>
          Se connecter
        </Button>
      </Link>
    </div>
  )
}

export default Nav
