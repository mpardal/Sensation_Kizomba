import { AppBar } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <AppBar className="flex flex-row justify-around">
      <div className="flex flex-row items-center justify-start">
        <p className="mr-5">Facebook :</p>
        <FacebookIcon />
      </div>
      <p>Association Sensation Kizomba</p>
      <div className="flex flex-row items-center justify-end">
        <p className="mr-5">Instagram :</p>
        <InstagramIcon />
      </div>
    </AppBar>
  )
}

export default Footer
