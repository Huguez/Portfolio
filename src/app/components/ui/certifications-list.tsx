"use client"

import React from 'react'
import Image from "next/image"
import { IoIosAddCircle } from 'react-icons/io';
import type { certificateI } from '@/interfaces';
import { FaTrashAlt } from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';

interface CertificationsListProps {
   handleShowModal: () => void;
   certifications: certificateI[];
   handleDeleteCertification: (_:certificateI)=> void;
   handleEditCertification: (_:certificateI)=> void;
}

export const CertificationsList = ({ handleDeleteCertification, handleEditCertification, certifications, handleShowModal}: CertificationsListProps) => {
   
   return (
      <div className="w-full md:w-1/2 ">
         <div className="flex flex-row justify-between">
            <h3 className="font-semibold uppercase text-2xl lg:text-3xl text-center my-auto sm:text-left text-blue-600"> Certifications </h3>

            <button
               onClick={() => handleShowModal()}
               className="cursor-pointer font-bold text-green-600 bg-transparent hover:text-green-800 text-5xl">
               <IoIosAddCircle />
            </button>
         </div>
         <div className="overflow-y-auto h-80 p-4 flex flex-col gap-2 border rounded-lg">
            {
               certifications.map((cer) => (
                  <section key={`certification-item-${cer.title}`} className="flex flex-col lg:flex-row items-center p-0 bg-white border border-gray-200 rounded-lg shadow ">
                     <Image
                        src={cer.image}
                        alt={cer.link}
                        className="rounded-tl-lg rounded-tr-lg rounded-bl-none sm:rounded-bl-lg sm:rounded-tr-none w-full lg:w-2/12"
                        width={100}
                        height={100}
                     />
                     <div className="flex flex-col lg:flex-row justify-between px-4 m-auto w-full ">

                        <h5 className="mb-2 truncate lg:whitespace-normal sm:text-left text-sm lg:text-base font-semibold tracking-tight text-gray-900 "> {cer.title} </h5>

                        <div className="flex flex-row justify-center gap-5 my-5 lg:my-0 ">

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
   )
}
