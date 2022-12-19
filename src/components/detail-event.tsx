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
import dayjs from 'dayjs';
import Image from 'next/image';
import type { AppEventDate } from '@/types/app-event-date';
import mardi from '../../public/mardi.jpeg';

function DetailEvent({
  title,
  address,
  date,
  description,
  weezeventUrl,
}: {
  title: string;
  address: string;
  date: AppEventDate;
  description: string;
  weezeventUrl: string;
}) {
  const formattedDate = {
    from: dayjs(date.from).format('DD/MM/YYYY'),
    to: date.to ? dayjs(date.to).format('DD/MM/YYYY') : undefined,
  };

  return (
    <Card variant="outlined">
      <CardHeader
        className="text-center"
        subheader={
          <>
            {formattedDate.to ? 'Du ' : 'Le '}
            <strong>{formattedDate.from} </strong>
            {formattedDate.to ? (
              <>
                au <strong>{formattedDate.to}</strong>
              </>
            ) : (
              ''
            )}
          </>
        }
        subheaderTypographyProps={{
          component: 'h2',
        }}
        title={title}
        titleTypographyProps={{
          component: 'h1',
        }}
      />
      <CardContent className="text-center">
        <Image
          alt="maquette de l'événement"
          className="p-3 w-3/4 h-auto"
          src={mardi}
        />
        <List>
          <li>
            <List className="flex justify-evenly">
              <ListItem
                aria-label="date de l'événement"
                className="justify-center w-auto"
              >
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
              <ListItem aria-label="adresse de l'événement" className="w-auto">
                <ListItemAvatar>
                  <Avatar>
                    <LocationCityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>{address}</ListItemText>
              </ListItem>
            </List>
          </li>
          <ListItem>
            <ListItemText>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </ListItemText>
          </ListItem>
          {weezeventUrl ? (
            <ListItem disablePadding>
              <ListItemText className="text-center -mx-4 sm:mx-0">
                <iframe
                  className="w-full border-none"
                  height="500"
                  src={weezeventUrl}
                  title={weezeventUrl}
                />
              </ListItemText>
            </ListItem>
          ) : null}
        </List>
      </CardContent>
    </Card>
  );
}

export default DetailEvent;
