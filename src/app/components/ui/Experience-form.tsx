'use client'

import React from 'react'
import { IExperienceForm } from '@/interfaces';
import { FieldConfig, FieldInputProps, FormikErrors, FormikTouched } from 'formik';

interface ExperienceFormProps {
  handleSubmit: () => void;
  handleCancel: () => void;
  errors: FormikErrors<IExperienceForm>;
  touched: FormikTouched<IExperienceForm>
  getFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>
  extraStyle: string;
}

export const ExperienceForm = ({ handleSubmit, handleCancel, getFieldProps, errors, touched, extraStyle }: ExperienceFormProps) => {
  return (
    <form onSubmit={handleSubmit} className={`${extraStyle} flex-col gap-5 m-5`}>

      <div className='flex flex-row gap-5 w-full'>
        <div className="flex flex-col gap-3 w-full">
          <input type="text" {...getFieldProps("companyName")}
            className={`${errors.companyName && touched.companyName ?
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
              "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "}  rounded-lg block w-full p-2.5 `}
            placeholder="Company Name" autoComplete="off"
          />
          {errors.companyName && touched.companyName && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.companyName}</p>}
        </div>
        <div className="flex flex-col gap-3 w-full">
          <input type="text" {...getFieldProps("location")}
            className={`${errors.location && touched.location ?
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
              "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "}  rounded-lg block w-full p-2.5 `}
            placeholder="Company Name" autoComplete="off"
          />
          {errors.location && touched.location && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.location}</p>}
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-5 w-full'>

        <div className="flex flex-col gap-3 w-full">
          <input type="text" {...getFieldProps("startDate")}
            className={`${errors.startDate && touched.startDate ?
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
              "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "} appearance-none rounded-lg block w-full p-2.5 `}
            placeholder="Start Date" autoComplete="off"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          {errors.startDate && touched.startDate && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.startDate}</p>}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <input type="text" {...getFieldProps("endDate")}
            className={`${errors.endDate && touched.endDate ?
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
              "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "}  rounded-lg block w-full p-2.5 `}
            placeholder="End Date" autoComplete="off"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          {errors.endDate && touched.endDate && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.endDate}</p>}
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-5 w-full'>
        <div className="flex flex-col gap-3 w-full">
          <select
            {...getFieldProps("modeWork")}
            className={`${errors.modeWork && touched.modeWork ?
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
              "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "}  rounded-lg block w-full p-2.5 `}
          >
            <option value="">Choose a mode work</option>
            <option value="remote">Remote</option>
            <option value="on-site">On-Site</option>
            <option value="hybrid">Hybrid</option>
            <option value="freelance">Freelance</option>
          </select>
          {errors.modeWork && touched.modeWork && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.modeWork}</p>}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <input type="text" {...getFieldProps("position")}
            className={`${errors.position && touched.position ?
              "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
              "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "}  rounded-lg block w-full p-2.5 `}
            placeholder="Position" autoComplete="off"
          />
          {errors.position && touched.position && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.position}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <textarea rows={4} {...getFieldProps("description")}
          className={`${errors.description && touched.description ?
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" :
            "text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "}  rounded-lg block w-full p-2.5 `}
          placeholder="Description" autoComplete="off"
        >
        </textarea>
        {errors.description && touched.description && <p className="mt-2 text-sm text-red-600 "><span className="font-medium">Oops!</span> {errors.description}</p>}
      </div>

      <div className='flex flex-col md:flex-row gap-5 w-full'>

        <button
          type='submit'
          className="w-full sm:mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          Save
        </button>

        <button
          type='button'
          onClick={handleCancel}
          className="w-full sm:mx-auto text-slate-700 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:ring-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          cancel
        </button>

      </div>

    </form>
  )
}
