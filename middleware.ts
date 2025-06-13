import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

// Middleware is disabled for static export
export async function middleware(request: NextRequest) {
  // For static export, we'll just pass through all requests
  return NextResponse.next()
}

// For static export, we'll disable the middleware
// export const config = {
//   matcher: ["/dashboard/:path*"],
// }
