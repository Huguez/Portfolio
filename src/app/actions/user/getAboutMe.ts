'use server'

import { env } from "@/config"
import { certificateI } from '@/interfaces';
import { Skills } from '../../interfaces/skill';

const baseUrl = env.NEXT_PUBLIC_BASEURL

interface getAboutMeReturn {
   image?: string;
   description?: string[];
   certifications?: certificateI[]
   skills?: Skills
}

export const getAboutMe = async (): Promise<getAboutMeReturn> => {
   try{
      const endpoint = `${ baseUrl }/user/aboutMe`
      
      const { admin:{ image, description, certifications, skills } } = await fetch( endpoint, { cache: "no-store" } ).then( resp => resp.json() )
      
      return { image, description, certifications, skills }
   }catch( error ){
      console.log( error );
      return {}
   }
}