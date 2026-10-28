'use client'

import React, { useEffect } from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'
import { certificateI } from '@/interfaces'
import { useUI } from '@/context'

const initialValues: certificateI = {
   title: "",
   imagen: "",
   link: "",
}

const validationSchema = Yup.object({
   title: Yup.string().required("Title is required"),
   imagen: Yup.string().required("Image is required"),
   link: Yup.string().required("Link is required"),
});

interface FormCertificationProps {
   onAdd: (values: certificateI, edit?: boolean ) => void;
}

export const FormCertification = ( { onAdd }:FormCertificationProps ) => {
   const { certification, handleHideModal } = useUI()
   
   const { errors, touched, getFieldProps, setFieldValue, handleSubmit } = useFormik({
      initialValues,
      onSubmit: (values: certificateI, { resetForm }) => {
         onAdd( values, !!certification )
         resetForm()
         handleHideModal()
      },
      validationSchema,
   })

   useEffect( () => {
      if(certification){
         setFieldValue("title", certification.title)
         setFieldValue("imagen", certification.imagen)
         setFieldValue("link", certification.link)
      }
   }, [])

   return (
      <form onSubmit={handleSubmit}>
         <p className='text-lg text-center'>
            {
               certification ? `Editing: '${ certification.title }'` : "Add a new Certification"
            }
            
         </p>

         <hr className="bg-gray-200 h-0.5 w-10/12 mx-auto my-5" />

         <div className="flex gap-5 flex-col">

            <div>
               <input type="text" {...getFieldProps("title")}
                  className={`${errors.title && touched.title ?
                     "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
                     !!certification ? "disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 cursor-not-allowed" :
                     "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " } rounded-lg block w-full p-2.5`}
                  placeholder="Title" autoComplete="off" disabled={!!certification}
               />
               {errors.title && touched.title && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.title}</p>}
            </div>

            <div>
               <input type="text" {...getFieldProps("imagen")}
                  className={`${errors.imagen && touched.imagen ?
                     "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
                     "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "} rounded-lg block w-full p-2.5`}
                  placeholder="Imagen" autoComplete="off"
               />
               {errors.imagen && touched.imagen && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.imagen}</p>}
            </div>

            <div>

               <input type="text" {...getFieldProps("link")}
                  className={`${errors.link && touched.link ?
                     "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
                     "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "} rounded-lg block w-full p-2.5`}
                  placeholder="Link" autoComplete="off"
               />
               {errors.link && touched.link && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.link}</p>}
            </div>

         </div>

         <div className='flex flex-row gap-2 mt-4'>
            <button
               type='submit'
               className="outline-none cursor-pointer	font-bold text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm py-2 px-4 w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
               Add
            </button>

            <button
               type='button'
               onClick={handleHideModal}
               className="outline-none cursor-pointer	font-bold text-gray-700 bg-gray-300 hover:bg-gray-400 rounded-lg text-sm py-2 px-4 w-full md:w-2/3 lg:w-1/2 mx-auto"
            >
               Cancel
            </button>
         </div>
      </form>
   )
}
