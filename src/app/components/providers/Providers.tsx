'use client';

import { UIProvider } from "@/context";

interface propsProviders {
   children: React.ReactNode;
}

export default function Providers( { children }: propsProviders ) {
   return (
      <UIProvider>
         { children }
      </UIProvider>
   );
}