/* eslint-disable no-unused-vars */
import React from 'react'

function Membresias() {
  return (
    <section id='membresias' className='w-full py-16 sm:py-20 px-5 flex justify-center items-center bg-white'>
      <div className='flex flex-col w-full justify-center items-center gap-6 max-w-5xl'>
        <h1 className='text-primarylight text-4xl sm:text-4xl xl:text-4xl font-extrabold sm:mt-0 self-center'>Membresias</h1>
        <p className='font-medium text-xl'>Todas las membresías ofrecen los mismos beneficios, incluyendo acceso a baños, regaderas, vestidores, máquinas, áreas de cardio, pesas y estacionamiento para motos.</p>
        <div className='flex flex-col w-full md:flex-row gap-6 justify-center'>
          <div className='w-full xl:w-56 py-12 xl:py-8 px-6 border-2 border-primarylight flex flex-col gap-3 rounded-3xl bg-white  items-center shadow-xl h-auto'>
            <h1 className='text-4xl xl:text-2xl text-primarylight font-extrabold'>Dia</h1>
            <div className='w-full border-b'></div>
            <div className='flex flex-col gap-1'>
              <p className='text-secondarydark text-xl xl:text-xs font-bold text-center'>Pago unico de:</p>
              <h2 className='text-3xl xl:text-xl text-secondarydark font-semibold'>$1400.00 MXN</h2>
            </div>       
          </div>

          <div className='w-full xl:w-56 py-12 xl:py-8 px-6 border-2 border-primarylight flex flex-col gap-3 rounded-3xl bg-white  items-center shadow-xl h-auto'>
            <h1 className='text-4xl xl:text-2xl text-primarylight font-extrabold'>Mensualidad</h1>
            <div className='w-full border-b'></div>
            <div className='flex flex-col gap-1'>
              <p className='text-secondarydark text-xl xl:text-xs font-bold text-center'>Pago unico de:</p>
              <h2 className='text-3xl xl:text-xl text-secondarydark font-semibold'>$500.00 MXN</h2>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-secondarydark text-xl xl:text-xs font-bold text-center'>Estudiante:</p>
              <h2 className='text-3xl xl:text-xl text-secondarydark font-semibold'>$450.00 MXN</h2>
            </div>
            <h4 className='text-xs text-black font-semibold'>*Para estudiante: favor de presentar credencial de estudiante con indicador de vigencia</h4>      
          </div>

          <div className='w-full xl:w-56 py-12 xl:py-8 px-6 border-2 border-primarylight flex flex-col gap-3 rounded-3xl bg-white  items-center shadow-xl h-auto'>
            <h1 className='text-4xl xl:text-2xl text-primarylight font-extrabold'>Trimestre</h1>
            <div className='w-full border-b'></div>
            <div className='flex flex-col gap-1'>
              <p className='text-secondarydark text-xl xl:text-xs font-bold text-center'>Pago unico de:</p>
              <h2 className='text-3xl xl:text-xl text-secondarydark font-semibold'>$1400.00 MXN</h2>
            </div> 
            <h4 className=' text-black font-semibold text-sm'>¡Ahorras $100!</h4>          
          </div>

          <div className='w-full xl:w-56 py-12 xl:py-8 px-6 border-2 border-primarylight flex flex-col gap-3 rounded-3xl bg-white  items-center shadow-xl h-auto'>
            <h1 className='text-4xl xl:text-2xl text-primarylight font-extrabold'>Anualidad</h1>
            <div className='w-full border-b'></div>        
            <div className='flex flex-col gap-1'>
              <p className='text-secondarydark text-xl xl:text-xs font-bold text-center'>Pago unico de:</p>
              <h2 className='text-3xl xl:text-xl text-secondarydark font-semibold'>$5,000.00 MXN</h2>
            </div>
            <h4 className=' text-black font-semibold text-sm'>¡Ahorras $1000!</h4>    
          </div>
        </div>
      </div>
    </section>
  )
}

export default Membresias