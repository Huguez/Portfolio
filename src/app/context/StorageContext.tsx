"use client"

import { createContext, useContext, useState } from "react";

type StorageType = 'local' | 'session';

const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
};

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

interface InitValuesI {  
   setValue: ( key: StorageKey, value: any, storageType?: StorageType ) => void;
   getValue: ( key: StorageKey, storageType?: StorageType ) => any | null;
   deleteValue: ( key: StorageKey, storageType?: StorageType ) => void;
}

const InitValues: InitValuesI = {
   setValue: ( key: StorageKey, value: any, storageType: StorageType = 'local' ) => {},
   getValue: ( key: StorageKey, storageType: StorageType = 'local' ): string | null => { return null },
   deleteValue: ( key: StorageKey, storageType: StorageType = 'local' ) => {},
}

const StorageContext = createContext<InitValuesI>( InitValues )

export const useStorage = () => {
   return useContext(StorageContext)
}

export const StorageProvider = ( props: { children: React.ReactNode } ) => {
   
   const setValue = ( key: StorageKey, value: any, storageType: StorageType = 'local' ) => {
      const valueStr = JSON.stringify(value);
      const storage = storageType === 'local' ? localStorage : sessionStorage;
      storage.setItem(key, valueStr);
   }

   const getValue = ( key: StorageKey, storageType: StorageType = 'local' ): string | null => {
      const storage = storageType === 'local' ? localStorage : sessionStorage;
      const valueStr = storage.getItem(key);
      return valueStr ? JSON.parse(valueStr) : null; 
   }

   const deleteValue = ( key: StorageKey, storageType: StorageType = 'local' ) => {
      const storage = storageType === 'local' ? localStorage : sessionStorage;
      storage.removeItem(key);
   }

   const values: InitValuesI = {
      setValue,
      getValue,
      deleteValue,
   }

   return (
      <StorageContext.Provider value={ values } { ...props } />
   )
}