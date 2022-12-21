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
import OptimizedIframe from '@/components/optimized-iframe';
import {
  cityKeyToCityName,
  cityNameForPageTitle,
} from '@/utils/city-key-to-city-name';
import mardi from '../../public/mardi.jpeg';

function DetailEvent({
  title,
  address,
  date,
  description,
  weezeventUrl,
  city,
  images,
}: {
  title: string;
  address: string;
  date: AppEventDate;
  description: string;
  weezeventUrl: string;
  city: string;
  images: string[];
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
        title={
          <>
            Événement <strong>{title}</strong> prévu{' '}
            <strong>{cityNameForPageTitle(cityKeyToCityName(city))}</strong>
          </>
        }
        titleTypographyProps={{
          component: 'h1',
        }}
      />
      <CardContent className="text-center">
        <div className="md:flex m-3 md:gap-2">
          {images.map((image) => (
            <div className="relative w-full h-80" key={image}>
              <Image
                alt="maquette de l'événement"
                className="object-contain"
                fill
                priority
                sizes="100vw"
                src={image || mardi}
              />
            </div>
          ))}
        </div>
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
                <ListItemText primaryTypographyProps={{ component: 'h3' }}>
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
                <ListItemText primaryTypographyProps={{ component: 'h3' }}>
                  {address}
                </ListItemText>
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
                <OptimizedIframe
                  className="w-full border-none"
                  height={500}
                  src={weezeventUrl}
                  title="Afficher la billeterie"
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
