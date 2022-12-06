import { AppBar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar component="footer" position="static">
      <Toolbar className="justify-around gap-3">
        <div className="flex items-center">
          <Typography className="mr-2">Facebook</Typography>
          <FacebookIcon />
        </div>
        <Typography className="hidden sm:block">
          Association Sensation Kizomba
        </Typography>
        <div className="flex items-center">
          <Typography className="mr-2">Instagram</Typography>
          <InstagramIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
