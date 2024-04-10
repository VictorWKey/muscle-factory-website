/* eslint-disable no-unused-vars */
import React from 'react'

function Ubicacion() {
  return (
    <section className='w-full py-16 px-6 sm:px-16 flex justify-center items-center bg-black bg-opacity-95'>
      <div className='flex flex-col w-full justify-center items-center gap-6 max-w-5xl '>
        <h1 className='text-primarylight text-4xl sm:text-4xl xl:text-4xl font-extrabold sm:mt-0 text-center'>UBICACIÓN Y HORARIOS</h1>
        <p className='font-medium text-xl text-white text-center'>Dirección: Blvd Los Reyes 870 , Irapuato Centro, México 📍</p>
        <div className='flex w-full justify-center flex-col md:flex-row gap-6'>

          <div className='w-full md:w-64 sm:border sm:border-white py-8 flex flex-col gap-3 sm:bg-black bg-opacity-95  items-center '>
            <h1 className='text-2xl text-white font-extrabold'>Lunes a viernes</h1>    
            <h4 className='text-sm text-white font-semibold'>6:00am - 10:00pm</h4>    
          </div>

          <div className='w-full md:w-64 sm:border sm:border-white py-8 flex flex-col gap-3 sm:bg-black bg-opacity-95  items-center '>
            <h1 className='text-2xl text-white font-extrabold'>Sabado</h1>        
            <h4 className=' text-white font-semibold text-sm'>7:00am - 3:00pm</h4>    
          </div>

          <div className='w-full md:w-64 sm:border sm:border-white py-8 flex flex-col gap-3 sm:bg-black bg-opacity-95  items-center '>
            <h1 className='text-2xl text-white font-extrabold'>Domingo</h1>        
            <h4 className=' text-white font-semibold text-sm'>8:00am - 1:00pm</h4>    
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion