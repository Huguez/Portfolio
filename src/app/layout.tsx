import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 
import Favicon from '/public/favicon.ico';

import { Providers } from "@/components"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Huguez's Portfolio",
  description: "Portfolio where show my abilities, capacities, and experience.",
  icons: [ { rel: 'icon', url: Favicon.src } ]
};

interface propsLayout { 
  children: React.ReactNode;
}

export default function RootLayout({ children,}: Readonly<propsLayout>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
