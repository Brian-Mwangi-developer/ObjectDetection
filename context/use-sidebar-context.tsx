"use client";

import React,{createContext,useState, ReactNode, useContext} from 'react';

interface SideBarContextType{
    sidebarOpen:boolean
    setSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>
    toggleSidebar:()=>void
}

const SidebarContext = createContext<SideBarContextType | null>(null);

export const SideBarProvider = ({children}: {children:ReactNode})=>{
    const [sidebarOpen,setSidebarOpen] = useState(false);

    const toggleSidebar  = ()=>{
        setSidebarOpen((prevState) => !prevState);
    }
     return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar,setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => {
   
    const context = useContext(SidebarContext);
    if (!context) {
      throw new Error("useSidebarContext must be used within a SidebarProvider");
    }
    return context;
  };