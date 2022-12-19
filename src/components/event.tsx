import {
  CardContent,
  Card,
  List,
  ListItem,
  CardHeader,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CardActions,
  Button,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LoupeIcon from '@mui/icons-material/Loupe';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import type { AppEventDate } from '@/types/app-event-date';
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
    from: dayjs(date.from).format('DD/MM/YYYY'),
    to: date.to ? dayjs(date.to).format('DD/MM/YYYY') : undefined,
  };

  return (
    <Card variant="outlined">
      <CardHeader className="text-center" component="h2" title={title} />
      <CardContent className="text-center">
        <Image
          alt="event"
          className="p-3 w-full h-full object-contain"
          src={mardi}
        />
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
        </List>
      </CardContent>
      <CardActions>
        <Link
          href={linkDetails}
          legacyBehavior
          passHref
          title="détail de l'événement"
        >
          <Button
            color="primary"
            fullWidth
            startIcon={<LoupeIcon color="inherit" fontSize="large" />}
            variant="contained"
          >
            Détail de l'événement
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Event;
