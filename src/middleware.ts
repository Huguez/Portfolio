import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { env } from "@/config";

export async function middleware(request: NextRequest) {
   const token: string = request.cookies.get("token")?.value || "";
   const { pathname } = request.nextUrl;

   const isLogin = pathname === "/auth/login";
   const isAdmin = pathname.includes("/admin");

   if (!token) {
      if (isAdmin) {
         return NextResponse.redirect(new URL("/auth/login", request.url));
      }

      return NextResponse.next();
   }

   try {
      const secretKey = new TextEncoder().encode(env.NEXT_PUBLIC_SECRET_KEY_JWT);

      const resp = await jwtVerify(token, secretKey, {
         algorithms: ["HS256"],
      });

      if (isLogin) {
         return NextResponse.redirect(new URL("/admin", request.url));
      }

      return NextResponse.next();
   } catch (error) {

      console.error("JWT verification error:", error);

      const response = isAdmin ? NextResponse.redirect( new URL("/auth/login", request.url) ) : NextResponse.next();

      response.cookies.delete("token");

      return response;
   }
}

export const config = {
   matcher: [
      "/admin/:path*",
      "/auth/login",
   ],
};