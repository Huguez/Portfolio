'use server'

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
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ email, password })
      });

      const data = await resp.json();

      if (!resp.ok) {
         throw new Error(data.message || "An error occurred");
      }

      return { ok: true, ...data };
   } catch (error) {
      console.error("Login error:", error);
      return { ok: false, error: error instanceof Error ? error.message : String(error) };
   }
}
