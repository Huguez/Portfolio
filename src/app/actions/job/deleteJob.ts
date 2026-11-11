'use server'

import { env } from "@/config/env-var";

const baseUrl = env.NEXT_PUBLIC_BASEURL

interface DeleteJobReturn {
   ok: boolean;
   errors?: {
      [key: string]: { msg: string }
   };
}


export const deleteJob = async (id: string, token: string ): Promise<DeleteJobReturn>  =>  {
   try {
      const endpoint = `${ baseUrl }/jobs/${ id }/deleteJob`

      const resp = await fetch( endpoint, {
         method: 'DELETE',
         headers: {
            "Authorization": `Bearer ${ token }`,
             'Content-Type': 'application/json',
         },
      } )
      
      const data = await resp.json();
      
      return {
         ...data
      }
   } catch (error) {
      console.log( error );
      return {
         ok: false
      }
   }
}