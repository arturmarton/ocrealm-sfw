import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl;
  const hostname = host.split(":")[0];
  const parts = hostname.split(".");
  const subdomain = parts.length > 2 ? parts[0] : "";
  const sections = ["anime", "fantasy", "real", "scifi"];
  if (hostname === "ocrealm.ovh" || hostname === "www.ocrealm.ovh") {
    return NextResponse.redirect(new URL("https://anime.ocrealm.ovh/", request.url));
  }

  if (sections.includes(subdomain)) {
    let pathname = url.pathname;
    if (pathname.startsWith(`/${subdomain}`)) {
      pathname = pathname.substring(subdomain.length + 1) || "/";
    }

    const finalRewritePath = `/${subdomain}${pathname}`;
    const rewriteUrl = new URL(finalRewritePath, request.url);
    return NextResponse.rewrite(rewriteUrl);
  }
  return;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.ico|.*\\.webp).*)",
  ],
};
