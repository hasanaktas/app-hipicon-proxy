import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";

  const isAndroid = /Android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

  if (isAndroid) {
    return NextResponse.redirect(
      `https://play.google.com/store/apps/details?id=com.hipicon`
    );
  }

  if (isIOS) {
    return NextResponse.redirect(
      `https://apps.apple.com/tr/app/hipicon-better-by-design/id1523203666`
    );
  }

  return NextResponse.redirect(
    `https://www.hipicon.com${req.nextUrl.pathname}${req.nextUrl.search}`
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|\\.well-known).*)"],
};
