/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function SuplementCard({ name, price, image }) {
  return (
    <a href="#" className="w-56 group relative block overflow-hidden">

      <img
        src={image}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span> */}

        <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

        <p className="mt-1.5 text-sm text-gray-700">${price}</p>      
        <button
          className="mt-4 block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
        >
          Detalles
        </button>

      </div>
    </a>
  )
}

export default SuplementCard