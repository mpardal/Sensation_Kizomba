import { NextRequest, NextResponse } from 'next/server'

/**
 * Fonction qui est exécutée à chaque requête. Permet ou non de rediriger, de bloquer des requêtes (par exemple si l'utilisateur n'est pas connecté)
 * @param request
 *
 * @return NextResponse
 */
export function middleware(request: NextRequest): NextResponse {
  // placeholder, pour l'instant, elle ne fait rien
  const response = NextResponse.next()

  const cookie = response.cookies.entries()

  console.log(request)

  return response
}

/**
 * Permet de spécifier sur quelles pages le middleware doit être exécuté
 */
export const config = {
  matcher: ['/login/:path*'],
}
