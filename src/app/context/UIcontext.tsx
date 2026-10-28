"use client"

import { certificateI } from "@/interfaces";
import { createContext, useContext, useState } from "react";

interface initValuesI {
   showModal: boolean;
   handleShowModal: (_?:certificateI) => void;
   handleHideModal: () => void;
   certification: certificateI | undefined;
   showSidebar: boolean;
   handleSidebar: ( value: boolean ) => void;
   loading: {
      show: boolean;
      stop: () => void;
      run: () => void;
   }
}

const initValues = {
   showModal: false,
   handleShowModal: (_?:certificateI) => {},
   handleHideModal: () => {},
   certification: undefined,
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

   const [ showModal, setShowModal ] = useState<boolean>(false)
   
   const [certification, setCertification] = useState<certificateI| undefined>()
   const [ showSidebar, setShowSidebar ] = useState<boolean>( false )
   const [ show, setShow ] = useState<boolean>( false )

   const handleSidebar = ( value: boolean ) => {
      window.document.body.style.overflow = !value ? 'auto': 'hidden'
      setShowSidebar( value )
   }

   const stop = () => {
      window.document.body.style.overflow = 'auto'
      setShow( false )
   }

   const run = () => {
      window.document.body.style.overflow = 'hidden'
      setShow( true )
   }

   const handleShowModal = (_certification?:certificateI) => {
      if ( _certification ) {
         setCertification( _certification )
      }else{
         setCertification( undefined )
      }

      setShowModal(  true )
   }

   const handleHideModal = () => {
      setShowModal(  false )
      setCertification( undefined )
   }

   const values = {
      showModal,
      handleShowModal,
      handleHideModal,
      certification,
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