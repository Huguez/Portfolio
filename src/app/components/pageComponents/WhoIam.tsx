'use client'

import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";


export default function WhoIam() {

	const { ref, inView } = useInView({
      threshold: 0,
   })

	return <>
		<div ref={ ref } className={`bg-gray-50 p-16 lg:pt-28 ${ inView ? "fadeUpCustom" : "" }  `}>
			<h3  className='font-header font-semibold uppercase text-2xl sm:text-4xl lg:text-6xl text-center text-blue-600'> WHO AM I? </h3>
			<p className='text-center text-gray-800 text-base sm:text-xl lg:text-2xl'> 
				I&apos;m a Web Application Developer
			</p>
			<div className="container mx-auto pt-5 flex flex-col md:flex-row gap-y-6 justify-center items-start ">
				<div className='px-5 w-full md:w-1/2 '>
					<p className='md:container mx-auto leading-base md:leading-loose text-sm md:text-base text-gray-500 text-justify'>
						Hi,
						I&apos;m a competent skilled person, also a web developer who likes to learn new technologies and  
						take courses online to keep growing my knowledge as a full-stack developer.
						
						I&apos;ve been accumulating experiences in frontend development, using React.js and Next.js to create user interfaces. I also, 
						have experience in: Backend development, wrap up Node.js, Express.js, and Koa.js to build server-side applications.
					</p>
				</div>	
				<div className='px-5 w-full md:w-1/2 '>
					<div className='flex items-center justify-between'>
						<h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> React.js</h4>
						<div className='flex text-2xl sm:text-4xl text-amber-400'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt />
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> Next.js </h4>
						<div className='flex text-2xl sm:text-4xl text-amber-400'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt  />
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> Node.js </h4>
						<div className='flex text-2xl sm:text-4xl text-amber-400'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaRegStar />
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> MongoDB </h4>
						<div className='flex text-2xl sm:text-4xl text-amber-400'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt />
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> Postgres </h4>
						<div className='flex text-2xl sm:text-4xl text-amber-400'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt/>
							<FaRegStar  />
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}