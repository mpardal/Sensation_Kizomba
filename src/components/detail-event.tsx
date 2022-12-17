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
    from: dayjs(date.from.toDate()).format('DD/MM/YYYY'),
    to: date.to ? dayjs(date.to.toDate()).format('DD/MM/YYYY') : undefined,
  };

  return (
    <Card variant="outlined">
      <CardHeader className="text-center underline" title={title} />
      <CardContent className="text-center">
        <Image alt="event" className="p-3 w-3/4 h-auto" src={mardi} />
        <List>
          <section className="flex flex-row justify-evenly">
            <div>
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
            </div>
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationCityIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>{address}</ListItemText>
              </ListItem>
            </div>
          </section>
          <ListItem>
            <ListItemText>
              <div
                contentEditable="false"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText className="text-center">
              <iframe
                className="w-4/5"
                height="750"
                src={weezeventUrl}
                title="iframe"
              />
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default DetailEvent;
