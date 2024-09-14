'use client';

import { sendEmail } from "@/actions";
import { useUI } from "@/context";
import { useFormik } from "formik"
import { ReactNode, useState } from "react";
import * as Yup from "yup"

interface FormValuesI {
   email:   string;
   subject: string;
   message: string;
}

const initialValues: FormValuesI = {
   email: "",
   subject: "",
   message: "",
}

const validationSchema = Yup.object( {
   email: Yup.string().required("E-mail is required").email("must be a valid e-mail"),
   subject: Yup.string().required("Subject is required"),
   message: Yup.string().required("Message is required"),
} );

interface mailI{
   send: boolean;
   msg: ReactNode;
}

export function ContactForm() {

   const [ mailSend, setMailSend ] = useState<mailI>( { send: false, msg: <></> } )
   const { loading } = useUI() 
   

   const { errors, touched, getFieldProps, handleSubmit } = useFormik( { 
      initialValues,
      onSubmit: async  ( values : FormValuesI, { resetForm } ) => {
         
         // loading.run()

         const { ok, resp, error } = await sendEmail( values )
         
         console.log( error );

         // resetForm()

         if ( ok ) {
            
            setTimeout( () => {

               loading.stop()

               setMailSend( { 
                  send: true , 
                  msg: <p className="text-green-600 text-center text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-7 "> Message send !! </p>
               } )

            }, 1000 )

         } else {

            setMailSend( { 
               send: true , 
               msg: <p className="text-red-600 text-center text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-7 "> Something got wrong !! </p> 
            } )

            loading.stop()
         }
      },
      validationSchema, 
   } )
   
   return <>
      { !mailSend.send && <form onSubmit={ handleSubmit } className="flex flex-col gap-5 my-5 sm:my-10" >
         <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-col gap-3 sm:w-1/2">
               <input type="text" { ...getFieldProps("email") } 
                  className={ `${ errors.email && touched.email ? 
                     "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" : 
                     "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "  } rounded-lg block w-full p-2.5 `} 
                  placeholder="E-mail" autoComplete="off" 
               />
               { errors.email && touched.email && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> { errors.email }</p> }
            </div>

            <div className="flex flex-col gap-3 sm:w-1/2">
               <input type="text" { ...getFieldProps("subject") } 
                  className={`${ errors.subject && touched.subject ? 
                     "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" : 
                     "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " }  rounded-lg block w-full p-2.5 `} 
                  placeholder="Subject" autoComplete="off" 
               />
               { errors.subject && touched.subject && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> { errors.subject }</p> }
            </div>
         </div>
         <div className="flex flex-col sm:gap-5" >      
            <textarea rows={ 4 } { ...getFieldProps("message") } 
               className={`${ errors.message && touched.message ? 
               "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" : 
               "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " } rounded-lg block p-2.5 w-full `} placeholder="Message">
            </textarea>
            { errors.message && touched.message && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> { errors.message }</p> }
            
         </div>
         <button type="submit" className=" w-full sm:w-2/6 sm:mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Send</button>
      </form>}
      {
         mailSend.send && <div className="h-64 w-fit mx-auto">
            { mailSend.msg }
         </div> 
      }
   </>;
      
   
}