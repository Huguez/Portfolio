"use client"

import { createContext, useContext, useState } from "react";

interface initValuesI {
   showSidebar: boolean;
   handleSidebar: ( value: boolean ) => void;

   loading: {
      show: boolean;
      stop: () => void;
      run: () => void;
   }
}

const initValues = {
   showSidebar: false,
   handleSidebar: ( value: boolean ) => {},

   loading: {
      show: false,
      stop: () => {},
      run: () => {},
   }
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
   const [ show, setShow ] = useState<boolean>( false )

   const handleSidebar = ( value: boolean ) => {
      setShowSidebar( value )
   }

   const stop = () => {
      document.body.style.overflow = 'auto'
      setShow( false )
   }

   const run = () => {
      document.body.style.overflow = 'none'
      setShow( true )
   }

   const values = {
      showSidebar,
      handleSidebar,
      loading: {
         show,
         stop,
         run,
      }
   }

   return <UIContext.Provider value={ values }  { ...props } />
}