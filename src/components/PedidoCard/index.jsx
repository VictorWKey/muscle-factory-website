/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useContext, useState} from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShopContext } from '../../context';
import { Link } from 'react-router-dom';


function PedidoCard({
  id,
  imageUrl,
  title,
  price,
  quantity
}) {



  return (
    <Link to={`/suplementos/${id}`}>
      <div className='flex justify-between items-center w-full p-3 mb-3 border-b border-gray-400 cursor-pointer'>
        <div className='flex items-center w-full justify-between '>
          <figure className='h-16 w-16'>
            <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt="" />
          </figure>
          <p className='font-bold size-5 flex items-center justify-center text-xs mr-4'>{quantity}</p>
          
          <p className='text-xs font-bold w-32'>{title}</p>
          <p className='text-sm font-light '>${price} MXN</p>
        </div>
      </div>
    </Link>

  )
}

export default PedidoCard