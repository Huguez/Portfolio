import { Footer, Header, Loading, Sidebar } from "@/components";

interface Lprops { children: React.ReactNode; }

export default function Layout({ children }: Lprops ) {
   return <>
      <Header />
      <Sidebar />
      { children }
      <Loading />
      <Footer />
   </>;
}