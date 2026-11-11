"use client"

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useStorage, useUI } from "@/context";
import { useFormik } from "formik"
import * as Yup from 'yup';
import { ImageFace } from "./ImageFace";
import { putAboutMe } from "@/actions";
import { toast } from "sonner";
import { certificateI, Skill, Skills } from "@/interfaces";
import { BaseModal } from "./base-modal";
import { FormCertification } from "./Form-certification";
import { CertificationsList } from './certifications-list';
import { SkillsList } from './Skills-list';

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
   certifications?: certificateI[];
   skills?: Skills;
}

export function AboutMeForm(props: AboutMeFormProps) {

   const { image, description, certifications = [], skills = [] } = props
   const { loading, handleShowModal, showModal } = useUI()
   const { getValue } = useStorage()

   const imageRef = useRef<HTMLInputElement>(null)
   const [file, setFile] = useState<File | undefined>(undefined)
   const [auxCertifications, setAuxCertifications] = useState<certificateI[]>([]);
   const [auxSkills, setAuxSkills] = useState<Skills>(skills)


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

         fd.append("skills", JSON.stringify(auxSkills.map(skill => {
            const { name, stars } = skill
            return { name, stars }
         })))

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

   const handleAddSkill = () => {
      const draftSkills = [...auxSkills]
      draftSkills.push({
         name: "",
         stars: 0,
         edit: true
      });
      setAuxSkills(draftSkills)
   }

   const handleEditSkill = (index: number) => {
      const newAuxSkills = [...auxSkills]
      newAuxSkills[index].edit = true
      setAuxSkills(newAuxSkills)
   }

   const handleDeleteSkill = (index: number) => {
      const newAuxSkills = [...auxSkills]

      setAuxSkills(newAuxSkills.filter((_, _index: number) => _index !== index))
   }

   const handleSaveSkill = (index: number, skill: Skill) => {

      const newAuxSkills = [...auxSkills]

      newAuxSkills[index].edit = false

      setAuxSkills(newAuxSkills)
   }

   const handleChangeSkills = (index: number, e: ChangeEvent<HTMLInputElement>) => {
      const newAuxSkills = [...auxSkills]
      const { value, name } = e.target

      if (name === 'name') {
         newAuxSkills[index].name = value
      } else {
         newAuxSkills[index].stars = Number(value)
      }

      setAuxSkills(newAuxSkills)
   }

   useEffect(() => {
      loading.run()
      setFieldValue('description', description)
      setFieldValue('image', image)
      setAuxCertifications(certifications)
      setAuxSkills(skills)
      setTimeout(() => loading.stop(), 1000)
   }, [])

   return (<>
      {
         showModal && <BaseModal>
            <FormCertification onAdd={handleAddCertification} />
         </BaseModal>
      }

      <div className="w-full max-w-screen-2xl min-w-0 mx-auto px-7 mt-5">

         <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full min-w-0 gap-5"
         >
            <div className="flex flex-row items-center justify-between gap-3">
               <h3 className="min-w-0 font-semibold uppercase text-lg md:text-2xl lg:text-3xl text-blue-600">
                  About me
               </h3>

               <button
                  className="shrink-0 outline-none cursor-pointer font-bold text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm py-2 px-5 sm:px-8"
                  type="submit"
               >
                  Save
               </button>
            </div>


            <div className="flex flex-col md:flex-row w-full min-w-0 gap-5">
               <div className="flex flex-col items-center w-full md:w-auto md:shrink-0 min-w-0">
                  <ImageFace
                     img={image}
                     file={file}
                     onClick={() => imageRef.current?.click()}
                  />

                  <input
                     ref={imageRef}
                     onChange={handleFile}
                     type="file"
                     accept="image/*"
                     className="hidden"
                  />
               </div>

               <div className="flex flex-col w-full min-w-0">
                  <textarea
                     rows={4}
                     {...getFieldProps("description")}
                     placeholder="Description"
                     className={`w-full max-w-full min-w-0 rounded-lg block p-2.5 align-middle min-h-96 resize-y ${errors.description && touched.description
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                        : "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                  />

                  {errors.description && touched.description && (
                     <p className="mt-2 text-sm text-red-600">
                        <span className="font-medium">Oops,</span> {errors.description}!
                     </p>
                  )}
               </div>

            </div>
         </form>
      </div>

      <hr className="bg-gray-200 h-0.5 w-8/12 max-w-screen-2xl mx-auto my-10" />

      <div className='w-full max-w-screen-2xl flex flex-col md:flex-row justify-between gap-5 mx-auto px-7 mb-5'>

         <CertificationsList
            certifications={auxCertifications}
            handleShowModal={handleShowModal}
            handleDeleteCertification={handleDeleteCertification}
            handleEditCertification={handleEditCertification}
         />

         <SkillsList
            skills={ auxSkills }
            handleAddSkill={ handleAddSkill }
            handleChangeSkills={ handleChangeSkills }
            handleSaveSkill={ handleSaveSkill }
            handleDeleteSkill={ handleDeleteSkill }
            handleEditSkill={ handleEditSkill }
         />
      </div>
   </>)
}