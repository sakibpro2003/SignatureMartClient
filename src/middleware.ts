import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";
import { JwtPayload } from "jwt-decode";

const authRoutes = ["/login", "/register"];

interface customJWTPayload extends JwtPayload {
  role?: "admin" | "user";
}

type Role = keyof typeof roleBasedPrivateRoutes;
const roleBasedPrivateRoutes = {
  user: [/^\/user/,/^\/create-shop/],
  admin: [/^\/admin/],
};
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo: customJWTPayload | null = await getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL('/',request.url))
};
export const config = {
  matcher: ["/login", "/create-shop", "/admin", "/admin/:page", "/user/:page"],
};
