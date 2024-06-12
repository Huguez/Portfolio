import { Footer, Header, Sidebar } from "@/components";

interface Lprops { children: React.ReactNode; }

export default function Layout({ children }: Lprops ) {
   return <>
      <Header />
      <Sidebar />
      { children }
      <Footer />
   </>;
}