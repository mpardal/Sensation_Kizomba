import { Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function NavOtherCitiesMenu() {
  const router = useRouter() as NextRouter | null;

  useEffect(() => {
    //Si l'url change, le menu se ferme
    router?.events.on('routeChangeStart', handleOtherCitiesMenuClose);

    return () => {
      router?.events.off('routeChangeStart', handleOtherCitiesMenuClose);
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
          <MenuItem component="a" title="événements sur Bordeaux">
            Bordeaux
          </MenuItem>
        </Link>
        <Link href="/le-mans" legacyBehavior passHref>
          <MenuItem component="a" title="événements au Mans">
            Le Mans
          </MenuItem>
        </Link>
        <Link href="/angers" legacyBehavior passHref>
          <MenuItem component="a" title="événements sur Angers">
            Angers
          </MenuItem>
        </Link>
        <Link href="/rennes" legacyBehavior passHref>
          <MenuItem component="a" title="événements sur Rennes">
            Rennes
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}

export default NavOtherCitiesMenu;
