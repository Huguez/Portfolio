import { createContext, useContext, useState } from "react";

interface initValuesI {
   showSidebar: boolean;
   handleSidebar: ( value: boolean ) => void;
}

const initValues = {
   showSidebar: false,
   handleSidebar: ( value: boolean ) => {}
}

const UIContext = createContext<initValuesI>( initValues )

export const useUI = () => {
   return useContext( UIContext )
}

interface UIProps {
   children: React.ReactNode;
}

export function UIProvider( props: UIProps ) {

   const [ showSidebar, setShowSidebar ] = useState<boolean>( false )

   const handleSidebar = ( value: boolean ) => {
      setShowSidebar( value )
   }

   const values = {
      showSidebar,
      handleSidebar,
   }

   return <UIContext.Provider value={ values }  { ...props } />
}