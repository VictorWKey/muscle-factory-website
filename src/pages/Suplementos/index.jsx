/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import SuplementCard from '../../components/SuplementCard'
import { ShopContext } from '../../context';
import FilterBy from '../../components/FilterBy';
import SortedBy from '../../components/SortedBy';
import Footer from '../../components/Footer';

function Suplementos() {

  const {
    setSearchByName,
    filteredItems
  } = useContext(ShopContext);

  return (
    <div className='w-full h-auto flex flex-col gap-10 pt-32 pb-15 justify-center items-center'>
      <div className='flex flex-col sm:flex-row gap-4 px-4 sm:px-0'>
        <input
          type="text"
          placeholder='Buscar Suplemento'
          className='w-80 p-3 border border-secondarydark'
          onChange={(event) => setSearchByName(event.target.value)}
        />
        <div className='flex gap-4'>
          <FilterBy/>
          <SortedBy/>
        </div>
      </div>

      <div className='w-full h-auto max-w-5xl flex flex-row flex-wrap gap-3 justify-center items-center mb-14 px-4 sm:px-0'>
        {filteredItems.map(suplement => (
          <SuplementCard key={suplement.id} id={suplement.id} name={suplement.name} description={suplement.description} category={suplement.category} brand={suplement.brand} price={suplement.price} image={suplement.image} />
        ))}
      </div>

      <Footer/>
    </div>
  )
}

export default Suplementos