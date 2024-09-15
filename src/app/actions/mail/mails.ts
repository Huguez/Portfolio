'use server'

import { Resend } from 'resend';

const apiKey = `${ process.env.NEXT_PUBLIC_RESEND_API_KEY }`.replace( "@", "_" )

const resend = new Resend( apiKey );

interface sendEmailReturn {
   ok: boolean;
   resp?: any;
   error?: any;
}

interface propsI {
   email:   string;
   subject: string;
   message: string;
}

export const sendEmail = async ( { message, email, subject }: propsI ): Promise<sendEmailReturn> => {
   try {

      const resp: any = await resend.emails.send({
         from: "noreplay@huguezportfolio.dev",
         to: 'carlos.huguez@gmail.com',
         subject: `${ subject } - ${ email }`,
         text: `${ message }
         atte: ${ email }`
       });

       if ( !resp.data ) {
         return {
            ok: false,
            error: resp.error,
         }
       }

      return {
         ok: true,
         resp,
      }
   } catch (error) {
      console.log( error );
      return {
         ok: false,
      }
   }
}