import { Metadata } from "next/types";

import { Hello, Projects, WhoIam, Experience } from "@/components";
import { getJobs } from "@/actions";


export const metadata: Metadata = {
  title: "Carlos Huguez's Portfolio",
  description: "Portfolio where Carlos Huguez show his abilities, capacities, and experience.",
};

export default async function Home() {

	const { jobs }  = await getJobs();

	return (
		<main className="bg-gray-50 min-h-screen">
		
			<Hello />

			<WhoIam />
      
			<Experience jobs={ jobs } />
      
			{/* <Projects /> */}
		</main>
	);
}
