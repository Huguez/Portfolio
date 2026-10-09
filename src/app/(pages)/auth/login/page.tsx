import { LoginForm } from "@/components";

export default async function LoginPage() {

   return (
      <div className="w-full sm:w-2/3 md:w-1/3 mx-auto mt-3 sm:mt-10 px-5   md:p-10 ">
         <div className="mx-auto ">
            <h2 className="text-center text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-7">Hi Coder !!!</h2>
         </div>
         <div className="mx-auto">
            <LoginForm />
         </div>
      </div>
   );
}