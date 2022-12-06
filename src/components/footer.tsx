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
          href="https://www.facebook.com/profile.php?id=100046972278242"
          legacyBehavior
          passHref
        >
          <a className="flex items-center no-underline text-inherit">
            <Typography className="mr-2">Facebook</Typography>
            <FacebookIcon />
          </a>
        </Link>
        <Typography className="hidden sm:block">
          Association Sensation Kizomba
        </Typography>
        <div className="flex items-center">
          <Link href="#" legacyBehavior passHref>
            <a className="flex items-center no-underline text-inherit">
              <Typography className="mr-2">Instagram</Typography>
              <InstagramIcon />
            </a>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
