import Link from 'next/link';
import desktop5 from '/public/imgs/Desktop_5.jpg';
import me from '/public/me/Carlos_Huguez.jpeg';

import { Metadata } from "next/types";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const metadata: Metadata = {
  title: "Carlos Huguez's Portfolio",
  description: "Portfolio where show my abilities, capacities, and experience.",
};

export default function Home() {
	return (
		<main className="bg-gray-50	min-h-screen">
			
			<div className=" relative bg-cover bg-center bg-no-repeat py-16 lg:py-32" style={{ backgroundImage: `url(${ desktop5.src })`, }}>
				
				<div className='absolute inset-0 z-20 opacity-85 bg-gradient-to-r from-blue-700 to-cyan-500 bg-cover bg-center bg-no-repeat' />

				<div className='  relative z-30 m-auto'>
					<div className='flex flex-col lg:flex-row justify-center items-center '>
						
						<div className='bg-cover bg-center bg-no-repeat h-44 w-44  sm:h-48 sm:w-48  md:h-64 md:w-64 rounded-full border-2 border-blue-700  shadow-xl' style={{ backgroundImage: `url(${ me.src })`, }} >
						</div>

						<div className='mt-2 md:pl-8 md:mt-0 '>
							<h2 className='text-white text-center sm:text-left font-header text-lg  md:text-3xl xl:text-4xl'> Hi, I'm Carlos Huguez !! </h2>
							<div className='flex flex-row justify-center items-center'>
								<p className='text-white text-center font-header text-base md:text-2xl  xl:text-3xl'>
									Let's Connect! 
								</p>
								<ul className="ml-2 flex flex-row gap-x-2 ">
									<li className="text-lg "> 
										<Link href={"mailto:carlos.huguez@gmail.com"} className="flex flex-row items-center justify-center lg:justify-start text-white   " target="_blank"> 
											<MdEmail className="mr-1 md:text-2xl"  />
										</Link>
									</li>
									<li className="text-lg "> 
										<Link href={"https://www.linkedin.com/in/carlos-huguez/"} className="flex flex-row items-center justify-center lg:justify-start text-white   " target="_blank">  
											<FaLinkedin className="mr-1 md:text-2xl"  />
										</Link>
									</li>
									<li className="text-lg "> 
										<Link href={"https://github.com/huguez"} className="flex flex-row items-center justify-center lg:justify-start text-white   " target="_blank">
											<FaGithub className="mr-1 md:text-2xl"  />
										</Link>
									</li>
									<li className="text-lg ">
										<Link href={"https://www.instagram.com/__huguez/"} className="flex flex-row items-center justify-center lg:justify-start text-white   " target="_blank">  
											<FaInstagram className="mr-1 md:text-2xl" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

      {/* WHO AM I? */}
      
      {/* Projects */}
      
      {/* experience */}
    </main>
  );
}
