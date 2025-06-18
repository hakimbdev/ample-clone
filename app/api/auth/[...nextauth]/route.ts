import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-static"

export function generateStaticParams() {
  return [
    { nextauth: ["session"] },
    { nextauth: ["signin"] },
    { nextauth: ["signout"] },
    { nextauth: ["callback"] },
    { nextauth: ["verify-request"] },
    { nextauth: ["error"] }
  ]
}

// Static responses for static export
export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  if (pathname.includes("/api/auth/session")) {
    return NextResponse.json({
      user: null,
      expires: "2099-01-01T00:00:00.000Z"
    })
  }
  
  if (pathname.includes("/api/auth/providers")) {
    return NextResponse.json({
      credentials: {
        id: "credentials",
        name: "Credentials",
        type: "credentials"
      },
      google: {
        id: "google",
        name: "Google",
        type: "oauth"
      }
    })
  }
  
  return NextResponse.json({ error: "Not found" }, { status: 404 })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: "Authentication not available in static export" }, { status: 501 })
}
