"use server"

import { Footer, Header, Loading, Sidebar } from "@/components";
import { getSession } from "@/actions";

interface Props { children: React.ReactNode; }

export default async function Layout({ children }: Props ) {

   const { authenticated } = await getSession()

   return <>
      <Header authenticated={authenticated} />
      <Sidebar authenticated={ authenticated} />
      { children }
      <Loading />
      <Footer />
   </>;
}