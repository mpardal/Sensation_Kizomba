import React from 'react';
import {
  cityKeyToCityName,
  cityNameForPageTitle,
} from '@/utils/city-key-to-city-name';
import MetaForTitle from '@/components/meta-for-title';
import MetaForDescription from '@/components/meta-for-description';

function MetaForCity({ city }: { city: string }) {
  const pageTitle = cityNameForPageTitle(cityKeyToCityName(city));

  return (
    <>
      <MetaForTitle title={`Sensation Kizomba — Les événements ${pageTitle}`} />
      <MetaForDescription
        description={`Événements ${pageTitle} - Sensation Kizomba`}
      />
    </>
  );
}

export default MetaForCity;
