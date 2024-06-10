'use client';

import Image from "next/image"

import Link from "next/link";

export default function Header() {
   return (
      <nav className=" bg-white">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
               <Image src="/imgs/H-black.jpg" className="rounded-lg" alt="Logo Carlos Huguez's portfolio" width={ 50 } height={ 50 } />
               <span className="self-center text-3xl whitespace-nowrap font-bold text-zinc-600">Portfolio</span>
            </Link>
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" data-collapse-toggle="navbar-default" type="button"  aria-controls="navbar-default" aria-expanded="false">
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
                     <a href="#" className="outline-none font-bold text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm py-2 px-4  ">
                        Download CV
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
