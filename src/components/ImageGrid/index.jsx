/* eslint-disable no-unused-vars */
import React from "react";
import './ImageGrid.css'

function ImageGrid() {
  return (
    <div className="parent w-full max-w-5xl">
      <div className="div1 border overflow-hidden flex justify-center items-center">
        <img className="object-cover size-full" src="../../../public/img/entrenamientos/v-1.jpg"/>
      </div>
      <div className="div2 border overflow-hidden flex justify-center items-center">
        <img className="size-full object-cover" src="../../../public/img/entrenamientos/h-1.jpg"/>
      </div>
      <div className="div3 border overflow-hidden flex justify-center items-center">
        <img className="size-full object-cover" src="../../../public/img/entrenamientos/h-3.jpg"/>
      </div>
      <div className="div4 border overflow-hidden flex justify-center items-center">
        <img className="size-full object-cover" src="../../../public/img/entrenamientos/h-4.jpg"/>
      </div>
      <div className="div5 border overflow-hidden flex justify-center items-center">
        <img className="size-full object-cover" src="../../../public/img/entrenamientos/h-5.jpg"/>
      </div>
      <div className="div6 border overflow-hidden flex justify-center items-center">
        <img className="size-full object-cover" src="../../../public/img/entrenamientos/v-5.jpg"/>
      </div>
      <div className="div7 border overflow-hidden flex justify-center items-center">
        <img className="size-full object-cover" src="../../../public/img/entrenamientos/h-6.jpg"/>
      </div>      
      <div className="div8 border overflow-hidden flex justify-center items-center">
        <img className="size-full object-cover" src="../../../public/img/entrenamientos/v-9.jpg"/>
      </div>
      <div className="div9 border overflow-hidden flex justify-center">
        <img className="object-cover size-full" src="../../../public/img/entrenamientos/v-2.jpg"/>
      </div>
      <div className="div10 border overflow-hidden flex justify-center">
        <img className="object-cover size-full" src="../../../public/img/entrenamientos/v-7.jpg"/>
      </div>
    </div>
  );
}

export default ImageGrid;
