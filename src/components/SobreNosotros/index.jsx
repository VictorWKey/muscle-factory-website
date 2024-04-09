/* eslint-disable no-unused-vars */
import React from 'react'

function SobreNosotros() {
  return (
    <section className='w-full h-auto flex justify-center items-center py-10 xl:py-0 px-6 lg:px-0  bg-black bg-opacity-95'>
      <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center'>

        <div className='flex flex-col lg:px-8 justify-center items-center lg:w-1/2'>

          <h1 className='text-primarylight text-3xl sm:text-4xl xl:text-4xl font-bold mb-4 lg:mt-0 self-start'>Sobre nosotros</h1>

          <p className='w-auto xl:text-xl 2xl:text-2xl text-white font-medium sm:pr-5 text-pretty pb-4 lg:pb-0'>
            ¡Bienvenido a <span className='text-primarylight'>Muscle Factory</span>, el gimnasio diseñado exclusivamente para forjar atletas! Nuestro centro de entrenamiento está <span className='text-primarylight'>equipado con pesas libres, máquinas de última generación y una amplia gama de equipos de cardio</span> para satisfacer todas tus necesidades de entrenamiento. Pero eso no es todo, en Muscle Factory también encontrarás una <span className='text-primarylight'>tienda de suplementos</span> donde podrás adquirir productos de alta calidad como <span className='text-primarylight'>proteínas, creatina, pre-entrenamientos y mucho más para potenciar tus resultados.</span>
          </p>

        </div>

        <div className='flex lg:w-1/2 h-full items-center justify-center'>
          <img className='object-cover' src="../../../public/img/musclefactory/sobre-nosotros-4.jpg" alt="" />
        </div>

      </div>
    </section>
  )
}

export default SobreNosotros