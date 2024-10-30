'use client'

import type { JobI } from "@/interfaces";
import { useInView } from "react-intersection-observer";

interface paramsI {
   jobs: JobI[];
}

export default function Experience( { jobs }:paramsI ) {

   const { ref, inView } = useInView( {
      threshold: 0,
   } )

   const formatDate = ( fecha: string ): string => {
      const [ year, mounth, ..._ ] = fecha.slice( 0, 10 ).split( "-" )

      switch( mounth ){
         case "01":
            return `January ${ year }`
         case "02":
            return `Febrary ${ year }`
         case "03":
            return `Mars ${ year }`
         case "04":
            return `April ${ year }`
         case "05":
            return `May ${ year }`
         case "06":
            return `June ${ year }`
         case "07":
            return `July ${ year }`
         case "08":
            return `August ${ year }`
         case "09":
            return `September ${ year }`
         case "10":
            return `October ${ year }`
         case "11":
            return `November ${ year }`
         case "12":
            return `December ${ year }`
         default: 
            throw Error(" convertDate ")
      }
   }

   return (
      <div ref={ ref } className={`container p-16 lg:pt-28 mx-auto ${ inView ? "fadeUpCustom" : "" }`}  >
         <h4 className="text-center font-header text-4xl sm:text-5xl lg:text-6xl font-semibold text-blue-600 "> 
            Experience
         </h4>
         <div className="relative mx-auto mt-10  flex flex-col w-full lg:w-2/4 pr-1">

            {
               jobs.map( job => (
                  <div key={   job.id } className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
                     <div className="md:w-2/5">
                        <div className="">
                           <div className="flex justify-center md:justify-start">
                              <span className="text-gray-600 text-xl font-bold">
                                 { job.companyName }
                              </span>
                              <div className="relative  hidden w-full md:block" >
                                 <span className="absolute inset-x-0 top-4 h-0.5 -translate-y-1/2 transform bg-gray-300" />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="md:w-3/5 ">
                        <div className="relative flex md:pl-18">
                           <span className="absolute -left-2 top-2 hidden h-4 w-4 rounded-full border-2 border-gray-300  bg-white md:block"></span>
                           <div className="mt-1 flex">
                              <div className="md:-mt-1 pl-1 md:pl-8 lg:pl-12 ">
                                 <p className="block font-body font-bold text-gray-500 "> { formatDate( job.startDate )   } / { formatDate( job.endDate )  } </p>
                                 <p className="block pt-2 font-header text-xl font-bold text-blue-600"> { job.position } </p>  
                                 <span className="text-base  text-gray-500 capitalize">({ job.modeWork })</span>                                 
                                 <div className="pt-2">
                                    <p className="block font-body text-black">
                                       { job.description }
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ) )
            }

            {/* <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
               <div className="md:w-2/5">
                  <div className="">
                     <div className="flex justify-center md:justify-start">
                        <span className="text-gray-600 text-xl font-bold">
                           Inowu Development
                        </span>
                        <div className="relative  hidden w-full md:block" >
                           <span className="absolute inset-x-0 top-4 h-0.5 -translate-y-1/2 transform bg-gray-300" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="md:w-3/5 ">
                  <div className="relative flex md:pl-18">
                     <span className="absolute -left-2 top-2 hidden h-4 w-4 rounded-full border-2 border-gray-300  bg-white md:block"></span>
                     <div className="mt-1 flex">

                        <div className="md:-mt-1 pl-1 md:pl-8 lg:pl-12 ">
                           <p className="block font-body font-bold text-gray-500 "> November - 2023 / February - 2024 </p>
                           <p className="block pt-2 font-header text-xl font-bold text-blue-600">Full Stack Developer  </p><span className="text-base  text-gray-500">(Freelance)</span>
                           <div className="pt-2">
                              <p className="block font-body text-black">	
                                 Designed and developed REST API and created customizable/configurable modules for clients, file manager and control panel.
                                 Image/video management process.
                              </p>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}

            {/* <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
               <div className="md:w-2/5">
                  <div className="">
                     <div className="flex justify-center md:justify-start">
                        <span className="text-gray-600 text-xl font-bold">
                           Necodex
                        </span>
                        <div className="relative ml-3 hidden w-full md:block" >
                           <span className="absolute inset-x-0 top-4 h-0.5 -translate-y-1/2 transform bg-gray-300" />
                        </div>
                     </div>

                  </div>
               </div>

               <div className="md:w-3/5 ">
                  <div className="relative flex md:pl-18">
                     <span className="absolute -left-2 top-2 hidden h-4 w-4 rounded-full border-2 border-gray-300  bg-white md:block"></span>
                     <div className="mt-1 flex">

                        <div className="md:-mt-1 md:pl-10 ">
                           <p className="block font-body font-bold text-gray-500 "> February - 2022 / September - 2023 </p>
                           <p className="block pt-2 font-header text-xl font-bold text-blue-600">Full Stack Developer  </p>
                           <div className="pt-2">
                              <p className="block font-body text-black">
                                 Monitoring, maintenance, client integrations, creation of new modules and developed web application from scratch.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}

            {/* <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
               <div className="md:w-2/5">
                  <div className="">
                     <div className="flex justify-center md:justify-start">
                        <span className="text-gray-600 text-xl font-bold">
                           Quantumbit
                        </span>
                        <div className="relative ml-3 hidden w-full md:block" >
                           <span className="absolute inset-x-0 top-4 h-0.5 -translate-y-1/2 transform bg-gray-300" />
                        </div>
                     </div>

                  </div>
               </div>

               <div className="md:w-3/5 ">
                  <div className="relative flex md:pl-18">
                     <span className="absolute -left-2 top-2 hidden h-4 w-4 rounded-full border-2 border-gray-300  bg-white md:block"></span>
                     <div className="mt-1 flex">

                        <div className="md:-mt-1 md:pl-10 ">
                           <p className="block font-body font-bold text-gray-500 "> September - 2019 / May - 2020 </p>
                           <p className="block pt-2 font-header text-xl font-bold text-blue-600"> Software Engineer </p>
                           <div className="pt-2">
                              <p className="block font-body text-black">
                                 Fuel Control, Module in charge of maintaining a control and history of the invoicing made towards fuels.
                              </p>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}

            
            {/* <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
               <div className="md:w-2/5">
                  <div className="">
                     <div className="flex justify-center md:justify-start">
                        <span className="text-gray-600 text-xl font-bold">
                           AIISA Automation, S.A. de C.V.
                        </span>
                        <div className="relative hidden w-full md:block" >
                           <span className="absolute inset-x-0 top-4 h-0.5 -translate-y-1/2 transform bg-gray-300" />
                        </div>
                     </div>

                  </div>
               </div>

               <div className="md:w-3/5 ">
                  <div className="relative flex md:pl-18">
                     <span className="absolute -left-2 top-2 hidden h-4 w-4 rounded-full border-2 border-gray-300  bg-white md:block"></span>
                     <div className="mt-1 flex">

                        <div className="md:-mt-1 md:pl-10 ">
                           <p className="block font-body font-bold text-gray-500 "> January - 2018 / June - 2018 </p>
                           <p className="block pt-2 font-header text-xl font-bold text-blue-600"> Intern </p>
                           <div className="pt-2">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}

         </div>
      </div>
   );
}