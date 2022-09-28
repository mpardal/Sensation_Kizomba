import { useEvents } from '../hooks/use-events';

function Events({ city }: { city: string }) {
  const eventsSnapshot = useEvents(city);

  return (
    <>
      {eventsSnapshot.isLoading && <div>loading</div>}

      {eventsSnapshot.isError && <div>Error</div>}

      {eventsSnapshot.isSuccess &&
        eventsSnapshot.data.docs.map((doc) => {
          return (
            <div className="mb-8" key={doc.id}>
              {JSON.stringify(doc.data(), undefined, 2)}
            </div>
          );
        })}
    </>
  );
}

export default Events;
