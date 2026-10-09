'use server'

import { cookies } from "next/headers";
import { env } from "@/config";
import type { User } from "@/interfaces";

const baseUrl = env.NEXT_PUBLIC_BASEURL

export interface loginReturn {
   ok:    boolean;
   token?: string;
   user?:  User;
   error?: any;
}

export const login = async ( email: string, password: string ): Promise<loginReturn> => {
   try {
      const resp = await fetch(`${ baseUrl }/auth/login`, {
         method: "POST",
         cache: "no-cache",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ email, password })
      });
      
      const data = await resp.json();
      
      if (!data.ok) {
         throw new Error(data.message || "An error occurred");
      }

      const cookieStorage = cookies();

      cookieStorage.set({
         name: "token",
         value: data.token,
         httpOnly: true,
         secure: env.NODE_ENV === "production",
      });

      return { ok: true, ...data };
   } catch (error) {
      console.error("Login error:", error);
      return { ok: false, error: error instanceof Error ? error.message : String(error) };
   }
}
