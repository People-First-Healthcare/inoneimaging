import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // allow the maintenance file itself
  if (pathname === "/maintenance.html") {
    return NextResponse.next();
  }

  // allow Next internals and common static assets
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.(png|jpg|jpeg|gif|svg|webp|ico|css|js|map|txt|xml|woff|woff2)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/maintenance.html", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};