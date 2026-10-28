"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image"

import placeholder from '/public/imgs/placeholder.jpg';

interface ImageFaceProps {
   file?: File;
   img?: string;
   onClick: () => void;
}

export const ImageFace = ({ img, file, onClick }: ImageFaceProps) => {

   const [url, setUrl] = useState<string>( placeholder.src )

   const getImageUrl = (): void => {
      if (img) {
         setUrl(img)
      } else {
         if (file) {
            setUrl(URL.createObjectURL(file));
         }
      }
   }

   useEffect(() => {
      getImageUrl()
   }, [])

   return (
      <div
         onClick={onClick}
         className="border-dotted border-2 border-slate-50 hover:border-slate-500 hover:bg-slate-400 rounded-lg mx-auto flex align-middle max-w-max"
      >
         <Image
            src={ url }
            className="rounded-lg w-full cursor-pointer mx-auto flex align-middle"
            alt={'Carlos Huguez'}
            width={400}
            height={500}
         />
      </div>
   )
}
