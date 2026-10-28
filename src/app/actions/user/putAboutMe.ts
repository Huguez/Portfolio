'use server'

import { env } from "@/config"

const baseUrl = env.NEXT_PUBLIC_BASEURL

interface getAboutMeReturn {
   ok: boolean;
   errors?: {
      [key: string]: { msg: string }
   }
}

export const putAboutMe = async ( fd: FormData, token: string ): Promise<getAboutMeReturn> => {
   try{
      const endpoint = `${ baseUrl }/user/aboutMe`
      
      const resp = await fetch( endpoint, {
         method: 'PUT',
         headers: {
            "Authorization": `Bearer ${ token }`
         },
         body: fd,
      } ).then( resp => resp.json() )

      return { ok: true, ...resp  }
   }catch( error ){
      console.log( error );
      return { ok: false }
   }
}