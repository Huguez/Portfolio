import Link from "next/link";
import { ProjectCard } from "..";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {

   const p = [ 1, 2, 3 ]

   return (
      <div className="p-16 lg:py-20 ">

         <p className="text-center font-general-medium text-2xl sm:text-4xl mb-6 ">
            Projects
         </p>
         <div className="grid grid-cols-1 max-w-md sm:max-w-full mx-auto sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-7 md:gap-10  px-4 md:px-16">
            { p.map( ( i: number ) => (
               <ProjectCard key={ i } />
            ) ) }
         </div>
         <div className=" flex justify-center mt-7">
            <Link href="/projects" className="inline-flex items-center px-3 py-2 text-sm font-medium md:text-base md:font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
               Check more projects
               <FaArrowRight className="ml-3" />
            </Link>
         </div>
      </div>
   );
}