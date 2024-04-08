/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../../context/index.jsx';
import Close from '../icons/Close.jsx';
import { Link, NavLink } from 'react-router-dom';

function MovilMenu() {



  const {
    isMovilMenuOpen,
    setIsMovilMenuOpen
  } = useContext(ShopContext)

  const inactiveStyle = "text-2xl text-white"

  return (
    <div className={`z-50 w-full h-full bg-secondarydark fixed top-0 flex flex-col p-3 items-start  transition-transform duration-300 lg:hidden transform ${isMovilMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='w-full flex justify-between items-center mb-16'>
        <div className='h-auto'>
          <Link to="/" >
            <figure className='ml-0 lg:ml-2 size-14 z-50 hover:cursor-pointer'>
              <img className='size-full object-cover' src="../../../public/img/musclefactory/muscle-factory-logo.png" alt="" />
            </figure>
          </Link>
        </div>
        <div onClick={() => setIsMovilMenuOpen(false)} >
          <div className='size-12'>
            <Close/>
          </div>
        </div>
      </div>

      <div 
        className='border-b-2 pl-3 border-gray-400 w-full mb-14'
        onClick={() => setIsMovilMenuOpen(false)}
      >
          <NavLink 
            to="/"
            className = {({isActive}) => inactiveStyle}
          >
              Inicio
          </NavLink>
      </div>
      <div 
        className='border-b-2 pl-3 border-gray-400 w-full mb-14'
        onClick={() => setIsMovilMenuOpen(false)}
      >
          <NavLink 
            to="/suplementos"
            className = {({isActive}) => inactiveStyle}
          >
              Suplementos
          </NavLink>
      </div>
      <div 
        className='border-b-2 pl-3 border-gray-400 w-full mb-14'
        onClick={() => setIsMovilMenuOpen(false)}
      >
          <NavLink 
            to="/entrenamientos"
            className = {({isActive}) => inactiveStyle}
          >
              Entrenamientos
          </NavLink>
      </div>
      <div 
        className='border-b-2 pl-3 border-gray-400 w-full mb-14'
        onClick={() => setIsMovilMenuOpen(false)}
      >
          <NavLink 
            to="/membresias"
            className = {({isActive}) => inactiveStyle}
          >
              Membresias
          </NavLink>
      </div>
      <div 
        className='border-b-2 pl-3 border-gray-400 w-full mb-14'
        onClick={() => setIsMovilMenuOpen(false)}
      >
          <NavLink 
            to="/contacto"
            className = {({isActive}) => inactiveStyle}
          >
              Contacto
          </NavLink>
      </div>
    </div>
  )
}

export default MovilMenu