import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/coffe-shop")) {
    return NextResponse.rewrite(new URL(url.pathname.replace("/coffe-shop", ""), "http://localhost:3001"));
  }

  if (url.pathname.startsWith("/landing")) {
    return NextResponse.rewrite(new URL(url.pathname.replace("/landing-AWKDEV", ""), "http://localhost:3002"));
  }

  return NextResponse.next();
}

