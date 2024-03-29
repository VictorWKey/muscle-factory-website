/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext();

export const ShopProvider = ({children}) => {

  // Movil Menu NavBar
  const [isMovilMenuOpen, setIsMovilMenuOpen] = useState(false);
  
  return (
    <ShopContext.Provider value = {{
      isMovilMenuOpen, 
      setIsMovilMenuOpen
    }}>
      {children}
    </ShopContext.Provider>
  )
}