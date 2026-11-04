"use client"

import React, { ChangeEvent } from 'react'
import { SkillRating } from './SkillRating';
import type { Skill, Skills } from '@/interfaces';
import { FaRegSave, FaTrashAlt } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { LuPencil } from 'react-icons/lu';

interface SkillsListProps {
   skills: Skills;
   handleAddSkill: () => void;
   handleChangeSkills: (index: number, e: ChangeEvent<HTMLInputElement>) => void;
   handleSaveSkill: (index: number, e: Skill) => void;
   handleDeleteSkill: (index: number) => void;
   handleEditSkill: (index: number) => void;
}

export const SkillsList = ({ skills, handleAddSkill, handleChangeSkills, handleSaveSkill, handleDeleteSkill, handleEditSkill }: SkillsListProps) => {

   return (
      <div className='w-full md:w-1/2'>
         <div className='flex flex-row justify-between'>
            <h3 className="font-semibold uppercase text-2xl lg:text-3xl text-center my-auto sm:text-left text-blue-600"> Skills </h3>

            <button
               onClick={() => handleAddSkill()}
               className="cursor-pointer font-bold text-green-600 bg-transparent hover:text-green-800 text-5xl">
               <IoIosAddCircle />
            </button>
         </div>
         <div className="overflow-y-auto h-80 p-4 border rounded-lg">
            {
               skills.map((skill, index) => <section key={`skill-${index}`}>
                  { skill.edit ? <div className='flex flex-col lg:flex-row justify-between gap-5'>

                     <div className='flex flex-row gap-3'>
                        <input type="text"
                           onChange={(e) => handleChangeSkills(index, e)}
                           value={skills[index].name}
                           name='name'
                           className={"text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-full lg:w-2/3 p-2"}
                           placeholder="skill" autoComplete="off"
                        />

                        <input type="number"
                           step={0.5}
                           min={0.5}
                           max={5}
                           onChange={(e) => handleChangeSkills(index, e)}
                           value={skills[index].stars}
                           name='starts'
                           className={"text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg block w-12 p-2"}
                           placeholder="Stars" autoComplete="off"
                        />
                     </div>
                     <div className='flex flex-row justify-between'>
                        <SkillRating name={""} rating={skill.stars} />

                        <div className='flex flex-row justify-evenly w-20'>
                           <button title="Save" className="text-2xl text-green-500" onClick={() => handleSaveSkill(index, skill)}>
                              <FaRegSave />
                           </button>

                           <button title="Delete" className="text-2xl text-red-500" onClick={() => handleDeleteSkill(index)}>
                              <FaTrashAlt />
                           </button>
                        </div>
                     </div>
                  </div> : <div className='flex flex-row '>
                     <div className='gap-3 w-full'>
                        <SkillRating name={skill.name} rating={skill.stars} />
                     </div>
                     <div className='flex flex-row sm:justify-evenly w-20'>
                        <button title="Edit" className="text-2xl text-blue-500" onClick={() => handleEditSkill(index)}>
                           <LuPencil />
                        </button>

                        <button title="Delete" className="text-2xl text-red-500" onClick={() => handleDeleteSkill(index)}>
                           <FaTrashAlt />
                        </button>
                     </div>
                  </div>
                  }
               </section>)
            }
         </div>
      </div>
   )
}
