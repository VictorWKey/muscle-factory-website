/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
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
    <nav className='flex justify-end sm:justify-center w-full h-auto py-3 bg-secondarydark fixed top-0 '>
      <ul className='hidden sm:flex justify-center gap-6'>
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
              Membresias
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
        className='size-10 mx-4 sm:hidden'
        onClick={() => setIsMovilMenuOpen(true)}
      >
        <Menu/>
      </div>
    </nav>
  )
}

export default NavBar