import Link from "next/link";

import desktop1 from '/public/imgs/Desktop_1.jpg';
import desktop2 from '/public/imgs/Desktop_2.jpg';
import desktop3 from '/public/imgs/Desktop_3.jpg';
import desktop4 from '/public/imgs/Desktop_4.jpg';
import desktop5 from '/public/imgs/Desktop_5.jpg';
import { SlideShow } from "@/components";


export default function ProjectIdPage() {
	
	const images = [
		desktop1.src, 
		desktop2.src, 
		desktop3.src, 
		desktop4.src, 
		desktop5.src
	]


	const depende = `"dependencies": {
    "@paypal/react-paypal-js": "^8.2.0",
    "@prisma/client": "^5.12.1",
    "bcryptjs": "^2.4.3",
    "cloudinary": "^2.2.0",
    "clsx": "^2.1.0",
    "next": "14.1.4",
    "next-auth": "^5.0.0-beta.16",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.51.3",
    "react-icons": "^5.0.1",
    "swiper": "^11.1.0",
    "zod": "^3.22.4",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.4",
    "postcss": "^8",
    "prisma": "^5.12.1",
    "tailwindcss": "^3.3.0",
    "ts-node": "^10.9.2",
    "typescript": "^5"
  }`

	return (
		<div className="container mx-auto mt-3 sm:mt-10 px-5 sm:px-10">
			<div className="mx-auto max-w-4xl ">
				<h2 className=" text-center sm:text-left text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-7">Hello ProjectIdPage</h2>
			</div>
			<div className="mx-auto max-w-4xl " >
				<p className=" text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p className=" text-justify ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<div className="my-5 sm:my-10">
					<SlideShow  images={ images } />
				</div>
				<h3 className="text-center sm:text-left  text-xl sm:text-2xl font-semibold">
					Lorem ipsum dolor sit amet
				</h3>
				<ul className="list-disc text-justify sm:text-left  mt-3 mb-5 pl-7">
					<li> Iura demens satus vino simulac celanda </li>
					<li> Exhibuere frustra utque </li>
					<li> Iura demens satus vino simulac celanda </li>
					<li> Exhibuere frustra utque </li>
					<li> Panda pars umidus </li>
				</ul>
				<h3 className="text-center sm:text-left  text-xl sm:text-2xl ">
					Lorem ipsum dolor sit amet:
				</h3>
				<div className="relative  rounded-lg bg-gray-700 p-4  my-3">
					<div className="overflow-x-scroll sm:overflow-x-hidden sm:overflow-none  max-h-full">
						<pre>
							<code className="text-sm text-gray-300  ">
								{ depende }
							</code>
						</pre>
					</div>
				</div>

					
				<div className="text-justify my-5 ">
					Thanks you for very much for visiting my portfolio and taking your time to read this post, 
					I hope that you like this application, if you want to  see more about this project you can check this repository
					<Link className="hover:underline  font-medium  text-blue-600 "  href="/">  here </Link> on my github account.
					<br/>
					See you later !!!
				</div>
			</div>
		</div>
	);
}