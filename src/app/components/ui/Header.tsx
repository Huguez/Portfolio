'use client';
import Image from "next/image"
import Link from "next/link";
import { ButtonCV } from "@/components"
import { useUI } from "@/context";


export default function Header() {
   const { showSidebar, handleSidebar } = useUI()
   return (
      <nav className=" bg-white">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
               <Image src="/imgs/H-black.jpg" className="rounded-lg" alt="Logo Carlos Huguez's portfolio" width={ 50 } height={ 50 } />
               <span className="self-center text-3xl whitespace-nowrap font-bold text-zinc-600">Portfolio</span>
            </Link>
            <button onClick={ () => handleSidebar( !showSidebar ) }  className="inline-flex items-center focus:outline-none focus:ring-2 text-blue-400 hover:bg-blue-100 focus:ring-blue-200 p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden " data-collapse-toggle="navbar-default" type="button"  aria-controls="navbar-default" aria-expanded="false">
               <span className="sr-only">Open main menu</span>
               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
               </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
               <ul className=" flex flex-row p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:mt-0  ">
                  <li>
                     <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 hover:text-zinc-600 font-bold " aria-current="page">Home</a>
                  </li>
                  <li>
                     <a href="#" className="block py-2 px-3 md:p-0  hover:text-zinc-600 font-bold	text-gray-900 transition-all	duration-300">About Me</a>
                  </li>
                  <li>
                     <a href="#" className="block py-2 px-3 md:p-0  hover:text-zinc-600 font-bold	text-gray-900 transition-all	duration-300">Projects</a>
                  </li>
                  <li>
                     <a href="#" className="block py-2 px-3 md:p-0 rounded  hover:text-zinc-600 font-bold text-gray-900 transition-all	duration-300 ">Contact</a>
                  </li>
                  <li>
                     <ButtonCV />
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
