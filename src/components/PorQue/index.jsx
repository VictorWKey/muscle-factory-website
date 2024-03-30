/* eslint-disable no-unused-vars */
import React from 'react'
import Cardio from '../icons/Cardio'
import PesoLibre from '../icons/PesoLibre'
import Entrenador from '../icons/Entrenador'
import Suplementos from '../icons/Suplementos'

function PorQue() {
  return (
    <section className='w-full h-auto 2xl:h-screen flex justify-center items-center py-5 sm:py-20 px-5 sm:px-16 pb-16  bg-gradient-to-t from-primarylight to-primarydark'>
      <div className='w-full max-w-6xl flex flex-col justify-center items-center gap-8'>
        <h1 className='text-white text-center text-3xl sm:text-4xl xl:text-4xl 2xl:text-5xl font-extrabold mt-10 sm:mt-0'>¿Por qué Muscle Factory?</h1>
        <p className='text-white font-semibold text-xl'>
Contamos con estacionamiento para motocicletas, baños privados, regaderas privadas y tienda de suplementos.</p>
        <div className='w-full flex flex-col sm:flex-row gap-10 justify-center items-center flex-wrap'>
          
          <div className='bg-white rounded-3xl'>
            <div className='w-full sm:w-64 px-4 py-6 h-96 flex flex-col justify-center items-center gap-3 rounded-3xl bg-black bg-opacity-95'>
              <div className='size-40'>
                <Cardio/>
              </div>
              <h4 className='text-2xl text-secondarylight font-bold '>Cardio</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>- 10 Caminadoras</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- 6 Escaladoras</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- 8 Elípticas</p>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-3xl'>
            <div className='w-full sm:w-64 px-4 py-6 h-96 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-95 rounded-3xl'>
              <div className='size-40'>
                <PesoLibre/>
              </div>
              <h4 className='text-2xl text-secondarylight font-bold '>Peso libre</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>- Peso libre</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- Rack para sentadillas</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- Equipo de peso libre</p>
                <p className='text-white text-base font-medium text-center text-pretty '>- Mancuernas (5lbs-150lbs)</p>
              </div>
            </div>
          </div >

          <div className='bg-white rounded-3xl'>
            <div className='w-full sm:w-64 px-4 py-6 h-96 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-95 rounded-3xl'>
              <div className='size-40'>
                <Entrenador/>
              </div>
              <h4 className='text-2xl text-secondarylight font-bold '>Coaching</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>- Apoyo</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- Demostración de ejercicios</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- Supervisión</p>
              </div>
            </div>
          </div>


          <di className='bg-white rounded-3xl'>
            <div className='w-full sm:w-64 px-4 py-6 h-96 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-95 rounded-3xl'>
              <div className='size-40'>
                <Suplementos/>
              </div>
              <h4 className='text-2xl text-secondarylight font-bold '>Suplementos</h4>
              <div className='flex flex-col justify-center items-center'>
                <p className='text-white text-base font-medium text-center text-pretty'>- Creatina</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- Proteína</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- Pre-entreno</p>
                <p className='text-white text-base font-medium text-center text-pretty'>- Bebidas energéticas</p>
              </div>
            </div>
          </di>


        </div>
      </div>

    </section>
  )
}

export default PorQue