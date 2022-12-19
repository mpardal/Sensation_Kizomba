import NightlifeIcon from '@mui/icons-material/Nightlife';
import { Chip, Typography, ButtonBase } from '@mui/material';
import Link from 'next/link';
import { useNextEvents } from '@/hooks/use-next-events';
import { appEventFormatDate } from '@/utils/app-event-format-date';
import { slugifyEventLink } from '@/utils/slugify-event-link';
import { millisToTimestamp } from '@/utils/millis-to-timestamp';

function NextEventsBanner() {
  const nextEvents = useNextEvents();

  return (
    <aside className="flex w-full bg-secondary-900 gap-3">
      <Typography className="p-2 self-center" component="span" variant="body2">
        Prochains événements
      </Typography>
      {nextEvents.isSuccess ? (
        <div className="flex grow overflow-auto gap-3 py-2 pr-2">
          {nextEvents.data.map((event) => {
            const date = appEventFormatDate(
              millisToTimestamp(event.date.from),
              'll',
            );

            return (
              <ButtonBase
                aria-label={`événement ${event.title.trim()} pour le ${date}`}
                className="rounded-2xl"
                key={event.id}
              >
                <Link
                  className="no-underline"
                  href={slugifyEventLink(event)}
                  title={`${event.title} - ${date}`}
                >
                  <Chip
                    className="cursor-pointer"
                    icon={<NightlifeIcon />}
                    label={`${event.title} - ${date}`}
                  />
                </Link>
              </ButtonBase>
            );
          })}
        </div>
      ) : null}
    </aside>
  );
}

export default NextEventsBanner;
