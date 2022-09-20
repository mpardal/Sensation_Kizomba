import { Button, Menu, MenuItem } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const NavOtherCitiesMenu = () => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', handleOtherCitiesMenuClose)

    return () => {
      router.events.off('routeChangeStart', handleOtherCitiesMenuClose)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [otherCitiesRef, setOtherCitiesRef] = useState<HTMLElement | undefined>()
  const otherCitiesMenuOpen = Boolean(otherCitiesRef)

  const handleOtherCitiesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOtherCitiesRef(event.currentTarget)
  }

  const handleOtherCitiesMenuClose = () => {
    setOtherCitiesRef(undefined)
  }

  return (
    <>
      <Button id="other-cities" className="text-yellow-500" onClick={handleOtherCitiesMenuOpen}>
        Autres villes
      </Button>

      <Menu
        open={otherCitiesMenuOpen}
        anchorEl={otherCitiesRef}
        classes={{
          list: 'text-yellow-500',
        }}
        MenuListProps={{
          'aria-labelledby': 'other-cities',
        }}
        onClose={handleOtherCitiesMenuClose}
      >
        <Link href="/bordeaux" passHref={true}>
          <MenuItem component="a">Bordeaux</MenuItem>
        </Link>
        <Link href="/le-mans" passHref={true}>
          <MenuItem component="a">Le Mans</MenuItem>
        </Link>
        <Link href="/orleans" passHref={true}>
          <MenuItem component="a">Orléans</MenuItem>
        </Link>
      </Menu>
    </>
  )
}

export default NavOtherCitiesMenu
