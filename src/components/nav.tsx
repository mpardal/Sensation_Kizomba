import {signOut} from 'firebase/auth'
import Link from 'next/link'
import { Button } from '@mui/material'
import React from 'react'
import {auth} from '../config/firebase-config'
import {useAuth} from '../hooks/use-auth'
import NavOtherCitiesMenu from './nav-other-cities-menu'
import Search from './search'

const Nav = () => {
  const {logged, loading} = useAuth()

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

        <NavOtherCitiesMenu />
      </div>

      <div className="flex gap-3">
        <Link href="/contact" passHref={true}>
          <Button component="a" className="text-yellow-500">
            Nous contacter
          </Button>
        </Link>

        {!logged ? (
          <Link href="/login" passHref={true}>
            <Button component="a" className="text-yellow-500">
              Se connecter
            </Button>
          </Link>
        ) : (
          <Button disabled={loading} onClick={() => {
            signOut(auth)
              .catch((error) => {
                console.error('cannot logout', error)
              })
          }}>Déconnexion</Button>
        )}

        <Search />
      </div>
    </div>
  )
}

export default Nav
