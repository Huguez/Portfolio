import { useUI } from '@/context';
import React from 'react'

interface BaseModalProps {
  children: React.ReactNode;
}

export const BaseModal = ({ children }: BaseModalProps) => {
  
  const { handleHideModal } = useUI()

  return (<>
    <div className="fixed inset-0 z-30 top-0 left-0 w-screen h-screen bg-neutral-800/80 " onClick={handleHideModal} />
    <div className='fixed z-40 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2'>
      <div className='p-4 bg-white rounded-lg mx-4 sm:mx-0 '>
        {children}
      </div>
    </div>
  </>)
}
