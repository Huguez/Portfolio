"use client"

import { FormikHelpers, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import { JobsList } from './Jobs-list';
import { JobI, IExperienceForm } from '@/interfaces';
import { ExperienceForm } from './Experience-form';
import { useStorage, useUI } from '@/context';
import { BaseModal } from './base-modal';
import { createJob, deleteJob, getJobs, updateJob } from '@/actions';
import { toast } from 'sonner';

const initialValues: IExperienceForm = {
   companyName: "",
   startDate: "",
   endDate: "",
   position: '',
   modeWork: "",
   location: "",
   description: ""
}

const validationSchema = Yup.object({
   companyName: Yup.string().required("Company name is required"),
   startDate: Yup.date().required("Start date is required"),
   endDate: Yup.date().required("End date is required"),
   position: Yup.string().required("Position is required"),
   modeWork: Yup.string().required("Work mode is required"),
   description: Yup.string().required("Description is required"),
   location: Yup.string().required("location is required"),
});

export const ExperienceManager = () => {

   const [editMode, setEditMode] = useState<boolean>(false)
   const [showModalExperienceForm, setShowModalExperienceForm] = useState<boolean>(false)
   const [showModalDeleteJob, setShowModalDeleteJob] = useState<boolean>(false)
   const [myJobs, setMyJobs] = useState<JobI[]>([]);
   const [auxId, setAuxId] = useState<string>("")
   const { loading } = useUI()
   const { getValue } = useStorage()

   const { errors, touched, getFieldProps, setFieldValue, handleSubmit, resetForm } = useFormik({
      initialValues,
      onSubmit: async (values: IExperienceForm | JobI, formikHelpers: FormikHelpers<IExperienceForm>) => {
         const { setFieldError, resetForm } = formikHelpers
         const { endDate, startDate } = values


         if (!!endDate && !!startDate) {
            if (new Date(endDate).getTime() <= new Date(startDate).getTime()) {
               setFieldError('endDate', "End Date must be alder than Start Date");
               return;
            }
         }

         loading.run()
         if (editMode) {
            const resp = await updateJob(auxId, values, getValue("token"))

            if (!resp.ok) {
               const errors = new Object(resp.errors)
               if (Object.keys(errors).length === 0) {
                  toast.error("Something get wrong, check logs !!!");
                  setEditMode( false )
               } else {
                  Object.keys(errors).forEach((err: string) => {
                     resp.errors && toast.error(resp.errors[err].msg);
                  })
               }
               loading.stop()
               return;
            }

         } else {

            const resp = await createJob(values, getValue("token"))

            if (!resp.ok) {
               const errors = new Object(resp.errors)
               if (Object.keys(errors).length === 0) {
                  toast.error("Something get wrong, check logs !!!");
               } else {
                  Object.keys(errors).forEach((err: string) => {
                     resp.errors && toast.error(resp.errors[err].msg);
                  })
               }
               loading.stop()
               return;
            }

         }

         resetForm()
         await fetchJobs()
         loading.stop()
         setShowModalExperienceForm(false);
         toast.success(editMode ? "jobs added successfully!!" : "jobs updated successfully!!");
         return
      },
      validationSchema
   })

   const handleEdit = (id: string) => {
      const auxJob = myJobs.filter(value => value.id === id).pop()

      if (!auxJob) {
         resetForm()
         setEditMode(false)
         return
      }

      setFieldValue("companyName", auxJob.companyName)
      setFieldValue("startDate", new Date(auxJob.startDate).toLocaleDateString('en-US'))
      setFieldValue("endDate", new Date(auxJob.endDate).toLocaleDateString('en-US'))
      setFieldValue("position", auxJob.position)
      setFieldValue("modeWork", auxJob.modeWork)
      setFieldValue("description", auxJob.description)
      setFieldValue("location", auxJob.location)

      setAuxId(id);

      setEditMode(true)
   }

   const handleEditJobWithModal = (id: string) => {
      handleEdit(id)
      setShowModalExperienceForm(true)
   }

   const handleModalDeleteJob = (id: string) => {
      setAuxId(id);
      setShowModalDeleteJob(true)
   }

   const handleDeleteJob = async () => {

      loading.run()

      const resp = await deleteJob(auxId, getValue("token"))
      
      if (!resp.ok) {
         const errors = new Object(resp.errors)
         if (Object.keys(errors).length === 0) {
            toast.error("Something get wrong, check logs !!!");
         } else {
            Object.keys(errors).forEach((err: string) => {
               resp.errors && toast.error(resp.errors[err].msg);
            })
         }
         return;
      }
      
      await fetchJobs();
      setShowModalDeleteJob(false)
      setTimeout( () => loading.stop(), 1000 )
   }

   const fetchJobs = async () => {
      loading.run()
      const { jobs = [] } = await getJobs();
      setMyJobs(jobs)
      setTimeout(() => loading.stop(), 1000)
   }

   useEffect(() => {
      fetchJobs()
   }, [])

   return (<div className='flex flex-row justify-center h-screen'>

      {
         showModalExperienceForm && <BaseModal>
            <ExperienceForm
               extraStyle={"flex"}
               handleSubmit={handleSubmit}
               handleCancel={() => { setShowModalExperienceForm(false); resetForm(); setAuxId(""); }}
               errors={errors}
               touched={touched}
               getFieldProps={getFieldProps}
            />
         </BaseModal>
      }

      {
         showModalDeleteJob && <BaseModal>
            <div className='flex flex-col mx-auto w-3/4'>
               <p className='text-center text-3xl font-semibold'> Are you sure that want to delete this job ? </p>
               <div className='flex flex-row justify-center gap-5 mt-10'>
                  <button
                     onClick={handleDeleteJob}
                     className='w-1/3 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'
                  >
                     Delete
                  </button>

                  <button
                     onClick={() => { setAuxId(""); setShowModalDeleteJob(false) }}
                     className='w-1/3 text-slate-700 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:ring-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'
                  >
                     Cancel
                  </button>
               </div>
            </div>
         </BaseModal>
      }

      <JobsList
         jobs={myJobs}
         handleAddModal={() => { setShowModalExperienceForm(true) }}
         handleDelete={handleModalDeleteJob}
         handleEdit={handleEdit}
         handleEditJobWithModal={handleEditJobWithModal}
      />

      <ExperienceForm
         extraStyle='mt-16 hidden lg:flex'
         handleSubmit={handleSubmit}
         handleCancel={() => resetForm()}
         errors={errors}
         touched={touched}
         getFieldProps={getFieldProps}
      />

   </div>)
}