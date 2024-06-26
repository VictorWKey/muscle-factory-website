/* eslint-disable no-unused-vars */
import React from 'react'
import Cardio from '../icons/Cardio'
import PesoLibre from '../icons/PesoLibre'
import Entrenador from '../icons/Entrenador'
import Suplementos from '../icons/Suplementos'

function PorQue() {
  return (
    <section className='w-full h-auto flex justify-center items-center py-16 sm:py-20 px-5 sm:px-16  bg-primarylight'>
      <div className='w-full max-w-6xl flex flex-col justify-center items-center gap-8'>
        <h1 className='text-white text-center text-3xl sm:text-4xl xl:text-4xl 2xl:text-5xl font-extrabold sm:mt-0'>¿POR QUÉ MUSCLE FACTORY?</h1>
        <p className='text-white font-medium text-xl text-pretty'>
Contamos con estacionamiento para motocicletas, baños privados, regaderas privadas y tienda de suplementos.</p>
        <div className='w-full flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap'>
          
          <div className='w-full sm:w-56 h-[360px] rounded-xl'>
            <div className='w-full sm:w-56 h-[360px] py-6 flex flex-col items-center gap-3 rounded-xl '>
              <div className='size-44 sm:size-32'>
                <Cardio/>
              </div>
              <h4 className='text-xl text-white font-bold '>Cardio</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>· 10 Caminadoras</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· 6 Escaladoras</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· 8 Elípticas</p>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-56 h-[360px] rounded-xl'>
            <div className='w-full sm:w-56 h-[360px] py-6 flex flex-col items-center gap-3 rounded-xl'>
              <div className='size-44 sm:size-32'>
                <PesoLibre/>
              </div>
              <h4 className='text-xl text-white font-bold '>Equipamiento</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>· Peso libre</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Rack para sentadillas</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Equipo de peso libre</p>
                <p className='text-white text-base font-medium text-center text-pretty '>· Mancuernas (5lbs-150lbs)</p>
                <p className='text-white text-base font-medium text-center text-pretty '>· Máquinas modernas</p>
              </div>
            </div>
          </div >

          <div className='w-full sm:w-56 h-[360px] rounded-xl '>
            <div className='w-full sm:w-56 h-[360px] py-6 flex flex-col items-center gap-3 rounded-xl'>
              <div className='size-44 sm:size-32'>
                <Entrenador/>
              </div>
              <h4 className='text-xl text-white font-bold '>Coaching</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>· Demostración de ejercicios</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Supervisión</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Apoyo</p>

              </div>
            </div>
          </div>


          <div className='w-full sm:w-56 h-[360px] rounded-xl'>
            <div className='w-full sm:w-56 h-[360px] py-6 flex flex-col items-center gap-3 rounded-xl'>
              <div className='size-44 sm:size-32'>
                <Suplementos/>
              </div>
              <h4 className='text-xl text-white font-bold '>Supplement Shop</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>· Creatina</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Proteína</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Pre-entreno</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Bebidas energéticas</p>
                <p className='text-white text-base font-medium text-center text-pretty'>· Barras de proteína</p>
              </div>
            </div>
          </div>


        </div>
      </div>

    </section>
  )
}

export default PorQue