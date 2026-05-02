import { MiddlewareConfig, NextRequest, NextResponse as response } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const routesPublic = [
    {
      path: "/",
      whenAuthenticated: "next"
    },
    {
      path: "/sign-up",
      whenAuthenticated: "redirect"
    },
    {
      path: "/sign-in",
      whenAuthenticated: "redirect"
    },
    {
      path: "/reset-password",
      whenAuthenticated: "redirect"
    },
    {
      path: "/about",
      whenAuthenticated: "next"
    },
    {
      path: "/terms",
      whenAuthenticated: "next"
    },
    {
      path: "/privacy",
      whenAuthenticated: "next"
    },
    {
      path: "/integrations",
      whenAuthenticated: "next"
    }
  ] as const;
  const path = request.nextUrl.pathname;
  const isPublicRoute = routesPublic.find(route => route.path === path);
  const token = getSessionCookie(request);

  if (isPublicRoute && isPublicRoute.whenAuthenticated === "redirect" && token) {
    const URI = request.nextUrl.clone();
    URI.pathname = "/dashboard";
    return response.redirect(URI);
  }

  else if ((isPublicRoute && !token) || (token && !isPublicRoute)) {
    return response.next();
  }

  else if (!token && !isPublicRoute) {
    const URI = request.nextUrl.clone();
    URI.pathname = "/sign-in";
    return response.redirect(URI);
  }

  return response.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api/trpc|api|_next/static|_next/image|.*\\.png$).*)"
  ]
};