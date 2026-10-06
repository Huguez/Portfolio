"use client"

import { createContext, useContext, useState } from "react";

type StorageType = 'local' | 'session';

const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
};

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

interface InitValuesI {  
   setValue: ( key: StorageKey, value: string, storageType?: StorageType ) => void;
   getValue: ( key: StorageKey, storageType?: StorageType ) => string | null;
}

const InitValues: InitValuesI = {
   setValue: ( key: StorageKey, value: string, storageType: StorageType = 'local' ) => {},
   getValue: ( key: StorageKey, storageType: StorageType = 'local' ): string | null => { return null },
}

const StorageContext = createContext<InitValuesI>( InitValues )

export const useStorage = () => {
   return useContext(StorageContext)
}

export const StorageProvider = ( props: { children: React.ReactNode } ) => {
   
   const setValue = ( key: StorageKey, value: string, storageType: StorageType = 'local' ) => {
      const storage = storageType === 'local' ? localStorage : sessionStorage;
      storage.setItem(key, value);
   }

   const getValue = ( key: StorageKey, storageType: StorageType = 'local' ): string | null => {
      const storage = storageType === 'local' ? localStorage : sessionStorage;
      return storage.getItem(key);
   }

   const values: InitValuesI = {
      setValue,
      getValue,
   }

   return (
      <StorageContext.Provider value={ values } { ...props } />
   )
}