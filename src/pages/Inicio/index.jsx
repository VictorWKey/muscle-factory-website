/* eslint-disable no-unused-vars */
import React from 'react'
import VideoHome from '../../components/VideoHome'
import ArrowDowm from '../../components/icons/ArrowDowm'
import Header from '../../components/Header'
import SobreNosotros from '../../components/SobreNosotros'
import PorQue from '../../components/PorQue'
import Footer from '../../components/Footer'

function Inicio() {
  
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {/* Background */}
      {/* <div className="fixed top-0 z-[-3] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="fixed top-0 z-[-3] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* <div className="fixed top-0 z-[-3] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <VideoHome/>
      <div className='h-screen w-full absolute top-0 bg-black bg-opacity-70 z-[-1]'></div>
      <ArrowDowm/>

      <Header/>
      <SobreNosotros/>
      <PorQue/>
      <Footer/>
    </div>
    
  )
}

export default Inicio