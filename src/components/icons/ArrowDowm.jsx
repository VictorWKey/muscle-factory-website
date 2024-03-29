/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function ArrowDowm() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulando un tiempo de carga
    setTimeout(() => {
      setLoaded(true);
    }, 400);
  }, []);

  return (
    <svg className={`bg-primarylight rounded-full size-10 p-1 absolute bottom-12 ${loaded ? "animate-bounce animate-infinite" : "animate-fade-up animate-once animate-ease-in-out"}  `} xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 13l-6 6" /><path d="M6 13l6 6" /></svg>
  )
}

export default ArrowDowm