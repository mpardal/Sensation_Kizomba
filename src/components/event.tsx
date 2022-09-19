import {
  Button,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Card,
  List,
  ListItemButton,
  ListItem,
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import Image from 'next/image'
import Link from 'next/link'

const Event = ({
  title,
  image,
  city,
  address,
  date,
  professor,
  dj,
  linkBuyTicket,
  linkDetails,
}: {
  title: string
  image: string
  city: string
  address: string
  date: string
  professor: string
  dj: string
  linkBuyTicket: string
  linkDetails: string
}) => {
  return (
    <Card className="m-5 max-w-full rounded-2xl bg-neutral-300 p-5">
      <CardContent>
        <Typography className="text-md mb-5 text-center font-bold text-yellow-600 lg:text-2xl">
          {title}
        </Typography>
        <div className="flex flex-col items-center justify-around lg:flex-row">
          <Image src={{ image }} alt={title} width="750px" height="500px" className="rounded-3xl" />
          <List>
            <ListItem className="flex flex-col items-start text-sm text-yellow-600 md:flex-row lg:flex-col lg:justify-around lg:text-xl">
              <ListItemButton>Ville : {city}</ListItemButton>
              <ListItemButton>Adresse : {address}</ListItemButton>
              <ListItemButton>Date : {date}</ListItemButton>
              <ListItemButton>Professeurs : {professor}</ListItemButton>
              <ListItemButton>DJs : {dj}</ListItemButton>
            </ListItem>
          </List>
        </div>
      </CardContent>
      <CardActions className="m-6 flex justify-around gap-10 lg:justify-start">
        <Link href={linkDetails}>
          <a>
            <AddCircleOutlineIcon className="text-black" />
          </a>
        </Link>
        <Link href={linkBuyTicket}>
          <a>
            <LocalActivityIcon className="text-black" />
          </a>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Event
