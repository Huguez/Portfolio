"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useStorage, useUI } from "@/context";
import { useFormik } from "formik"
import Image from "next/image"
import * as Yup from 'yup';
import { ImageFace } from "./ImageFace";
import { putAboutMe } from "@/actions";
import { toast } from "sonner";
import { IoIosAddCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { certificateI } from "@/interfaces";
import { BaseModal } from "./base-modal";
import { FormCertification } from "./Form-certification";

interface IAboutMeForm {
   description: string;
}

const initialValues: IAboutMeForm = {
   description: ""
}

const validationSchema = Yup.object({
   description: Yup.string().required("Description is required"),
});

interface AboutMeFormProps {
   image?: string;
   description?: string[];
   certifications?: certificateI[]
}

export function AboutMeForm(props: AboutMeFormProps) {

   const { image, description, certifications = [] } = props
   const { loading, handleShowModal, showModal } = useUI()
   const imageRef = useRef<HTMLInputElement>(null)
   const [file, setFile] = useState<File | undefined>(undefined)
   const [auxCertifications, setAuxCertifications] = useState<certificateI[]>([]);
   const { getValue } = useStorage()

   const handleFile = (event: any) => {
      const { files } = event.target

      if (!files.length) {
         return
      }

      setFile(files[0])
   }

   const { errors, touched, getFieldProps, handleSubmit, setFieldValue } = useFormik({
      initialValues,
      onSubmit: async (values: IAboutMeForm) => {
         loading.run()

         const fd = new FormData()

         if (file) {
            fd.append("photo", file)
         }

         fd.append("description", values.description)

         const user = getValue("user")

         fd.append("username", user.username)

         fd.append("certifications", JSON.stringify(auxCertifications))

         const resp = await putAboutMe(fd, getValue("token"))

         if (!resp.ok) {
            console.log(resp);
            const errors = new Object(resp.errors)
            Object.keys(errors).forEach(err => {
               resp.errors && toast.error(resp.errors[err].msg);
            })
            loading.stop()
            return
         }

         toast.success(`Profile updated successfully!!`);
         loading.stop()
      },
      validationSchema,
   })

   const handleAddCertification = (values: certificateI, edit: boolean = false) => {

      const { imagen, title, link } = values

      const newCertificationList = [...auxCertifications]

      if (!edit) {
         newCertificationList.push({
            imagen,
            title,
            link
         })

         setAuxCertifications(newCertificationList)
         return;
      }

      const index = newCertificationList.findIndex(cer => cer.title === title)

      newCertificationList[index] = {
         imagen,
         title,
         link
      }

      setAuxCertifications(newCertificationList)
   }

   const handleDeleteCertification = (certification: certificateI) => {
      let newCertificationList = [...auxCertifications]

      newCertificationList = newCertificationList.filter((cer: certificateI) => cer.title !== certification.title)

      setAuxCertifications(newCertificationList)
   }

   const handleEditCertification = (certification: certificateI) => {
      if (certification.title.trim() === "") {
         return
      }

      handleShowModal(certification)
   }


   useEffect(() => {
      loading.run()
      setFieldValue('description', description)
      setFieldValue('image', image)
      setAuxCertifications(certifications)
      setTimeout(() => loading.stop(), 1000)
   }, [])

   return (<>
      {
         showModal && <BaseModal>
            <FormCertification onAdd={handleAddCertification} />
         </BaseModal>
      }
      <div className="mx-auto px-10 sm:px-0">

         <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5 my-5 sm:my-10 ">

            <div className="flex flex-col sm:flex-row gap-5 ">
               <div className="flex flex-col w-full max-w-xl mx-auto">
                  <ImageFace img={image} file={file} onClick={() => imageRef.current?.click()} />
                  <input
                     ref={imageRef}
                     onChange={handleFile}
                     type="file"
                     accept="image/*"
                     className="hidden"
                  />
               </div>

               <div className="flex flex-col w-full mx-auto">
                  <textarea
                     rows={4} {...getFieldProps("description")}
                     placeholder="Description"
                     className={`${errors.description && touched.description ?
                        "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
                        "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "} rounded-lg block p-2.5 w-full mx-auto align-middle h-full `}
                  >
                  </textarea>
                  {errors.description && touched.description && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.description}</p>}

               </div>
            </div>

            <button
               className="outline-none cursor-pointer	font-bold text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm py-2 px-4 w-full md:w-2/3 lg:w-1/2 mx-auto"
               type="submit"
            >
               Save
            </button>
         </form>

      </div>

      <hr className="bg-gray-200 h-0.5 w-10/12 mx-auto my-10" />

      <div className="block w-full mx-auto px-10 sm:px-0">

         <div className="flex justify-between mb-4">
            <h3 className="font-semibold uppercase mb-4 text-lg md:text-2xl lg:text-3xl text-center sm:text-left text-blue-600"> Certifications </h3>

            <button
               onClick={() => handleShowModal()}
               className="cursor-pointer font-bold text-green-600 bg-transparent hover:text-green-800 text-5xl">
               <IoIosAddCircle />
            </button>
         </div>
         <div className="overflow-y-auto h-80 px-4 border rounded-lg">
            {
               auxCertifications.map((cer) => (
                  <section key={`certification-item-${cer.title}`} className="flex flex-col sm:flex-row items-center p-0 bg-white border border-gray-200 rounded-lg my-5 shadow ">
                     <Image
                        src={cer.imagen}
                        alt={cer.link}
                        className="rounded-tl-lg rounded-tr-lg rounded-bl-none sm:rounded-bl-lg sm:rounded-tr-none w-1/12 m-0 p-0"
                        width={80}
                        height={50}
                     />
                     <div className="flex flex-row justify-between px-4 m-auto w-full ">

                        <h5 className="mb-2 truncate lg:whitespace-normal sm:text-left text-sm md:text-base font-semibold tracking-tight text-gray-900 "> {cer.title} </h5>

                        <div className="flex flex-row gap-5">

                           <button title="Delete" className="text-xl text-red-500" onClick={() => handleDeleteCertification(cer)}>
                              <FaTrashAlt />
                           </button>
                           <button title="Edit" className="text-xl text-blue-500" onClick={() => handleEditCertification(cer)} >
                              <LuPencil />
                           </button>
                        </div>

                     </div>
                  </section>
               ))
            }
         </div>
      </div>
   </>)
}