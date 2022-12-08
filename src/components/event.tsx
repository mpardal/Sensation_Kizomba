import {
  CardContent,
  Card,
  List,
  ListItem,
  CardHeader,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LoupeIcon from '@mui/icons-material/Loupe';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import type { AppEventDate } from '../types/app-event-date';
import mardi from '../../public/mardi.jpeg';

function Event({
  title,
  address,
  date,
  linkDetails,
}: {
  title: string;
  address: string;
  date: AppEventDate;
  linkDetails: string;
}) {
  const formattedDate = {
    from: dayjs(date.from.toDate()).format('DD/MM/YYYY'),
    to: date.to ? dayjs(date.to.toDate()).format('DD/MM/YYYY') : undefined,
  };

  return (
    <Card variant="outlined">
      <CardHeader className="text-center underline" title={title} />
      <CardContent className="text-center">
        <Image alt="event" className="p-3 w-3/4 h-auto" src={mardi} />
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
            <ListItemText>{address}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LoupeIcon color="inherit" fontSize="large" />
              </Avatar>
            </ListItemAvatar>
            <Link href={linkDetails} legacyBehavior passHref>
              <a className="no-underline text-inherit">
                <ListItemText>Détail de l'événement</ListItemText>
              </a>
            </Link>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Event;
