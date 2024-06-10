import Image from "next/image"
import Link from "next/link"
import { MdOutlinePhoneAndroid, MdEmail, MdPlace } from "react-icons/md";
import { FaRegUserCircle, FaLinkedin, FaGithub, FaInstagram, FaHome, FaCode } from "react-icons/fa";



const Points = () => (
   <svg className="absolute top-0 right-0" width="61" height="77" viewBox="0 0 61 77" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g opacity="0.5">
      <circle cx="45.0001" cy="1.66667" r="1.66667" transform="rotate(90 45.0001 1.66667)" fill="white"></circle>
      <circle cx="16.0001" cy="1.66667" r="1.66667" transform="rotate(90 16.0001 1.66667)" fill="white"></circle>
      <circle cx="59.0001" cy="1.66667" r="1.66667" transform="rotate(90 59.0001 1.66667)" fill="white"></circle>
      <circle cx="30.6668" cy="1.66667" r="1.66667" transform="rotate(90 30.6668 1.66667)" fill="white"></circle>
      <circle cx="1.66683" cy="1.66667" r="1.66667" transform="rotate(90 1.66683 1.66667)" fill="white"></circle>
      <circle cx="45.0001" cy="16.3332" r="1.66667" transform="rotate(90 45.0001 16.3332)" fill="white"></circle>
      <circle cx="16.0001" cy="16.3332" r="1.66667" transform="rotate(90 16.0001 16.3332)" fill="white"></circle>
      <circle cx="59.0001" cy="16.3332" r="1.66667" transform="rotate(90 59.0001 16.3332)" fill="white"></circle>
      <circle cx="30.6668" cy="16.3332" r="1.66667" transform="rotate(90 30.6668 16.3332)" fill="white"></circle>
      <circle cx="1.66683" cy="16.3332" r="1.66667" transform="rotate(90 1.66683 16.3332)" fill="white"></circle>
      <circle cx="45.0001" cy="31.0002" r="1.66667" transform="rotate(90 45.0001 31.0002)" fill="white"></circle>
      <circle cx="45.0001" cy="74.6667" r="1.66667" transform="rotate(90 45.0001 74.6667)" fill="white"></circle>
      <circle cx="16.0001" cy="31.0002" r="1.66667" transform="rotate(90 16.0001 31.0002)" fill="white"></circle>
      <circle cx="16.0001" cy="74.6667" r="1.66667" transform="rotate(90 16.0001 74.6667)" fill="white"></circle>
      <circle cx="59.0001" cy="31.0002" r="1.66667" transform="rotate(90 59.0001 31.0002)" fill="white"></circle>
      <circle cx="59.0001" cy="74.6667" r="1.66667" transform="rotate(90 59.0001 74.6667)" fill="white"></circle>
      <circle cx="30.6668" cy="31.0002" r="1.66667" transform="rotate(90 30.6668 31.0002)" fill="white"></circle>
      <circle cx="30.6668" cy="74.6667" r="1.66667" transform="rotate(90 30.6668 74.6667)" fill="white"></circle>
      <circle cx="1.66683" cy="31.0002" r="1.66667" transform="rotate(90 1.66683 31.0002)" fill="white"></circle>
      <circle cx="1.66683" cy="74.6667" r="1.66667" transform="rotate(90 1.66683 74.6667)" fill="white"></circle>
      <circle cx="45.0001" cy="45.6667" r="1.66667" transform="rotate(90 45.0001 45.6667)" fill="white"></circle>
      <circle cx="16.0001" cy="45.6667" r="1.66667" transform="rotate(90 16.0001 45.6667)" fill="white"></circle>
      <circle cx="59.0001" cy="45.6667" r="1.66667" transform="rotate(90 59.0001 45.6667)" fill="white"></circle>
      <circle cx="30.6668" cy="45.6667" r="1.66667" transform="rotate(90 30.6668 45.6667)" fill="white"></circle>
      <circle cx="1.66683" cy="45.6667" r="1.66667" transform="rotate(90 1.66683 45.6667)" fill="white"></circle>
      <circle cx="45.0001" cy="60.3332" r="1.66667" transform="rotate(90 45.0001 60.3332)" fill="white"></circle>
      <circle cx="16.0001" cy="60.3332" r="1.66667" transform="rotate(90 16.0001 60.3332)" fill="white"></circle>
      <circle cx="59.0001" cy="60.3332" r="1.66667" transform="rotate(90 59.0001 60.3332)" fill="white"></circle>
      <circle cx="30.6668" cy="60.3332" r="1.66667" transform="rotate(90 30.6668 60.3332)" fill="white"></circle>
      <circle cx="1.66683" cy="60.3332" r="1.66667" transform="rotate(90 1.66683 60.3332)" fill="white"></circle>
   </g>
</svg>
) 

