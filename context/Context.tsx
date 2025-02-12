"use client"
import React, { createContext, ReactNode, useState } from "react";
import { ContextType } from "../src/types/ContextType";

export const Context = createContext<ContextType>({
    showCategory:false,
    setShowCategory:() => null,
    token:"",
    setToken:() => null
})

export const GlobalContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [showCategory, setShowCategory] = useState<boolean>(false)
    const data = localStorage.getItem("token")
    const [token, setToken] = useState<string | null>(() => data && JSON.parse(data) || null)

    localStorage.setItem("token", JSON.stringify(token))
    return <Context.Provider value={{showCategory, setShowCategory, setToken, token}}>{children}</Context.Provider>
}