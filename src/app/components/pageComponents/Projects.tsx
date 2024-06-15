import { ProjectCard } from "..";

export default function Projects() {

   const p = [ 1, 2, 3, 4, 5 ]

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
      </div>
   );
}