const Circle = () => (
   <svg className="absolute bottom-0 left-0" width="143" height="138" viewBox="0 0 143 138" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="118" r="101" stroke="url(#paint0_linear_52:83)" strokeWidth="34"></circle>
      <defs>
         <linearGradient id="paint0_linear_52:83" x1="-12.7969" y1="-37.3359" x2="99.2109" y2="173.773" gradientUnits="userSpaceOnUse">
         <stop stopColor="#4A6CF7"></stop>
         <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
         </linearGradient>
      </defs>
   </svg>
)

export default function Footer() {
   return (
      <footer className="max-w-screen flex flex-wrap flex-col bg-gradient-to-b from-blue-900 to-gray-900 p-5 relative">

         <Points />

         <Circle />

         <div className="flex justify-center  sm:mt-16 sm:mb-2 ">

            <div className="w-full grid place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-slate-200 px-2 pb-4">

               <div className="w-full mb-6 sm:mb-1 ">
                  <Link href="/" className="flex items-center justify-center lg:justify-start">
                        <Image src="/imgs/H-black.jpg" className="rounded-lg me-5" alt="Logo Carlos Huguez's portfolio" width={ 75 } height={ 75 } />
                        <p className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                           Let's Talk!
                        </p>
                  </Link>
               </div>

               <div className="w-full sm:mb-1 mb-6 ">
                  <p className="text-3xl text-center lg:text-start font-bold mb-3"> Contact Info </p>
                  <ul className="flex flex-col gap-y-6 ">
                     <li className="text-lg md:text-base"> 
                        <Link href={"mailto:carlos.huguez@gmail.com"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-600 "> 
                           <MdEmail className="mr-1" />
                           carlos.huguez@gmail.com 
                        </Link>
                     </li>
                     <li className="text-lg md:text-base">
                        <Link href={"tel:+52662-329-4817"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-600 "> 
                           <MdOutlinePhoneAndroid className="mr-1"  />
                           (+52) 662-329-4817 
                        </Link> 
                     </li>
                     <li className="text-lg md:text-base"> 
                        <Link href={"https://www.google.com/maps/place/Sonora/@29.8539204,-113.4085684,7z/data=!4m6!3m5!1s0x86982969e74dd20f:0xcd56ff1afcbbe374!8m2!3d29.2972247!4d-110.3308814!16zL20vMGxkZmY?entry=ttu"} target="_blank" className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-600 "> 
                           <MdPlace className="mr-1"  />
                           Sonora, Mexico 
                        </Link> 
                     </li>
                  </ul>
               </div>

               <div className="w-full sm:mb-1 mb-6 sm:mt-5 md:mt-0">
                  <p className="text-3xl text-center lg:text-start font-bold mb-3">Network</p>
                  <ul className="flex flex-col gap-y-5 ">
                     <li className="text-lg md:text-base"> 
                        <Link href={"https://www.linkedin.com/in/carlos-huguez/"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-500 " target="_blank">  
                           <FaLinkedin className="mr-1"  />
                           LinkedIn
                        </Link>
                     </li>
                     <li className="text-lg md:text-base"> 
                        <Link href={"https://github.com/huguez"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-500 " target="_blank">
                           <FaGithub className="mr-1"  />
                           Github
                        </Link>
                     </li>
                     <li className="text-lg md:text-base">
                        <Link href={"https://www.instagram.com/__huguez/"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-500 " target="_blank">  
                           <FaInstagram className="mr-1" />
                           Instagram 
                        </Link>
                     </li>
                  </ul>
               </div>

               <div className="w-full sm:mb-1 sm:mt-5 md:mt-0 ">
                  <p className="text-3xl text-center lg:text-start font-bold mb-3">Quick Links</p>
                  <ul className="flex flex-col gap-y-5 text-center lg:text-start">
                     <li className="text-lg md:text-base " > 
                        <Link href={"/"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-500 ">  
                           <FaHome className="mr-1" />
                           Home 
                        </Link>
                     </li>
                     <li className="text-lg md:text-base " > 
                        <Link href={"/"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-500 ">  
                           <FaRegUserCircle className="mr-1" />
                           About Me 
                        </Link>
                     </li>
                     <li className="text-lg md:text-base " > 
                        <Link href={"/"} className="flex flex-row items-center justify-center lg:justify-start text-zinc-300  hover:text-blue-500 ">  
                           <FaCode className="mr-1" />
                           Projects 
                        </Link>
                     </li>
                  </ul>
               </div>
               
            </div>

         </div>
         
         <hr className="bg-slate-400 rounded-lg my-5 mx-5" />

         <div className="flex flex-wrap flex-row justify-center">
            <p className="text-slate-200 " > Carlos Huguez Portafolio © { new Date().getFullYear() }. </p>
         </div>
      </footer>
   );
}