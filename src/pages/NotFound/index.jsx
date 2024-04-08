/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

        <p className="mt-4 text-gray-500">Esta página no existe</p>

        <Link
          to="/"
          className="mt-6 inline-block rounded bg-primarylight px-5 py-3 text-sm font-medium text-white hover:bg-primarydark focus:outline-none focus:ring"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound