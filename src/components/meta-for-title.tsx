import React from 'react';

function MetaForCity({ title }: { title: string }) {
  return (
    <>
      <meta content={title} property="og:title" />
      <meta content={title} property="twitter:title" />
    </>
  );
}

export default MetaForCity;
