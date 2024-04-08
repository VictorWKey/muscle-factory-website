/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';

function Suplemento() {

  const isMobile = useMediaQuery('(max-width: 1280px)');

  const [indexOfImageToShow, setIndexOfImageToShow] = useState(0);

  const {
    items,
    cartProducts,
    setCartProducts,
    setIsNotiCartOpen,
    openCheckoutSideMenu
  } = useContext(ShopContext);

  const {
    id
  } = useParams();

  const product = items?.find(item => item.id == id);

  console.log(product);

  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const addProductToCart = (event) => {
    event.stopPropagation();

    const searchProductInCartProducts = cartProducts.filter(item => item.id == product?.id);

    console.log(searchProductInCartProducts);
    
    if(searchProductInCartProducts.length == 0){
      const previousCartProducts = [...cartProducts, {id: product?.id, name: product?.name, description:product?.description, brand:product?.brand, price: product?.price, category: product?.category, image: product?.image, sales: product?.sales, quantity: value}]
      console.log(previousCartProducts)
      localStorage.setItem('cartProducts', JSON.stringify(previousCartProducts));
      setCartProducts(previousCartProducts);

      if(!isMobile){
        openCheckoutSideMenu();
      } else {
        setIsNotiCartOpen(true);
  
        setTimeout(() => {
          // Código que deseas ejecutar después de unos segundos
          setIsNotiCartOpen(false);
        }, 2000);
      }

      setTimeout(() => {
        setIsNotiCartOpen(false);
      }, 2000);

    } else {
      const previousCartProducts = cartProducts.map(item => {
        if(item.id == product?.id){
          return {id: item.id, name: item.name, description:item.description, brand:item.brand, price: item.price, category: item.category, image: item.image, sales: item.sales, quantity: item.quantity + value}
        }
        return item;
      })
      localStorage.setItem('cartProducts', JSON.stringify(previousCartProducts));
      setCartProducts(previousCartProducts);

      if(!isMobile){
        openCheckoutSideMenu();
      } else {
        setIsNotiCartOpen(true);
  
        setTimeout(() => {
          // Código que deseas ejecutar después de unos segundos
          setIsNotiCartOpen(false);
        }, 2000);
      }

      setTimeout(() => {
        setIsNotiCartOpen(false);
      }, 2000);
    }

  }
  
  return (
    <section className='w-full sm:h-screen flex justify-center items-center p-6'>
      <div className='flex flex-col sm:flex-row my-20 lg:mt-36 max-w-5xl'>

        <figure className='flex flex-col sm:w-auto self-center mb-8 2xl:mb-0 gap-2 sm:mr-6'>

          <div className='w-auto'>
            <img className='size-full sm:size-[360px]  2xl:size-[520px] border shadow-sm animate-fade' src={product?.image[indexOfImageToShow]} alt="" />
          </div>
          <div className='flex flex-row justify-center'>
            {
              product?.image?.map((img, i) => (
                <img key={i} className={`size-20 border ${i == indexOfImageToShow ? "border-black" : "border-transparent"} mr-2`} onClick={() => setIndexOfImageToShow(i)} src={product?.image[i]} alt="" />
              ))
            }
          </div>
        </figure>

        <div className='flex flex-col sm:w-[320px] 2xl:w-[500px] sm:py-4'>
          <h1 className='text-2xl 2xl:text-4xl font-extrabold mb-2 text-pretty'>{product?.name} - {product?.brand}</h1>
          <h2 className='text-xl sm:text-2xl font-semibold mb-4 2xl:mb-8'>${product?.price} MXN</h2>
          <p className='text-pretty sm:text-sm 2xl:text-2xl mb-12'>{product?.description}</p>
          <div className='flex'>
            <div className='flex mr-4'>
              <button 
                  className='size-10 2xl:size-14 border border-gray-300 p-1 flex items-center justify-center hover:text-primarylight hover:border-primarylight' 
                  onClick={()=> {
                    handleDecrement()
                  }}
                >-</button>
                <p className='size-10 font-bold bg-white 2xl:size-14 flex items-center justify-center border-y border-gray-300 text-xs'>{value}</p>
                <button 
                  className='size-10 2xl:size-14 border border-gray-300 p-1 flex items-center justify-center hover:text-green-600 hover:border-green-600' 
                  onClick={()=> {
                    handleIncrement()

                  }}
                >+</button>
            </div>
            <button
              onClick={(e) => {
                addProductToCart(e)
              }}
              className='w-full bg-primarylight text-white py-2 2xl:py-4 px-2 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-primarydark hover:scale-105'
            >
              Agregar al carrito
            </button>

          </div>

        </div>


      </div>

    </section>
  )
}

export default Suplemento;