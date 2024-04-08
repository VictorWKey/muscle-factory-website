/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../context';
import Menu from '../icons/Menu';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { totalProducts } from '../../utils';


function NavBar() {

  const {
    cartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    isCheckoutSideMenuOpen,
    setSearchByTitle,
    totalPriceCartProducts
  } = useContext(ShopContext);

  const {
    setIsMovilMenuOpen
  } = useContext(ShopContext);

  const activeStyle = "py-0.5 px-4 rounded-lg text-primarylight font-bold underline underline-offset-8 decoration-2";
  const inactiveStyle = "py-0.5 px-4 rounded-lg text-white font-bold hover:underline hover:underline-offset-8 hover:text-primarylight hover:decoration-2 transition duration-300 ease-linear";

  return (
    <nav className='flex justify-between lg:items-center w-full h-auto bg-secondarydark fixed top-0 z-[10]'>
      <div 
        className='size-10 ml-3 my-2 lg:hidden'
        onClick={() => setIsMovilMenuOpen(true)}
      >
        <Menu/>
      </div>

      <Link to="/" onClick={() => setSearchByTitle('')}>
        <figure className='ml-0 lg:ml-2 size-14 p-2 z-50 hover:cursor-pointer'>
          <img className='size-full object-cover' src="../../../public/img/musclefactory/muscle-factory-logo.png" alt="" />
        </figure>
      </Link>

      <div className='flex lg:mr-12 items-center justify-center mr-6 gap-4'>
        <ul className='hidden lg:flex justify-center items-center gap-6'>
          <li >
            <NavLink 
              to="/"
              className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
              onClick={() => setSearchByTitle('')}
            >
                Inicio
            </NavLink>     
          </li>

          <li>
            <NavLink 
              to="/suplementos"
              className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
              onClick={() => setSearchByTitle('')}
            >
                Suplementos
            </NavLink>
          </li>

          <li >
            <NavLink 
              to="/entrenamientos"
              className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
              onClick={() => setSearchByTitle('')}
            >
                Entrenamientos
            </NavLink>
          </li>

          <li >
            <NavLink 
              to="/membresias"
              className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
              onClick={() => setSearchByTitle('')}
            >
                Membresías
            </NavLink>
          </li>

          <li >
            <NavLink 
              to="/contacto"
              className = {({isActive}) => isActive ? activeStyle : inactiveStyle}
              onClick={() => setSearchByTitle('')}
            >
                Contacto
            </NavLink>
          </li>
        </ul>
        
        <div 
          className='flex items-center cursor-pointer'
          onClick={() => {
            isCheckoutSideMenuOpen ? closeCheckoutSideMenu(): openCheckoutSideMenu()
          }}
        >
          <div className='relative cursor-pointer group'>
            <ShoppingCartIcon className={`size-6 group-hover:text-primarylight transition duration-300 ease-linear ${isCheckoutSideMenuOpen ? "text-primarylight" : "text-white"}`}/>
            <p className='absolute font-bold text-white text-xs bg-primarylight size-5 flex items-center justify-center rounded-full -top-2 -right-2'>{totalProducts(cartProducts)}</p>

          </div>         
        </div>
        {
          totalPriceCartProducts > 0 
            ?
          (<p className='text-white text-sm hidden sm:block'>${totalPriceCartProducts}</p>)
            :
          undefined
        }
      </div>
    </nav>
  )
}

export default NavBar