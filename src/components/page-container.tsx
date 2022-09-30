import type { PropsWithChildren } from 'react';

//Crée le container des pages
function PageContainer({ children }: PropsWithChildren) {
  return <main className="container mx-auto mt-4 mb-20">{children}</main>;
}

export default PageContainer;
