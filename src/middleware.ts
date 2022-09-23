/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Fonction qui est exécutée à chaque requête. Permet ou non de rediriger, de bloquer des requêtes (par exemple si l'utilisateur n'est pas connecté)
 * @param request -
 *
 * @returns import('next/server').NextResponse
 */
export function middleware(request: NextRequest): NextResponse {
  // placeholder, pour l'instant, elle ne fait rien
  const response = NextResponse.next();

  // eslint-disable-next-line no-console
  console.debug(request);

  return response;
}

/**
 * Permet de spécifier sur quelles pages le middleware doit être exécuté
 */
export const config = {
  matcher: ['/login/:path*'],
};
/* eslint-enable @next/next/no-server-import-in-page */
