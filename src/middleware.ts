import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const protectedRoutes = ["/account", "/account/purchase-history"];

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);
  const token = cookies().get("token");
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale: string) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (protectedRoutes.includes(pathname) && !token?.value) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
    // return NextResponse.redirect(
    //   new URL(
    //     `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}${
    //       request.url.search
    //     }`,
    //     request.url
    //   )
    // );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    // "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|_next/images).*)",
    // "/((?!api|static|.*\\..*|_next|public).*)",
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
    //"/((?!api|static|.*\\..*|_next/image).*)",
    // "/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)",
    // "/((?!.*\\.|api\\/).*)"
    //'/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Optional: only run on root (/) URL
    '/',
    // "/((?!api|_next/static|_next/image|img/|favicon.ico).*)",
  ],
};
