import Image from "next/image"
import Link from "next/link"
import placeholder from '/public/imgs/placeholder.jpg';
import { certificateI } from "@/interfaces";

interface Props {}

export function CertificateCard( { img, title, link }:Props & certificateI ) {

   return (
      <section  className="flex flex-col  sm:flex-row items-center p-0 bg-white border border-gray-200 rounded-lg m-5 shadow max-w-3xl">
         <Image 
            src={ img ?? placeholder.src } 
            className="rounded-tl-lg rounded-tr-lg rounded-bl-none  sm:rounded-bl-lg sm:rounded-tr-none w-full sm:w-1/2 m-0 p-0"
            alt={ img } 
            width={200}  
            height={200}
         />
         <div className="flex flex-col justify-between px-4 leading-normal w-full sm:w-1/2  py-3">
            <h5 title={ title } className="mb-2 truncate lg:whitespace-normal text-center sm:text-left text-sm md:text-base  font-semibold tracking-tight text-gray-900 ">{ title }</h5>
            {/* <p className="mb-3 font-normal text-justify sm:text-left text-sm md:text-base lg:text-xl text-gray-700 ">Here are the biggest enterprise.</p> */}
            <Link href={ link } className="text-base font-medium text-center sm:text-left text-blue-600 hover:underline">
               Go to Certificate
            </Link>
         </div>
      </section>
   );
}