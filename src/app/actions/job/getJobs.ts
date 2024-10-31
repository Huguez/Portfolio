'use server'

import { JobI } from "@/interfaces";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL

// interface params {} 

interface getJobsReturn {
   jobs?: JobI[];
}

export const getJobs = async ( ): Promise<getJobsReturn>  => {
   try {

      const { jobs } = await fetch( `${ baseUrl }/jobs` ).then( resp => resp.json() )

      return {
         jobs
      }
   } catch (error) {
      console.log( error );
      return {}
   }
}
