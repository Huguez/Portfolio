"use client"

import { JobI } from '@/interfaces';
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { LuPencil } from 'react-icons/lu';

interface JobsListProps {
   jobs: JobI[];
   handleEdit: ( id: string ) => void;
   handleDelete: ( id: string ) => void;
   handleEditJobWithModal: (id: string) => void;
   handleAddModal: () => void;
}

export const JobsList = ({ jobs, handleEdit, handleEditJobWithModal, handleDelete, handleAddModal }: JobsListProps) => {

   return (<div className='relative overflow-x-auto py-5'>

      <div className='flex flex-row justify-between px-5 mb-2'>
         <p className='text-blue-600 font-bold text-xl align-middle'>
            Experience
         </p>

         <button 
            onClick={handleAddModal}
            className="block lg:hidden cursor-pointer font-bold text-green-600 bg-transparent hover:text-green-800 text-5xl">
            <IoIosAddCircle />
         </button>
      </div>

      <table className='w-full text-sm text-left shadow-lg rounded-lg'>
         <thead className="text-sm text-body bg-neutral-secondary-soft border-b border-default">
            <tr className='bg-gray-100'>
               <th scope="col" className="px-6 py-3 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Company Name
               </th>
               <th scope="col" className="px-6 py-3 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Position
               </th>
               <th scope="col" className="px-6 py-3 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Actions
               </th>
            </tr>
         </thead>
         <tbody className='bg-white'>
            {
               jobs && jobs.map((job) => (
                  <tr key={`job-list-${job.companyName}`} className="bg-neutral-primary border-b border-default">
                     <td scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                        {job.companyName}
                     </td>
                     <td className="px-6 py-4">
                        {job.position}
                     </td>
                     <td className="px-6 py-4 align-middle">
                        <div className='flex flex-row justify-self-center items-center gap-3'>

                           <button title="Edit" className="lg:block hidden text-2xl text-blue-500 " onClick={() => handleEdit(job.id)}>
                              <LuPencil />
                           </button>

                           <button title="Edit" className="block lg:hidden text-2xl text-blue-500 " onClick={() => handleEditJobWithModal(job.id) }>
                              <LuPencil />
                           </button>
                           
                           <button title="Delete" className="text-xl text-red-500 " onClick={() => handleDelete(job.id)}>
                              <FaTrashAlt />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))
            }
         </tbody>
      </table>
   </div>)
}
