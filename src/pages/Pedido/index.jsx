/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react'
import PedidoCard from '../../components/PedidoCard'
import { ShopContext } from '../../context';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';

function Pedido() {
  const form = useRef(null);

  const isMobile = useMediaQuery('(max-width: 	640px)');

  const {
    cartProducts,
    setCartProducts,

  } = useContext(ShopContext);

  const onSendOrder = () => {
    const formData = new FormData(form.current);

    const completeName = formData.get('nombre-completo');
    const paymentMethod = formData.get('metodo');
    const payWith = formData.get('pagare');
    const pickUp = formData.get('pasare');

    const data = {
      nombreCompleto: completeName,
      metodo: payWith,
      pagareCon: paymentMethod,
      pasareEn: pickUp
    }

    if((data?.nombreCompleto?.length > 0 || data?.nombreCompleto) && (data?.metodo?.length > 0 || data?.metodo) && (data?.pagareCon?.length > 0 || data?.pagareCon) && (data?.pasareEn?.length > 0 || data?.pasareEn)){

      const cartItems = cartProducts.map(item => (
        `${item.quantity} x ${item.name} - ${item.brand} ($${item.price.toFixed(2)})`
      )).join('\n')

      const subtotal = cartProducts.reduce((acc, item) => acc + item.price, 0);
      const total = subtotal;

      const orderSummary = isMobile ? `
👋 Hola que tal, soy ${completeName} y mi pedido es el siguiente:
      
${cartItems}

Total: $${total.toFixed(2)}

💸 Pagaré con: ${payWith} con ${paymentMethod}

⏰ Pasaré a recoger en ${pickUp}

${completeName}, tu pedido se está preparando con atencion y cuidado.

¡Muchas Gracias! 🚀
` : `
Hola que tal, soy ${completeName} y mi pedido es el siguiente:
      
${cartItems}

Total: $${total.toFixed(2)}

Pagaré con: ${payWith} con ${paymentMethod}

Pasaré a recoger en ${pickUp}

${completeName}, tu pedido se está preparando con atencion y cuidado.

¡Muchas Gracias! 
`;

      const encodedOrder = encodeURIComponent(orderSummary)
      const whatsappLink = `https://wa.me/524622574618?text=${encodedOrder}`;

      window.open(whatsappLink, '_blank');
    } else {
      console.log("Completa los campos")
    }

  }

  return (
    <section className='my-28 w-full flex items-center justify-center'>
      <div className='w-full max-w-xl flex flex-col justify-center items-center p-6'>
        <h1 className='text-3xl font-bold mb-4'>Resumen del pedido</h1>
        <div className='flex flex-col w-full'>
          {cartProducts.length === 0 ? (<p className='self-center font-light text-sm text-gray-400'>No hay productos agregados</p>) : undefined}
          {
            cartProducts.map((product) => (
              <PedidoCard
                key={product.id}
                id = {product.id}
                quantity={product.quantity}
                imageUrl={product.image}
                title={product.name + " - " + product.brand}
                price={product.price}
              />
            ))
          }
        </div>

        <div className='w-full flex flex-col'>
          <h2 className='text-2xl font-semibold my-4'>Completar datos: </h2>
          <form
            className='flex flex-col'
            onClick={e => e.preventDefault()}
            onSubmit={e => e.preventDefault()}
            ref={form}
          >
            <label
              htmlFor='nombre-completo'
              className=' mb-1 font-bold'
            >
              Nombre completo:
            </label>
            <input
              type='text'
              className='w-full py-2 border border-black mb-4 p-3'
              placeholder='Ej. Victor Angel Lopez Romero'
              id='nombre-completo'
              name='nombre-completo'
            />

            <label
              htmlFor='pagare'
              className='mb-1 font-bold'
            >
              Pagare con:
            </label>
            <input
              type='text'
              className='w-full py-2 border border-black mb-4 p-3'
              placeholder='Ej. 2 billetes de 500 pesos'
              id='pagare'
              name='pagare'
            />

            <label
              htmlFor='metodo'
              className='mb-1 font-bold'
            >
              Metodo de pago:
            </label>
            <select
              className='w-full py-2 border border-black mb-4 p-3'
              id='metodo'
              name='metodo'
            >
              <option value=''>Selecciona una opción</option>
              <option value='Tarjeta'>Tarjeta</option>
              <option value='Efectivo'>Efectivo</option>
            </select>

            <label
              htmlFor='pasare'
              className='mb-1 font-bold'
            >
              Pasare a recogerlo en:
            </label>
            <input
              type='text'
              className='w-full py-2 border border-black mb-4 p-3'
              placeholder='Ej. 30 minutos'
              id='pasare'
              name='pasare'
            />

            <button
              type='submit'
              className='w-full bg-primarylight text-white py-4 px-2 mt-3 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-primarydark hover:scale-105'
              onClick={() => onSendOrder()}
            >
              Enviar pedido
            </button>



          </form>


        </div>
      </div>
    </section>
  )
}

export default Pedido