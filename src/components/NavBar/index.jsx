/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../context';
import Menu from '../icons/Menu';

function NavBar() {

  const {
    isMovilMenuOpen,
    setIsMovilMenuOpen
  } = useContext(ShopContext);

  const activeStyle = "py-0.5 px-4 rounded-lg text-primarylight font-bold underline underline-offset-8 decoration-2";
  const inactiveStyle = "py-0.5 px-4 rounded-lg text-white font-bold hover:underline hover:underline-offset-8 hover:text-primarylight hover:decoration-2 transition duration-300 ease-linear";

  return (
    <nav className='flex justify-between sm:items-center w-full h-auto bg-secondarydark fixed top-0 z-[10] animate-fade-down animate-once animate-ease-in-out'>
      <Link to="/">
        <figure className='ml-2 sm:ml-6 size-14 p-2 z-50 hover:cursor-pointer'>
          <img className='size-full object-cover' src="../../../public/muscle-factory-logo.png" alt="" />
        </figure>
      </Link>
      
      <ul className='hidden sm:flex justify-center gap-6 mr-16'>
        <li >
          <NavLink 
            to="/"
            className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
          >
              Inicio
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/suplementos"
            className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
          >
              Suplementos
          </NavLink>
        </li>

        <li >
          <NavLink 
            to="/entrenamientos"
            className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
          >
              Entrenamientos
          </NavLink>
        </li>

        <li >
          <NavLink 
            to="/membresias"
            className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
          >
              Membresías
          </NavLink>
        </li>

        <li >
          <NavLink 
            to="/contacto"
            className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
          >
              Contacto
          </NavLink>
        </li>
      </ul>
      <div 
        className='size-10 my-2 mx-4 sm:hidden'
        onClick={() => setIsMovilMenuOpen(true)}
      >
        <Menu/>
      </div>
    </nav>
  )
}

export default NavBar