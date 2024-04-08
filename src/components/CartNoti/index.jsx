/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../../context'

function CartNoti() {

  const { 
    isNotiCartOpen,
    setIsNotiCartOpen,
    openCheckoutSideMenu
  } = useContext(ShopContext);


  return (
    <section className={`${isNotiCartOpen ? 'translate-y-0 shadow-2xl ' : '-translate-y-full'} rounded-md w-full 2xl:w-auto fixed z-[9] top-[56px] bg-white transition-transform duration-300`}>
      <div className="p-8 text-center">
        <h2 className=" font-bold">Producto agregado correctamente!</h2>

        <button
          className="mt-3 inline-block w-full rounded-md bg-primarylight py-2 text-sm font-bold text-white shadow-xl"
          onClick={() => {
            openCheckoutSideMenu(),
            setIsNotiCartOpen(false)
          }}
        >
          Ver carrito
        </button>
      </div>
    </section>
  )
}

export default CartNoti