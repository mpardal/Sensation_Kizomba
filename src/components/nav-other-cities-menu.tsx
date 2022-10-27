import { Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function NavOtherCitiesMenu() {
  const router = useRouter();

  useEffect(() => {
    //Si l'url change, le menu se ferme
    router.events.on('routeChangeStart', handleOtherCitiesMenuClose);

    return () => {
      router.events.off('routeChangeStart', handleOtherCitiesMenuClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [otherCitiesRef, setOtherCitiesRef] = useState<
    HTMLElement | undefined
  >();
  const otherCitiesMenuOpen = Boolean(otherCitiesRef);

  const handleOtherCitiesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOtherCitiesRef(event.currentTarget);
  };

  const handleOtherCitiesMenuClose = () => {
    setOtherCitiesRef(undefined);
  };

  return (
    <>
      <Button
        className="whitespace-nowrap"
        color="primary"
        id="other-cities"
        onClick={handleOtherCitiesMenuOpen}
      >
        Autres villes
      </Button>

      <Menu
        MenuListProps={{
          'aria-labelledby': 'other-cities',
        }}
        anchorEl={otherCitiesRef}
        classes={{
          list: 'text-primary-500',
        }}
        onClose={handleOtherCitiesMenuClose}
        open={otherCitiesMenuOpen}
      >
        <Link href="/bordeaux" legacyBehavior passHref>
          <MenuItem component="a">Bordeaux</MenuItem>
        </Link>
        <Link href="/le-mans" legacyBehavior passHref>
          <MenuItem component="a">Le Mans</MenuItem>
        </Link>
        <Link href="/orleans" legacyBehavior passHref>
          <MenuItem component="a">Orléans</MenuItem>
        </Link>
      </Menu>
    </>
  );
}

export default NavOtherCitiesMenu;
