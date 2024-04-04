/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import SuplementCard from '../../components/SuplememtCard'
import { ShopContext } from '../../context';

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

function Suplementos() {

  const {
    setSearchByName,
    filteredItems
  } = useContext(ShopContext);

  return (
    <div className='w-full h-auto flex flex-col gap-10 mt-32 justify-center items-center'>
      <input
        type="text"
        placeholder='Search Suplement'
        className='w-80 p-3 mb-4 border border-secondarydark'
        onChange={(event) => setSearchByName(event.target.value)}
      />
      <div className='w-full h-auto max-w-5xl flex flex-row flex-wrap gap-6 justify-center items-center'>
        {filteredItems.map(suplement => (
          <SuplementCard key={suplement.id} name={suplement.name} price={suplement.price} image={suplement.image} />
        ))}
      </div>
    </div>
  )
}

export default Suplementos