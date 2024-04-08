/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../context'
import { CheckCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { useMediaQuery } from '@react-hook/media-query';
import { Link } from 'react-router-dom';




function SuplementCard({id, name, description, brand, price, category, image, sales}) {

  const {
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    setIsNotiCartOpen,
    isCheckoutSideMenuOpen
  }= useContext(ShopContext);

  const isMobile = useMediaQuery('(max-width: 1280px)');

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    
    localStorage.setItem('cartProducts', JSON.stringify(filteredProducts));
    setCartProducts(filteredProducts);
    
  }

  const AddIconButton = ({isInCart, onItemAdded}) => {
    if (isInCart) {
      return (
        <CheckCircleIcon
          className='absolute top-0 right-6 sm:right-0 w-12 sm:w-8 m-2 text-primarylight transition duration-300 ease-in-out hover:text-primarydark cursor-pointer add-icon-button'
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
          }}
        />
      )
    } else {
      return (
        <PlusCircleIcon
          className='absolute top-0 right-6 sm:right-0 w-12 sm:w-8 m-2 text-secondarylight transition duration-300 ease-in-out hover:text-secondarydark cursor-pointer add-icon-button'
          onClick={onItemAdded}
        />
      )
    }
  }

  const addProductToCart = (event) => {
    event.stopPropagation();
    
    const previousCartProducts = [...cartProducts, {id, name, description, brand, price, category, image, sales, quantity:1}]
    localStorage.setItem('cartProducts', JSON.stringify(previousCartProducts));

    setCartProducts(previousCartProducts);
    if(!isMobile){
      openCheckoutSideMenu();
    } else {
      if(!isCheckoutSideMenuOpen){
        setIsNotiCartOpen(true);

        setTimeout(() => {
          // Código que deseas ejecutar después de unos segundos
          setIsNotiCartOpen(false);
        }, 3000);
      }
    }


  }

  const isInCart = cartProducts.filter(product => product.id == id).length > 0;

  const handleClick = (e) => {
    if (!e.target.closest('.add-icon-button')) {
      // Not clicked on the add icon button
      // Redirect to the Link
      window.location.href = `/suplementos/${id}`;
    }
  };

  return (

    <div 
      className="w-full sm:w-56 group flex-col overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
      onClick={handleClick}
    >

      <div className='h-64 sm:h-56 w-full overflow-hidden relative'>
        <img
          src={image[0]}
          alt=""
          className="h-full w-full object-contain sm:object-cover transition duration-500 group-hover:scale-105 sm:h-56 p-8"
        />
        <span className="bg-secondarydark text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded absolute bottom-1 left-3">{category}</span>
        <AddIconButton isInCart={isInCart} onItemAdded={addProductToCart}/>
      </div>

      <div className="flex flex-col justify-between border border-gray-100 bg-white p-4 h-52">
        {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span> */}
        <div className='flex flex-col'>
          <h3 className="text-base font-bold text-gray-900">{name} - {brand}</h3>

          <p className="mt-1.5 text-base text-gray-700">${price} MXN</p>     
          <p className='text-xs font-light h-10 truncate text-gray-500 mt-2'>{description}</p>
          
        </div>

        <button
          className="block w-full rounded bg-primarylight p-3 text-sm font-medium transition hover:scale-105 text-white "
        >
          Detalles
        </button>
      </div>

    </div>

  )
}

export default SuplementCard