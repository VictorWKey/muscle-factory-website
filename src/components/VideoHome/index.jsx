/* eslint-disable no-unused-vars */
import React from 'react';

function VideoHome() {
  return (
    <video
      autoPlay
      muted
      loop
      className="flex justify-center items-center w-full h-screen object-cover absolute z-[-2] top-0"

    >
      <source src="../../../public/img/musclefactory/home-video.mp4" type="video/mp4" />
      Tu navegador no admite la etiqueta de video.
      
    </video>
  );
}

export default VideoHome;
