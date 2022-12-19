import { AppBar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

function Footer() {
  return (
    <AppBar component="footer" position="static">
      <Toolbar className="justify-around gap-3">
        <Link
          className="flex items-center no-underline text-inherit"
          href="https://www.facebook.com/profile.php?id=100046972278242"
          title="lien vers la page FaceBook de Sensation Kizomba"
        >
          <Typography className="mr-2">Facebook</Typography>
          <FacebookIcon />
        </Link>
        <Typography className="hidden sm:block">
          Association Sensation Kizomba
        </Typography>
        <div className="flex items-center">
          <Link
            className="flex items-center no-underline text-inherit"
            href="https://instagram.com/sensationkizomba?igshid=YmMyMTA2M2Y="
            title="lien vers la page Instagram de Sensation Kizomba"
          >
            <Typography className="mr-2">Instagram</Typography>
            <InstagramIcon />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
