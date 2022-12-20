import React from 'react';

function MetaForDescription({ description }: { description: string }) {
  return (
    <>
      <meta content={description} property="og:description" />
      <meta content={description} property="twitter:description" />
      <meta content={description} name="description" />
    </>
  );
}

export default MetaForDescription;
