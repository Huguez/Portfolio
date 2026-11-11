'use server'

import { env } from "@/config/env-var";
import { IExperienceForm, JobI } from "@/interfaces";

const baseUrl = env.NEXT_PUBLIC_BASEURL

interface createJobReturn {
   ok: boolean;
   errors?: {
      [key: string]: { msg: string }
   };
}

export const createJob = async ( newJob: JobI | IExperienceForm, token: string ): Promise<createJobReturn> => {
   try {
      
      const endpoint = `${ baseUrl }/jobs/createJob`
      
      console.log( endpoint );

      const resp = await fetch( endpoint, {
         method: 'POST',
         headers: {
            "Authorization": `Bearer ${ token }`,
             'Content-Type': 'application/json',
         },
         body: JSON.stringify( newJob ),
      } )
      
      const data = await resp.json();
      
      return  {
         ...data
      }
   } catch (err) {
      console.error("create Job error:", err );
      return { ok: false, };
   }
}