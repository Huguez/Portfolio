"use server"

interface Props { children: React.ReactNode; }

export default async function Layout({ children }: Props ) {

   return <div className="bg-slate-50">
      { children }
   </div>
}