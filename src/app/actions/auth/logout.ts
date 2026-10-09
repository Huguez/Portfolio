'use server'

import { cookies } from "next/headers";

export interface loginReturn {
   ok:    boolean;
   error?: unknown;
}

export const logout = async () => {
   try{
      const cookieStorage = cookies();
      
      cookieStorage.delete("token");

      return { ok: true }; 
   }catch(error){
      console.error("Logout error:", error);
      return { ok: false, error: error instanceof Error ? error.message : String(error) };
   }
}
