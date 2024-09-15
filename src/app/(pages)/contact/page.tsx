import { ContactForm } from "@/components";

export default function ContactPage() {
   return (
      <div className=" mx-auto mt-3 sm:mt-10 px-5 sm:px-10 fadeUpCustom">
         <div className="mx-auto max-w-4xl ">
            <h2 className="text-center text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-7">Contact Me</h2>
            <p className="text-center text-lg sm:text-xl font-semibold mb-7"> Have Any Questions? </p>
         </div>
         <div className="mx-auto max-w-4xl">
            <ContactForm />
         </div>
      </div>
   );
}
