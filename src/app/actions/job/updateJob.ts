'use server'

import { env } from "@/config/env-var";
import { IExperienceForm, JobI } from "@/interfaces";

const baseUrl = env.NEXT_PUBLIC_BASEURL

interface UpdateJobReturn {
   ok: boolean;
   errors?: {
      [key: string]: { msg: string }
   };
}

export const updateJob = async ( id: string,  newJob: JobI | IExperienceForm, token: string ): Promise<UpdateJobReturn> => {
   try {
      const endpoint = `${ baseUrl }/jobs/${ id }/updateJob`

      const resp = await fetch( endpoint, {
         method: 'PUT',
         headers: {
            "Authorization": `Bearer ${ token }`,
             'Content-Type': 'application/json',
         },
         body: JSON.stringify( newJob ),
      } )
      
      const data = await resp.json();

      console.log( { data } );
      
      return  {
         ...data
      }
   } catch (err) {
      console.error("update Job error:", err );
      return { ok: false, };
   }
}