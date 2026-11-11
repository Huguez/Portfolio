"use client"

import { JobI } from '@/interfaces'
import React from 'react'

export const Job = ( job: JobI ) => {

   return (
      <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">

         <div className="md:w-2/5">
            
               <div className="flex justify-center md:justify-start">
                  <span className="text-gray-600 text-xl font-bold">
                     {job.companyName}
                  </span>
               </div>
            
         </div>

         <div className="md:w-3/5 ">
            <div className="relative flex md:pl-18">
               <span className="absolute -left-2 top-2 hidden h-4 w-4 rounded-full border-2 border-gray-300  bg-white md:block"></span>
               <div className="mt-1 flex">
                  <div className="md:-mt-1 pl-1 md:pl-8 lg:pl-12 ">
                     
                     <p className="block pt-2 font-header text-xl font-bold text-blue-600"> {job.position} </p>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
