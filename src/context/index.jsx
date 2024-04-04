/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext();

export const ShopProvider = ({children}) => {

  const SUPLEMENTOS = [
    {
      id: 1,
      name: "Venom",
      price: 1500,
      category: "Pre-entreno",
      image : ""
    },
    {
      id: 2,
      name: "Neuromorfo",
      price: 1500,
      category: "Pre-entreno",
      image : ""
    },
    {
      id: 3,
      name: "Isophorm",
      price: 1500,
      category: "Proteina",
      image : ""
    },
    {
      id: 4,
      name: "Weyphorm",
      price: 1500,
      category: "Proteina",
      image : ""
    },
    {
      id: 5,
      name: "Massphorm",
      price: 1500,
      category: "Proteina",
      image : ""
    },
    {
      id: 6,
      name: "Mr. Veinz",
      price: 1500,
      category: "Pre-entreno",
      image : ""
    },
    {
      id: 7,
      name: "ATP Force",
      price: 1500,
      category: "Creatina",
      image : ""
    },
    {
      id: 8,
      name: "Creatine Monohydrate",
      price: 1500,
      category: "Creatina",
      image : ""
    },
    {
      id: 9,
      name: "IsoJects Natural",
      price: 1500,
      category: "Proteina",
      image : ""
    },
    {
      id: 10,
      name: "Evofusiom",
      price: 1500,
      category: "Proteina",
      image : ""
    }
  ]

  // Movil Menu NavBar
  const [isMovilMenuOpen, setIsMovilMenuOpen] = useState(false);

  // Get Products
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(SUPLEMENTOS)
  }, [])

   // Get Products by Name
  const [searchByName, setSearchByName] = useState('');

  // Get Products by Name
  const [searchByCategory, setSearchByCategory] = useState('');

  // Filtered Products by Name
  const [filteredItems, setFilteredItems] = useState([]);

  const filteredItemsByName = (items, itemNameSearch) => {
    return items?.filter(item => item.name.toLowerCase().includes(itemNameSearch.toLowerCase()))
  }

  const filteredItemsByCategory = (items, itemCategorySearch) => {
    return items?.filter(item => item.category.toLowerCase() === itemCategorySearch.toLowerCase());
  }

  const filterBy = (searchType, items, searchByName, searchByCategory) => {
    if(searchType === 'BY_NAME'){
      return filteredItemsByName(items, searchByName)
    }

    if(searchType === 'BY_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory)
    }

    if(searchType === 'BY_CATEGORY_AND_NAME'){
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.Name.toLowerCase().includes(searchByName.toLowerCase()))
    }
  }

  useEffect(() => {
    console.log(searchByName)
    if ((searchByName?.length > 0 || searchByName) && (searchByCategory?.length === 0 || !searchByCategory)){
      setFilteredItems(filterBy('BY_NAME', items, searchByName, searchByCategory))
    }

    if ((searchByCategory?.length > 0 || searchByCategory) && (searchByName?.length === 0 || !searchByName)){
      setFilteredItems(filterBy('BY_CATEGORY', items, searchByName, searchByCategory))
    }

    if((searchByName?.length > 0 || searchByName) && (searchByCategory?.length > 0 || searchByCategory)){
      setFilteredItems(filterBy('BY_CATEGORY_AND_NAME', items, searchByName, searchByCategory))
    }

    if((searchByCategory?.length === 0 || !searchByCategory) && (searchByName?.length === 0 || !searchByName)){
      setFilteredItems(items)
    }

  }, [items, searchByName, searchByCategory])
  
  return (
    <ShopContext.Provider value = {{
      isMovilMenuOpen, 
      setIsMovilMenuOpen,
      setSearchByName,
      filteredItems,
      setSearchByCategory
    }}>
      {children}
    </ShopContext.Provider>
  )
}