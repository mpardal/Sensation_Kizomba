import {
  Button,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Card,
  List,
  ListItemButton,
  ListItem, IconButton, CardHeader, ListItemText, ListItemAvatar, Avatar,
} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Image from 'next/future/image'
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
    <Card variant="outlined">
      <CardHeader title={title} subheader={date} />
      <CardMedia title={title} className="relative">
        <Image src={image} alt={title} sizes="100vw" fill className="!relative" priority />
      </CardMedia>
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CalendarMonthIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>{date}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationCityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>{address} à <strong>{city}</strong></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>{professor}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MusicNoteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>{dj}</ListItemText>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Link href={linkDetails} passHref>
          <IconButton component="a">
            <AddCircleOutlineIcon color="action" fontSize="large" />
          </IconButton>
        </Link>
        <Link href={linkBuyTicket} passHref>
          <IconButton component="a">
            <LocalActivityIcon color="action" fontSize="large" />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Event
