/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext();

export const ShopProvider = ({children}) => {

  const [counter, setCounter] = useState(0);
  
  return (
    <ShopContext.Provider value = {{
      counter,
      setCounter
    }}>
      {children}
    </ShopContext.Provider>
  )
}