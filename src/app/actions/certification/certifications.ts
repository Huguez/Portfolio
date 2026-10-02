'use server'

import { certificateI } from "@/interfaces";
import { env } from "@/config";

const baseUrl = env.NEXT_PUBLIC_BASEURL

interface getCerReturn {
   certifications?: certificateI[] 
}

export const getCertifications = async (): Promise<getCerReturn> => {
   try {

      const { certifications } =  await fetch( `${ baseUrl }/certifications` ).then( resp => resp.json() )
      
      return {  
         certifications,
      }
   } catch (error) {
      console.log( error );
      return {}
   }
}