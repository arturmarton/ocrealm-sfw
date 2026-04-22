import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];
  const sections = ["scifi", "fantasy", "modern"];
  const parts = hostname.split(".");
  const subdomain = parts.length > 2 ? parts[0] : "";
  if (sections.includes(subdomain)) {
    let pathname = url.pathname;
    if (pathname.startsWith(`/${subdomain}`)) {
      pathname = pathname.substring(subdomain.length + 1) || "/";
    }
    const rewriteUrl = new URL(`/${subdomain}${pathname}`, request.url);
    return NextResponse.rewrite(rewriteUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)"],
};
