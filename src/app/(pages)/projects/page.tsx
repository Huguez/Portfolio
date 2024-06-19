import { ProjectCard } from "@/components";
import { IoSearch } from "react-icons/io5";


export default function ProjectsPage() {

   const p = [ 1, 2, 3, 4, 5, 6, 7 ]

   return (
      <div className="container mx-auto">
         <section className="py-5 sm:py-10 mt-5 sm:mt-10">
            <h2 className="font-semibold uppercase lg:mb-4 text-xl md:text-3xl lg:text-4xl text-center text-blue-600"> My Projects </h2>
            <div className="mt-10 sm:mt-16">
               <p className=" mb-4 font-light text-base md:text-xl lg:text-2xl text-center text-gray-600"> Search projects by title </p>
               <div className="flex flex-col sm:flex-row justify-center sm:justify-between border-b  pb-3 mx-3 gap-3">
                  <div className="flex justify-between w-full sm:w-fit sm:gap-2">
                     <span className="hidden sm:block p-2.5 shadow-sm rounded-xl cursor-pointer bg-blue-100 "> 
                        <IoSearch  className="text-blue-600" />
                     </span>
                     <input className="px-4 w-full py-2 border border-gray-200  rounded-lg text-sm sm:text-md outline-none" id="search" name="search" type="search" placeholder="Search Projects" autoComplete="off" />
                  </div>
                  <select className=" px-2 sm:px-6 py-2 border rounded-lg text-sm sm:text-md bg-blue-50 text-blue-600">
                     <option className="text-gray-600 text-sm" > Default </option>
                     <option className="text-gray-600 text-sm" > Oldest </option>
                     <option className="text-gray-600 text-sm" > Newest </option>
                  </select>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-5 gap-5 sm:gap-10">
               {
                  p.map( ( i: number ) => (
                     <ProjectCard key={ i } />
                  ) )
               }
            </div>
         </section>
      </div>
   );
}