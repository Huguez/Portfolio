import * as joi from 'joi'

interface EnvVars {
   NEXT_PUBLIC_RESEND_API_KEY: string;
   NEXT_PUBLIC_RESEND_MX_SEND: string;
   NEXT_PUBLIC_RESEND_TXT_SEND: string;
   NEXT_PUBLIC_RESEND_TXT_RESEND: string;
   NEXT_PUBLIC_BASEURL: string;
}

const envSchema  = joi.object({
   NEXT_PUBLIC_RESEND_API_KEY: joi.string().required(),
   NEXT_PUBLIC_RESEND_MX_SEND: joi.string().required(),
   NEXT_PUBLIC_RESEND_TXT_SEND: joi.string().required(),
   NEXT_PUBLIC_RESEND_TXT_RESEND: joi.string().required(),
   NEXT_PUBLIC_BASEURL: joi.string().required(),
}).unknown(true);


const { error, value } = envSchema.validate( process.env );

if ( error ) {
   throw new Error(`Config validation error: ${ error.message }`);
}

const envVars: EnvVars = value;

export const env = {
   NEXT_PUBLIC_RESEND_API_KEY: envVars.NEXT_PUBLIC_RESEND_API_KEY,
   NEXT_PUBLIC_RESEND_MX_SEND: envVars.NEXT_PUBLIC_RESEND_MX_SEND,
   NEXT_PUBLIC_RESEND_TXT_SEND: envVars.NEXT_PUBLIC_RESEND_TXT_SEND,
   NEXT_PUBLIC_RESEND_TXT_RESEND: envVars.NEXT_PUBLIC_RESEND_TXT_RESEND,
   NEXT_PUBLIC_BASEURL: envVars.NEXT_PUBLIC_BASEURL
}