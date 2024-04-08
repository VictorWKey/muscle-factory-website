/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function PrimaryButton({ text, Icon, path }) {
  return (
    <Link to={path} className='flex gap-1 items-center justify-center text-white font-semibold bg-primarylight rounded py-2 px-4 sm:px-8 transition duration-300 ease-in-out hover:bg-primarydark hover:scale-110'>
      <div className='size-5 flex justify-center items-center'>
        {Icon ? <Icon/> : undefined}
      </div>
      <p>{text}</p>
    </Link>
  )
}

export default PrimaryButton