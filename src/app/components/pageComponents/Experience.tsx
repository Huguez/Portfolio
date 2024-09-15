'use client'

import { useInView } from "react-intersection-observer";

export default function Experience() {

   const { ref, inView } = useInView({
      threshold: 0,
   })

   return (
      <div ref={ ref } className={`container p-16 lg:pt-28 mx-auto ${ inView ? "fadeUpCustom" : "" }`}  >
         <h4 className="text-center font-header text-4xl sm:text-5xl lg:text-6xl font-semibold text-blue-600 "> 
            Experience
         </h4>
         <div className="relative mx-auto mt-10  flex flex-col w-full lg:w-2/4 pr-1">
         
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
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
            </div>

            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
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
            </div>

            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
               
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
            </div>

            
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