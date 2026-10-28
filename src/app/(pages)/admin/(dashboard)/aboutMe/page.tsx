import { getAboutMe } from "@/actions";
import { AboutMeForm } from "@/components";

export default async function AboutMePage() {

   const resp = await getAboutMe()

   return (
      <div className="container mx-auto pt-0 sm:py-16">
         <AboutMeForm {...resp} />
      </div>
   )
}