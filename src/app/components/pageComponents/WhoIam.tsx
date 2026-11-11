'use client'

import { Skills } from "@/interfaces";
import { useInView } from "react-intersection-observer";
import { SkillRating } from "../ui/SkillRating";

interface WhoIamProps {
	skills: Skills;
}

export const WhoIam = ({ skills }: WhoIamProps) => {

	const { ref, inView } = useInView({
		threshold: 0,
	})

	return <>
		<div ref={ref} className={`bg-gray-50 p-16 lg:pt-28 ${inView ? "fade-up-custom" : ""}  `}>
			<h3 className='font-header font-semibold uppercase text-2xl sm:text-4xl lg:text-6xl text-center text-blue-600'> WHO AM I? </h3>
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
					{
						skills && skills.map((skill, index) => (
							<div key={`skill-${ skill.name }-${ skill.stars }-${ index }`}>
								<SkillRating name={ skill.name } rating={ skill.stars }  />
							</div>
						))
					}
				</div>
			</div>
		</div>
	</>
}