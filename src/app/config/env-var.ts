import * as joi from 'joi'

interface EnvVars {
   NEXT_PUBLIC_RESEND_API_KEY: string;
   NEXT_PUBLIC_RESEND_MX_SEND: string;
   NEXT_PUBLIC_RESEND_TXT_SEND: string;
   NEXT_PUBLIC_RESEND_TXT_RESEND: string;
   NEXT_PUBLIC_BASEURL: string;
   NODE_ENV: string;
   NEXT_PUBLIC_SECRET_KEY_JWT: string;
}

const envSchema: joi.ObjectSchema<EnvVars> = joi.object({
   NEXT_PUBLIC_RESEND_API_KEY: joi.string().required(),
   NEXT_PUBLIC_RESEND_MX_SEND: joi.string().required(),
   NEXT_PUBLIC_RESEND_TXT_SEND: joi.string().required(),
   NEXT_PUBLIC_RESEND_TXT_RESEND: joi.string().required(),
   NEXT_PUBLIC_BASEURL: joi.string().required(),
   NODE_ENV: joi.string().valid("development", "production", "test").required(),
   NEXT_PUBLIC_SECRET_KEY_JWT: joi.string().required(),
}).unknown(true);


const { error, value } = envSchema.validate({
   NEXT_PUBLIC_SECRET_KEY_JWT: process.env.NEXT_PUBLIC_SECRET_KEY_JWT,
   NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
   NEXT_PUBLIC_RESEND_MX_SEND: process.env.NEXT_PUBLIC_RESEND_MX_SEND,
   NEXT_PUBLIC_RESEND_TXT_SEND: process.env.NEXT_PUBLIC_RESEND_TXT_SEND,
   NEXT_PUBLIC_RESEND_TXT_RESEND: process.env.NEXT_PUBLIC_RESEND_TXT_RESEND,
   NEXT_PUBLIC_BASEURL: process.env.NEXT_PUBLIC_BASEURL,
   NODE_ENV: process.env.NODE_ENV,
});

if ( !!error ) {
   throw new Error(`Config validation error: ${ error.message }`);
}

export const env: EnvVars = {
   NEXT_PUBLIC_RESEND_API_KEY:    value.NEXT_PUBLIC_RESEND_API_KEY,
   NEXT_PUBLIC_RESEND_MX_SEND:    value.NEXT_PUBLIC_RESEND_MX_SEND,
   NEXT_PUBLIC_RESEND_TXT_SEND:   value.NEXT_PUBLIC_RESEND_TXT_SEND,
   NEXT_PUBLIC_RESEND_TXT_RESEND: value.NEXT_PUBLIC_RESEND_TXT_RESEND,
   NEXT_PUBLIC_BASEURL:           value.NEXT_PUBLIC_BASEURL,
   NODE_ENV:                      value.NODE_ENV,
   NEXT_PUBLIC_SECRET_KEY_JWT:                value.NEXT_PUBLIC_SECRET_KEY_JWT
}