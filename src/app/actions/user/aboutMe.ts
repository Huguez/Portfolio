'use server'

const baseUrl = process.env.NEXT_PUBLIC_BASEURL

interface getAboutMeReturn {
   image?: string;
   description?: string[];
}

export const getAboutMe = async (): Promise<getAboutMeReturn> => {
   try{
      const endpoint = `${ baseUrl }/user/aboutMe`
      
      const { admin:{ image, description } } = await fetch( endpoint, { cache: "no-store" } ).then( resp => resp.json() )
      
      return { image, description  }
   }catch( error ){
      console.log( error );
      return {}
   }
}

