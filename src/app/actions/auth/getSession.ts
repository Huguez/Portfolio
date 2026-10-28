"use server";

import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import type { User } from "@/interfaces";
import { env } from "@/config";

export interface Session {
   authenticated: boolean;
}

export async function getSession(): Promise<Session> {
   const token = cookies().get("token")?.value;

   if (!token) {
      return {
         authenticated: false,
      };
   }

   try {
      const secretKey = env.NEXT_PUBLIC_SECRET_KEY_JWT;

      const secret = new TextEncoder().encode(secretKey);

      const resp = await jwtVerify(token, secret, {
         algorithms: ["HS256"],
      });

      return {
         authenticated: true,
      };
   } catch (error) {
      console.error("Error validating session:", error);

      return {
         authenticated: false
      };
   }
}
