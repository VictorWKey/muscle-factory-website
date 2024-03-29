/* eslint-disable no-unused-vars */
import React from 'react'
import VideoHome from '../../components/VideoHome'
import PrimaryButton from '../../components/PrimaryButton'
import Suplement from '../../components/icons/Suplement'
import Calendar from '../../components/icons/Calendar'
import ArrowDowm from '../../components/icons/ArrowDowm'

function Inicio() {
  
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full mt-6'>
      {/* Background */}
      <div className="fixed top-0 z-[-3] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <VideoHome/>
      <div className='h-screen w-full absolute top-0 bg-black bg-opacity-50 z-[-1]'></div>
      <ArrowDowm/>


      <div className='h-full w-auto max-w-7xl flex flex-col justify-center items-center gap-5'>
        <h1 className='text-primarylight xl:text-7xl 2xl:text-8xl font-extrabold flex gap-5 flex-wrap animate-fade-down animate-once animate-ease-in-out'>
          MUSCLE 
          <span 
            className='text-transparent'
            style={{ WebkitTextStroke: '3px #C1121F', textStroke: '3px #C1121F'}}
          >
            FACTORY
          </span>
        </h1>
        <h2 className='text-white font-extrabold xl:text-3xl 2xl:text-4xl animate-fade-down animate-once animate-ease-in-out'>GIMNASIO Y TIENDA DE SUPLEMENTOS</h2>
      
        <h3 className='text-white font-extrabold xl:text-lg 2xl:text-xl flex gap-2 animate-fade-up animate-once animate-ease-in-out'>
          ABRIMOS 
          <span className='text-primarylight font-extrabold text-xl'>
            TODOS LOS DÍAS
          </span> 
          ¡NO HAY EXCUSAS!
        </h3>
        <div className='flex gap-8 animate-fade-up animate-once animate-ease-in-out mt-5'>
          <PrimaryButton Icon={Suplement} text="Suplementos" path="/suplements"/>
          <PrimaryButton Icon={Calendar} text="Membresias" path="/membresias"/>
        </div>
      </div>
      
    </div>
    
  )
}

export default Inicio