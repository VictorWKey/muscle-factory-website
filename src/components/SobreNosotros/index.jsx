/* eslint-disable no-unused-vars */
import React from 'react'

function SobreNosotros() {
  return (
    <section className='w-full h-auto lg:h-screen flex justify-center items-center py-5 sm:py-0 px-5 sm:px-16 pb-16'>
      <div className='w-full max-w-6xl flex flex-col justify-center items-center'>
        <h1 className='text-primarylight text-3xl sm:text-4xl xl:text-4xl 2xl:text-5xl font-extrabold mb-8 mt-10 lg:mt-0'>Sobre nosotros</h1>
        <div className='flex flex-col lg:flex-row w-auto h-auto'>
          <p className='w-auto lg:w-1/2 sm:text-lg xl:text-xl 2xl:text-2xl text-black font-bold sm:pr-5 pb-5 text-pretty'>
            ¡Bienvenido a <span className='text-primarylight'>Muscle Factory</span>, el gimnasio diseñado exclusivamente para forjar atletas! Nuestro centro de entrenamiento está <span className='text-primarylight'>equipado con pesas libres, máquinas de última generación y una amplia gama de equipos de cardio</span> para satisfacer todas tus necesidades de entrenamiento. Pero eso no es todo, en Muscle Factory también encontrarás una <span className='text-primarylight'>tienda de suplementos</span> donde podrás adquirir productos de alta calidad como <span className='text-primarylight'>proteínas, creatina, pre-entrenamientos y mucho más para potenciar tus resultados.</span>
          </p>
          <figure className='w-auto lg:w-1/2 rounded-2xl overflow-hidden mb-16 lg:mb-0'>
            <img className='w-full h-full object-cover' src="../../../public/sobre-nosotros-2.jpg" alt="" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros