'use client'

import React from 'react'
import { env } from "@/config/env-var";

const baseUrl = env.NEXT_PUBLIC_BASEURL

export const UploadCV = () => {

   const handleUploadCV = () => {
      console.log( baseUrl );
   }

   return (
      <span
         onClick={handleUploadCV}
         className="outline-none cursor-pointer	 font-bold text-white bg-green-600 hover:bg-green-800 rounded-lg text-sm py-2 px-4"
      >
         Upload CV
      </span>
   )
}
