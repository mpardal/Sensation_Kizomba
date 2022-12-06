import {
  CardActions,
  CardContent,
  Card,
  List,
  ListItem,
  IconButton,
  CardHeader,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import dayjs from 'dayjs';
import Link from 'next/link';
import type { AppEventDate } from '../types/app-event-date';

function Event({
  title,
  city,
  address,
  date,
  teacher,
  dj,
  linkBuyTicket,
  linkDetails,
}: {
  title: string;
  city: string;
  address: string;
  date: AppEventDate;
  teacher: string;
  dj: string;
  linkBuyTicket?: string;
  linkDetails: string;
}) {
  const formattedDate = {
    from: dayjs(date.from.toDate()).format('DD/MM/YYYY'),
    to: date.to ? dayjs(date.to.toDate()).format('DD/MM/YYYY') : undefined,
  };

  return (
    <Card variant="outlined">
      <CardHeader
        subheader={
          formattedDate.to
            ? `Du ${formattedDate.from} au ${formattedDate.to}`
            : formattedDate.from
        }
        title={title}
      />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CalendarMonthIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              {formattedDate.to
                ? `${formattedDate.from} — ${formattedDate.to}`
                : formattedDate.from}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationCityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              {address} à <strong>{city}</strong>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SupervisorAccountIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>{teacher}</ListItemText>
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
        <Link href={linkDetails} legacyBehavior passHref>
          <IconButton component="a">
            <AddCircleOutlineIcon color="action" fontSize="large" />
          </IconButton>
        </Link>
        {linkBuyTicket ? (
          <Link href={linkBuyTicket} legacyBehavior passHref>
            <IconButton component="a">
              <LocalActivityIcon color="action" fontSize="large" />
            </IconButton>
          </Link>
        ) : null}
      </CardActions>
    </Card>
  );
}

export default Event;
