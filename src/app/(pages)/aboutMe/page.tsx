
import type { Metadata } from "next";
import me from "/public/me/Carlos_Huguez.jpeg"; 
import { CertificateCard } from "@/components";
import { getAboutMe, getCertifications } from "@/actions";


export const metadata: Metadata = {
   title: "About Me | Carlos Huguez&apos;s Portfolio",
   description: "Carlos Huguez&apos;s Portfolio.",
};

export default async function AboutMePage() {

   const { certifications } = await getCertifications()

   const { image, description } = await getAboutMe()

   return (
      <div className="container mx-auto pt-0 sm:py-16 fadeUpCustom">
      
         <div className="block sm:flex sm:justify-between sm:gap-10 mt-0" >
            <div className="w-full sm:w-2/6 mb-7 sm:mb-0 ">
               {
                  image &&
                  <div className="bg-cover bg-center bg-no-repeat mx-auto h-48 w-48 md:h-64 md:w-64  lg:h-80 lg:w-80 rounded-lg" style={{ backgroundImage: `url(${ image })` }} ></div>
               }
            </div>
            <div className=" sm:mx-auto w-full sm:w-4/6  sm:pr-5 ">
               <h2 className="font-semibold uppercase md:mb-4 text-xl md:text-3xl lg:text-4xl text-center sm:text-left text-blue-600"> About Me </h2>
               {
                  description && 
                  description.map( ( row, index ) => (
                     <p key={ `AboutMe-description-${ index }`}  className="mb-4 px-5 sm:px-0 text-gray-700 text-justify text-base sm:text-md md:text-lg"> 
                        { row }
                     </p> )
                  )
               }
            </div>
         </div>

         <hr className="bg-gray-200 h-0.5 w-8/12 mx-auto my-10" />

         { certifications && <div className="block sm:gap-10 mt-0">
            <h3 className="font-semibold uppercase lg:ml-10 md:mb-4 text-lg md:text-2xl lg:text-3xl text-center sm:text-left text-blue-600"> Certifications </h3>
            <div className=" grid grid-cols-1 md:grid-cols-2  "> 
               {
                  certifications.map( ( cer, index: number ) => (

                     <CertificateCard key={index} { ...cer } />

                  ) )
               }
            </div>
         </div> }
      </div>
   );
}