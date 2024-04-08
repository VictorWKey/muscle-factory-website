// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './ShoppingCart.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShopContext } from '../../context'
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom'

function ShoppingCart() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
  } = useContext(ShopContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    
    localStorage.setItem('cartProducts', JSON.stringify(filteredProducts));
    setCartProducts(filteredProducts);
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex checkout-side-menu flex-col fixed right-0 bg-white border-l shadow-xl transition-transform duration-300`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl '>Carrito de compras</h2>
        <XMarkIcon
          className='w-6 h-6 cursor-pointer'
          onClick={closeCheckoutSideMenu}
        />
      </div>
      <div className='flex flex-col overflow-y-auto w-full px-6 flex-1'>
        {cartProducts.length === 0 ? (<p className='self-center font-light text-sm text-gray-400'>No hay productos agregados</p>) : undefined}
        {
          cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id = {product.id}
              quantity={product.quantity}
              imageUrl={product.image}
              title={product.name + " - " + product.brand}
              price={product.price}
              handleDelete = {handleDelete}
            />
          ))
        }
      </div>
      <div className='px-6 pt-2'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-xl'>${totalPrice(cartProducts)} MXN</span>
        </p>
        <button 
            className='w-full py-2 bg-primarylight text-white text-lg rounded-lg mb-6 mt-4'
            onClick={()=> closeCheckoutSideMenu()}
          >
            <Link className="size-full" to="/pedido">
              Realizar Pedido
            </Link>
        </button>
      </div>
    </aside>
  )
}

export default ShoppingCart