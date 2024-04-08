/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useContext, useState} from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShopContext } from '../../context';


function OrderCard({
  id,
  imageUrl,
  title,
  price,
  quantity,
  handleDelete
}) {

  const {
    cartProducts,
    setCartProducts
  } = useContext(ShopContext);

  const [value, setValue] = useState(quantity);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleProductQuantity = (id, isIncrement) => {
    const updatedCartProducts = cartProducts.map(product => {
      if (product.id === id) {
        return {
          ...product,
          quantity: isIncrement ? value + 1 : (value > 1 ? value - 1 : value)
        };
      }
      return product;
    });
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    setCartProducts(updatedCartProducts);
  };

  const handleClick = (e) => {
    if (!e.target.closest('.close')) {
      // Not clicked on the add icon button
      // Redirect to the Link
      window.location.href = `/suplementos/${id}`;
    }
  };

  return (
    <div 
      className='flex justify-between items-center w-full bg-gray-100 p-3 mb-3 rounded-lg shadow-md h-28 animate-fade-up animate-once cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex gap-2 items-center'>
        <figure className='h-14 w-14'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl[0]} alt="" />
        </figure>
        <div className='flex flex-col gap-1'>
          <p className='text-xs font-bold w-32'>{title}</p>
          <p className='text-sm font-light'>${price} MXN</p>
          <div className='flex flex-row items-center '>
            <button 
              className='size-5 border border-gray-300 p-1 flex items-center justify-center hover:text-primarylight hover:border-primarylight' 
              onClick={()=> {
                handleDecrement(),
                handleProductQuantity(id, false);
              }}
            >-</button>
            <p className='font-bold bg-white size-5 flex items-center justify-center border-y border-gray-300 text-xs'>{quantity}</p>
            <button 
              className='size-5 border border-gray-300 p-1 flex items-center justify-center hover:text-green-600 hover:border-green-600' 
              onClick={()=> {
                handleIncrement(),
                handleProductQuantity(id, true);
              }}
            >+</button>
          </div>
        </div>
        
      </div>
      <div className='flex gap-2 items-center close'>
        
        {handleDelete
            ?
          <XMarkIcon
            className='h-4 w-4 cursor-pointer hover:text-primarylight'
            onClick={() => handleDelete(id)}
          />
            :
          undefined}
      </div>
    </div>
  )
}

export default OrderCard