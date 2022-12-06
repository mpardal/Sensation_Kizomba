import type { PropsWithChildren } from 'react';

//Crée le container des pages
function PageContainer({ children }: PropsWithChildren) {
  return <main className="container mx-auto my-4 grow">{children}</main>;
}

export default PageContainer;
