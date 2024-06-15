'use client';
import placeholder from '/public/imgs/placeholder.jpg';
import Image from "next/image"
import Link from "next/link"

import { FaArrowRight } from "react-icons/fa";


export function ProjectCard() {

   return (
      <div className=" bg-white border border-gray-200 rounded-lg shadow-xl ">
         <Link href="/">
            <Image 
               src={ placeholder.src } 
               layout="fill2" 
               objectFit="contain" 
               className="rounded-t-lg w-full "
               alt={'Carlos Huguez'} 
               width={200}  
               height={200}
            />
         </Link>
         <div className="p-5">
            <Link href="/">
               <h5 className="mb-2 text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
            </Link>
            <p className="mb-3 font-normal text-sm md:text-base  text-justify text-gray-700 ">Lorem ipsum, Recusandae consequatur maxime consequatur voluptate at veritati...</p>
            <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
               Read more
               <FaArrowRight className="ml-3" />
            </Link>
         </div>
      </div>
   );
}