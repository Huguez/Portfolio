"use client";

import React from 'react'
import styles from './LoginForm.module.scss'
import * as Yup from 'yup';
import { useStorage, useUI } from '@/context';
import { useFormik } from 'formik';
import { login } from '@/actions';
import { useRouter } from "next/navigation";
import { toast } from 'sonner';


interface FormValuesI {
   email: string;
   password: string;
}

const initialValues: FormValuesI = {
   email:    "",
   password: "",
}

const validationSchema = Yup.object({
   email: Yup.string().required("E-mail is required").email("must be a valid e-mail"),
   password: Yup.string().required("Password is required"),
});

export const LoginForm = () => {
   const router = useRouter();
   const { loading } = useUI();
   const { setValue, deleteValue } = useStorage()
   
   const { errors, touched, getFieldProps, handleSubmit } = useFormik({
      initialValues,
      onSubmit: async (values: FormValuesI, { resetForm },) => {

         loading.run();

         const resp = await login(values.email, values.password);

         if (!resp.ok) {
            loading.stop();
            resetForm();
            deleteValue("user");
            toast.error(`Login failed: ${ resp.error || "Unknown error" }`);
            return;
         }

         resetForm();
         setValue( "user", resp.user );
         setValue("token", resp.token )
         router.push( "/admin");
         setTimeout( () => {
            toast.success(`Welcome back, ${ resp.user?.username || "Hacker" } !!!`);
            loading.stop();
         }, 2000 )
      },
      validationSchema,
   })

   return (
      <div className={styles.loginForm}>
         <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-5 sm:my-10" >

            <div className="flex flex-col gap-3 mx-auto w-full ">
               <input type="text" {...getFieldProps("email")}
                  className={`${errors.email && touched.email ?
                     "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
                     "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"} rounded-lg block w-full sm:mx-auto p-2.5`
                  }
                  placeholder="E-mail"
                  autoComplete='off'
               />
               {errors.email && touched.email && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.email}</p>}
            </div>

            <div className="flex flex-col gap-3 mx-auto w-full ">
               <input type="password" {...getFieldProps("password")}
                  className={`${errors.password && touched.password ?
                     "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
                     "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"} rounded-lg block w-full p-2.5`
                  }
                  placeholder="Password"
                  autoComplete='off'
               />
               {errors.password && touched.password && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.password}</p>}
            </div>

            <button
               type="submit"
               className="w-full sm:mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
               Log-in
            </button>

         </form>
      </div>
   )
}