'use client';

import Link from "next/link";
import { FaRegUserCircle, FaHome, FaCode } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ButtonCV } from "@/components"
import { useUI } from "@/context";

export default function Sidebar() {
   const { showSidebar, handleSidebar } = useUI()

   return <>
      <aside className={`fixed block md:hidden top-0 ${ showSidebar ? "translate-x-0" : "translate-x-full"  } right-0 z-40 w-64 h-screen transition-all `} aria-label="Sidebar">
         
         <div className="h-full px-3 py-4 overflow-y-auto bg-white ">
            
            <ul className="space-y-2 font-medium">
               <li className="flex justify-between mt-1"> 
                  <Link href="/" className="w-full flex items-center p-2 transition duration-300 font-bold text-zinc-600 hover:text-gray-100 rounded-lg  hover:bg-blue-500  group">
                     <FaHome />
                     <span className="ms-3">Home</span>
                  </Link>
                  <button onClick={ () => handleSidebar( !showSidebar ) }  className=" inline-flex items-center focus:outline-none focus:ring-2 text-blue-400 hover:bg-blue-100 focus:ring-blue-200 p-2 w-10 h-10 text-sm rounded-lg md:hidden"  data-collapse-toggle="navbar-default" type="button"  aria-controls="navbar-default" aria-expanded="false">
                     <span className="sr-only">Open main menu</span>
                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                     </svg>
                  </button>
               </li>
               <li> 
                  <Link href="aboutMe" className="flex items-center p-2 transition duration-300 font-bold text-zinc-600 hover:text-gray-100 rounded-lg  hover:bg-blue-500  group">
                     <FaRegUserCircle />
                     <span className="ms-3"> About Me  </span>
                  </Link>
               </li>
               <li> 
                  <Link href="/" className="flex items-center p-2 transition duration-300 font-bold text-zinc-600 hover:text-gray-100 rounded-lg  hover:bg-blue-500  group">
                     <FaCode className="mr-1" />
                     <span className="ms-3">Projects </span>
                  </Link>
               </li>
               <li> 
                  <Link href="contact" className="flex items-center p-2 transition duration-300 font-bold text-zinc-600 hover:text-gray-100 rounded-lg  hover:bg-blue-500  group">
                     <IoMdMail  />
                     <span className="ms-3">Contact</span>
                  </Link>
               </li>
               <li> 
                  <ButtonCV />
               </li>
            </ul>
         </div>
      </aside>

   </>
}