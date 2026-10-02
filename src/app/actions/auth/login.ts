'use server'

import { env } from "@/config";

const baseUrl = env.NEXT_PUBLIC_BASEURL

interface loginReturn {
   resp?: {
      token: string;
      message: string;
      user: any;
   }
   error?: any
}

export const login = async ( email: string, password: string ): Promise<loginReturn> => {
   try {
      console.log("login: ", email, password );
      console.log("baseUrl: ", baseUrl );
      
      return {}
   }catch (error) {
      return { error }
   }
}
