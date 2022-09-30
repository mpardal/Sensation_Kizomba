import { useEvents } from '../hooks/use-events';

function Events({ city }: { city: string }) {
  //intègre la fonction dans le fichier "use-event" et tri par ville
  const eventsSnapshot = useEvents(city);

  return (
    <>
      {/*Correspond à ce qui est affiché en cas de chargement*/}
      {eventsSnapshot.isLoading && <div>loading</div>}

      {/*Correspond à ce qui est affiché en cas d'erreur*/}
      {eventsSnapshot.isError && <div>Error</div>}

      {eventsSnapshot.isSuccess &&
        eventsSnapshot.data.docs.map((doc) => {
          return (
            <div className="mb-8" key={doc.id}>
              {/*Retourne un objet correspondant à la collection events dans Firebase*/}
              {JSON.stringify(doc.data(), undefined, 2)}
            </div>
          );
        })}
    </>
  );
}

export default Events;
