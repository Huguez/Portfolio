import Favicon from '/public/favicon.ico';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huguez's Portfolio",
  description: "",
  icons: [ { rel: 'icon', url: Favicon.src } ]
};

interface propsLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children,}: Readonly<propsLayout>) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
