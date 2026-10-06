import { LoginForm } from "@/components";

export default async function AdminPage() {

   return (
      <div className="mx-auto mt-3 sm:mt-10 px-5 sm:px-10 ">
         <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-7">Hi Coder !!!</h2>
         </div>
         <div className="mx-auto max-w-4xl">
            <LoginForm />
         </div>
      </div>
   );
}