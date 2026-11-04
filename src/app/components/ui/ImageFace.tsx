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
        className="w-full max-w-[400px] min-w-0 mx-auto border-2 border-dotted border-slate-300 hover:border-slate-500 hover:bg-slate-100 rounded-lg overflow-hidden cursor-pointer transition-colors"
      >
         <Image
            src={ url }
             className="block w-full h-auto object-contain rounded-lg"
            alt={ url }
            width={400}
            height={100}
         />
      </div>
   )
}
