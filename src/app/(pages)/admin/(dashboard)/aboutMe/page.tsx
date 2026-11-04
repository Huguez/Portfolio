import { getAboutMe } from "@/actions";
import { AboutMeForm } from "@/components";

export default async function AboutMePage() {

   const resp = await getAboutMe()

   return (
      <div className="mx-auto max-w-screen-2xl min-w-0">
         <AboutMeForm {...resp} />
      </div>
   )
}