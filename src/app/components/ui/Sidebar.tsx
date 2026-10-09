'use client';

import Link from "next/link";
import { FaRegUserCircle, FaHome, FaCode, FaMailBulk  } from "react-icons/fa";
import { DownloadCV, UploadCV } from "@/components"
import { useStorage, useUI } from "@/context";
import { useRouter } from "next/navigation";
import { logout } from "@/actions";

interface SidebarProps {
   authenticated: boolean;
}

export default function Sidebar({ authenticated }: SidebarProps) {
   const { showSidebar, handleSidebar } = useUI()

   const baseRoute = !authenticated ? "/" : "/admin"

   const { deleteValue } = useStorage()
   const router = useRouter()
   const { loading } = useUI();

   const handleLogout = async (): Promise<void> => {
      loading.run()
      await logout()
      handleSidebar( false )
      deleteValue("user")
      router.replace("/")
      setTimeout( () => {
         loading.stop()
      }, 2000 )
   }

   const handlePath = (href: string = ""): string => {
      const path = baseRoute + href
      return path
   }


   return <>
      {showSidebar && <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black opacity-30 " />}
      {showSidebar && <div className="fade-in fixed top-0 left-0 w-screen h-screen z-50 backdrop-filter backdrop-blur-sm" onClick={() => handleSidebar(!showSidebar)} />}

      <aside className={`fixed block md:hidden top-0 ${showSidebar ? "translate-x-0" : "translate-x-full"} right-0 z-50 w-64 h-screen transition-all `} aria-label="Sidebar">

         <div className="h-full px-3 py-4 overflow-y-auto bg-white ">

            <ul className="space-y-2 font-medium">
            
               <li className="flex justify-between mt-1">
                  <Link
                     href={handlePath()}
                     className="w-full flex items-center p-2 transition duration-300 font-bold text-zinc-600 hover:text-gray-100 rounded-lg hover:bg-blue-500"
                  >
                     <FaHome />
                     <span className="ms-3">Home</span>
                  </Link>
                  <button
                     onClick={() => handleSidebar(!showSidebar)}
                     className=" inline-flex items-center focus:outline-none focus:ring-2 text-blue-400 hover:bg-blue-100 focus:ring-blue-200 p-2 w-10 h-10 text-sm rounded-lg md:hidden"
                     data-collapse-toggle="navbar-default" type="button" aria-controls="navbar-default" aria-expanded="false"
                  >
                     <span className="sr-only">Open main menu</span>
                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                     </svg>
                  </button>
               </li>
            
            

               <li>
                  <Link
                     href={handlePath("aboutMe")}
                     className="flex items-center p-2 transition duration-300 font-bold text-zinc-600 hover:text-gray-100 rounded-lg  hover:bg-blue-500"
                  >
                     <FaRegUserCircle />
                     <span className="ms-3"> About Me  </span>
                  </Link>
               </li>

               <li>
                  <Link
                     href={handlePath("projects")}
                     className="flex items-center p-2 font-bold text-zinc-600 hover:text-gray-100 rounded-lg  hover:bg-blue-500   transition-all duration-300"
                  >
                     <FaCode className="mr-1" />
                     <span className="ms-3">Projects </span>
                  </Link>
               </li>

               {
                  !authenticated ?
                     <li>
                        <Link
                           href="contact"
                           className="flex items-center p-2 font-bold text-zinc-600 hover:text-gray-100 rounded-lg  hover:bg-blue-500   transition-all duration-300"
                        >
                           <FaMailBulk className="mr-1" />
                           Contact
                        </Link>
                     </li>
                     :
                     <li className="pt-1">
                        <span
                           onClick={handleLogout}
                           className="outline-none cursor-pointer rounded-lg py-2 px-4 bg-red-600 hover:bg-red-800 text-sm text-white font-bold transition-all duration-300"
                           >
                           Log out
                        </span>
                     </li>
               }
               
               <li className="pt-3">
                  {
                     !authenticated ? <DownloadCV /> : <UploadCV />
                  }
               </li>
            </ul>
         </div>
      </aside>
   </>
}