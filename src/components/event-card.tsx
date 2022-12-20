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

function EventCard({
  title,
  address,
  date,
  linkDetails,
  images,
}: {
  title: string;
  address: string;
  date: AppEventDate;
  linkDetails: string;
  images: string[];
}) {
  const formattedDate = {
    from: dayjs(date.from).format('DD/MM/YYYY'),
    to: date.to ? dayjs(date.to).format('DD/MM/YYYY') : undefined,
  };

  return (
    <Card className="w-full" variant="outlined">
      <CardHeader className="text-center" component="h2" title={title} />
      <CardContent className="text-center">
        <Link
          className="relative w-full h-80 block"
          href={linkDetails}
          title="lien vers les détails de l'événement"
        >
          <Image
            alt="event"
            className="object-contain"
            fill
            priority
            sizes="100vw"
            src={images[0] ?? mardi}
          />
        </Link>
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
        <Link href={linkDetails} legacyBehavior passHref>
          <Button
            color="primary"
            component="a"
            fullWidth
            startIcon={<LoupeIcon color="inherit" fontSize="large" />}
            title="détail de l'événement"
            variant="contained"
          >
            Détail de l'événement
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default EventCard;
