import NightlifeIcon from '@mui/icons-material/Nightlife';
import { Chip, Typography, ButtonBase } from '@mui/material';
import Link from 'next/link';
import { useNextEvents } from '@/hooks/use-next-events';
import { appEventFormatDate } from '@/utils/app-event-format-date';
import { slugifyEventLink } from '@/utils/slugify-event-link';

function NextEventsBanner() {
  const nextEvents = useNextEvents();

  return (
    <div className="flex p-2 w-full items-center bg-secondary-900">
      <Typography className="mr-3" component="span" variant="body2">
        Prochains événements
      </Typography>
      {nextEvents.isSuccess ? (
        <div className="flex grow overflow-auto gap-3">
          {nextEvents.data.docs.map((event) => {
            const data = event.data();
            const date = appEventFormatDate(data.date.from, 'll');

            return (
              <ButtonBase className="rounded-2xl" key={event.id}>
                <Link
                  className="no-underline"
                  href={slugifyEventLink(data, event)}
                >
                  <Chip
                    className="cursor-pointer"
                    icon={<NightlifeIcon />}
                    label={`${data.title} - ${date}`}
                  />
                </Link>
              </ButtonBase>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default NextEventsBanner;
