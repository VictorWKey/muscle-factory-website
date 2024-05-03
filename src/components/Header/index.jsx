/* eslint-disable no-unused-vars */
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Suplement from '../icons/Suplement'
import Calendar from '../icons/Calendar'

function Header() {
  return (
    <div className='h-screen w-full max-w-7xl flex flex-col justify-center items-center gap-5 px-4'>
      <h1 className='text-primarylight text-7xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-wrap animate-fade-down animate-once animate-ease-in-out flex flex-col sm:flex-row items-center'>
        <span className='text-wrap sm:mr-4'>MUSCLE</span>
        <span 
          className='text-transparent'
          style={{ WebkitTextStroke: '2px #C1121F', textStroke: '2px #C1121F'}}
        >
          FACTORY
        </span>
        {/* <figure className='ml-0 size-16 z-50 hover:cursor-pointer'>
            <img className='size-full object-cover' src="../../../img/musclefactory/muscle-factory-logo-recortado.png" alt="" />
        </figure> */}
      </h1>
      <h2 className='text-white font-extrabold text-base sm:text-2xl xl:text-3xl 2xl:text-4xl animate-fade-down animate-once animate-ease-in-out text-wrap'>GIMNASIO Y TIENDA DE SUPLEMENTOS</h2>
      <p className='sm:hidden text-white font-extrabold text-sm sm:text-2xl xl:text-3xl 2xl:text-4xl animate-fade-down animate-once animate-ease-in-out text-wrap'>#CREANDOATLETAS</p>

      <h3 className='hidden sm:flex sm:gap-2 text-white font-extrabold text-sm sm:text-base xl:text-lg 2xl:text-xl text-pretty animate-fade-up animate-once animate-ease-in-out'>
        ABRIMOS 
        <span className='text-primarylight font-extrabold text-sm sm:text-base xl:text-lg 2xl:text-xl'>
          TODOS LOS DÍAS
        </span> 
        ¡NO HAY EXCUSAS!
      </h3>
      <div className='flex gap-4 sm:gap-8 animate-fade-up animate-once animate-ease-in-out mt-5 flex-wrap'>
        <PrimaryButton Icon={Suplement} text="Suplementos" path="/suplementos"/>
        <a href='#membresias' className='flex gap-1 items-center justify-center text-white font-semibold bg-primarylight rounded py-2 px-4 sm:px-8 transition duration-300 ease-in-out hover:bg-primarydark hover:scale-110'>
          <div className='size-5 flex justify-center items-center'>
            <Calendar/>
          </div>
          <p>Membresias</p>
        </a>
      </div>
    </div>
  )
}

export default Header