/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import ImageGrid from '../../components/ImageGrid'
import Footer from "../../components/Footer"

function Entrenamientos() {
  return (
      <main id="top" className="w-full flex flex-col justify-center items-center sm:pt-0 bg-black">
        {/* HEADER */}
        <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pb-16 pt-28 bg-black">
          <div className='sm:pl-6 xl:p-0'>
            <figure className="size-72 xl:size-[340px] 2xl:size-[420px] rounded-full  overflow-hidden">
              <img
                src="../../../img/entrenamientos/oscar-1.png"
                alt="Foto de Victor"
                className="object-cover size-full "
              />
            </figure>
          </div>
          <div className="flex flex-col z-10 w-full xl:max-w-2xl 2xl:max-w-3xl pl-6 pr-6 sm:pl-0 sm:pr-6 xl:pl-0">

            <h1 className="text-3xl sm:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold text-primarylight gap-2 text-pretty">OSCAR ÁVILA</h1>

            
            <h2 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-extrabold text-pretty text-white mb-5">ENTRENADOR PERSONAL PROFESIONAL</h2>
            <h3 className="font-normal text-base xl:text-xl 2xl:text-2xl text-pretty text-white">Nuestro servicio de entrenamiento personalizado está diseñado para ayudarte a alcanzar tus objetivos de fitness de manera efectiva y segura. Trabajarás de cerca con nuestro entrenador certificado, Oscar Ávila, quien tiene más de 10 años de experiencia en el campo del fitness.</h3>

            <ul className="ml-1 sm:ml-0 mt-6 flex gap-6 items-center">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100063471193891&sk=photos"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-primarylight"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="size-9 2xl:size-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/musclefactory2024/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-primarylight"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="size-9 2xl:size-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=524622574618&text&type=phone_number&app_absent=0"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-1 items-center justify-center text-white font-semibold bg-primarylight rounded py-2 px-4 sm:px-8 transition duration-300 ease-in-out hover:bg-primarydark hover:scale-110"
                >
                  
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp size-6 2xl:size-7"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                  <span>Contáctame</span>
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className='w-full flex justify-center items-center bg-white py-16'>
          <div className='flex flex-col w-full justify-center items-center gap-6 max-w-5xl px-6 sm:px-0'>
            <h1 className='text-primarylight text-4xl sm:text-5xl font-extrabold sm:mt-0 self-center text-pretty text-center'>BENEFICIOS DEL ENTRENAMIENTO PERSONALIZADO</h1>
            <div className='flex gap-4 justify-center flex-wrap'>
              <div className='flex flex-col justify-center p-6 shadow-lg w-full sm:w-60 '>
                <svg className='size-32 self-center mb-8' enableBackground="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="black" height="65" width="65" x="223.5" y="244.6"/><rect fill="black" height="65" width="65" x="325.4" y="244.6"/><rect fill="black" height="65" width="65" x="121.7" y="343.4"/><rect fill="black" height="65" width="65" x="223.5" y="343.4"/><rect fill="black" height="65" width="65" x="325.4" y="343.4"/><path d="M155.8,123.8L155.8,123.8c-16,0-29.1-13.1-29.1-29.1V29.2c0-16,13.1-29.1,29.1-29.1h0   c16,0,29.1,13.1,29.1,29.1v65.6C184.9,110.7,171.8,123.8,155.8,123.8z" fill="black"/><path d="M430.7,61.9h-33v39.7c0,24.5-19.7,44.5-43.8,44.5h-11.6c-24.1,0-43.8-20-43.8-44.5V61.9h-90.4v39.7   c0,24.5-19.7,44.5-43.8,44.5h-11.6c-24.1,0-43.8-20-43.8-44.5V61.9H83.6c-27.1,0-49.3,22.5-49.3,50v350c0,27.5,22.2,50,49.3,50   h347.2c27.1,0,49.3-22.5,49.3-50v-350C480,84.4,457.8,61.9,430.7,61.9z M422.3,414.7c0,17.1-13.8,31.1-30.6,31.1h-269   c-16.8,0-30.6-14-30.6-31.1V238.3c0-17.1,13.8-32.3,30.6-32.3h269c16.8,0,30.6,15.2,30.6,32.3V414.7z" fill="black"/><path d="M348.3,123.8L348.3,123.8c-16,0-29.1-13.1-29.1-29.1V29.2c0-16,13.1-29.1,29.1-29.1h0   c16,0,29.1,13.1,29.1,29.1v65.6C377.4,110.7,364.3,123.8,348.3,123.8z" fill="black"/></g></svg>
                <h2 className='text-xl font-bold  mb-4 text-primarylight'>Planificación Personalizada</h2>
                <p className='text-sm font-medium'>Cada sesión de entrenamiento se adapta a tus necesidades específicas y metas individuales.</p>
              </div>
              <div className='flex flex-col justify-center p-6 shadow-lg w-full sm:w-60'>
                <svg className='self-center size-32' height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M33 24c2.76 0 4.98-2.24 4.98-5s-2.22-5-4.98-5c-2.76 0-5 2.24-5 5s2.24 5 5 5zm-15-2c3.31 0 5.98-2.69 5.98-6s-2.67-6-5.98-6c-3.31 0-6 2.69-6 6s2.69 6 6 6zm15 6c-3.67 0-11 1.84-11 5.5V38h22v-4.5c0-3.66-7.33-5.5-11-5.5zm-15-2c-4.67 0-14 2.34-14 7v5h14v-4.5c0-1.7.67-4.67 4.74-6.94C21 26.19 19.31 26 18 26z"/></svg>
                <h2 className='text-xl font-bold  mb-4 text-primarylight'>Supervisión Profesional</h2>
                <p className='text-sm font-medium'>Nuestro entrenador te guiará en cada ejercicio para asegurarse de que estás realizando los movimientos de manera correcta y segura.</p>
              </div>

              <div className='flex flex-col justify-center p-6 shadow-lg w-full sm:w-60'>
                <svg className='size-32 self-center mb-6' viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"/></svg>
                <h2 className='text-xl font-bold  mb-4 text-primarylight'>Motivación y Apoyo</h2>
                <p className='text-sm font-medium'>Obtendrás el estímulo necesario para mantenerte comprometido y enfocado en tus objetivos.</p>
              </div>

              <div className='flex flex-col justify-center p-6 shadow-lg w-full sm:w-60'>
                <svg className='size-32 self-center mb-6' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Biceps"><path d="M376.7809,287.8908a105.6316,105.6316,0,0,1,4.9307,9.7747,12.6156,12.6156,0,0,1-7.9916,17.085,12.8146,12.8146,0,0,1-15.4685-7.14c-26.3737-59.7889-108.8917-73.8287-153.2552-25.4984a92.6432,92.6432,0,0,0-24.8194,52.6135,12.8591,12.8591,0,0,1-12.667,11.4747,12.685,12.685,0,0,1-12.6649-14.0252,119.248,119.248,0,0,1,50.1513-83.47V193.2006h68a34,34,0,0,0,34-34V96.2159a29.84,29.84,0,0,0-14.875-25.7553l-22.186-12.8351A42.19,42.19,0,0,0,219.02,64.3409l-88.9947,88.9947a76.2219,76.2219,0,0,0-17.6807,27.54l-56.8645,153.34a55.2822,55.2822,0,0,0,33.5746,71.4c44.4548,15.47,125.375,34.085,183.9412,34.085,28.9116-1.9486,56.9309-13.2579,85.7636-3.7374a324.569,324.569,0,0,0,34.6807,7.1377l-4.59-13.8551a12.8111,12.8111,0,0,1,8.5544-16.3886c6.6538-2,13.6216,2.3474,15.8231,8.9373l12.7685,38.2213h21.2913a12.7087,12.7087,0,0,0,12.7087-12.7087V291.1383a12.7871,12.7871,0,0,0-13.3519-12.7047A342.1659,342.1659,0,0,0,376.7809,287.8908Zm-58.0556,75.5651a226.9552,226.9552,0,0,1-85.34,7.48c-16.5185-2.0669-14.0553-26.82,2.6355-25.33a203.5,203.5,0,0,0,75.6492-6.63C327.9018,334.6,334.8,358.5527,318.7253,363.4559Z"/></g></svg>
                  <h2 className='text-xl font-bold  mb-4 text-primarylight'>Resultados Efectivos</h2>
                <p className='text-sm font-medium'>Con un enfoque personalizado, verás resultados más rápidamente que con un entrenamiento genérico.</p>
              </div>
            </div>
            


          </div>
        </div>

        {/* GALERIA */}
        <div className='my-16 sm:my-16 flex justify-center items-center flex-col'>
          <h1 className=' text-primarylight text-4xl sm:text-7xl font-extrabold sm:mt-0 self-center mb-6'>CREANDO ATLETAS</h1>
          <ImageGrid/>
        </div>

                {/* HORARIOS */}
                <div className='w-full flex justify-center items-center bg-white py-16'>
          <div className='flex flex-col w-full justify-center items-center gap-6 max-w-5xl px-6'>
            <h1 className='text-primarylight text-5xl font-extrabold sm:mt-0 self-center text-center'>HORARIOS DISPONIBLES</h1>
            <p className='font-bold text-lg self-center '>Para reservar un horario, por favor contáctanos para verificar la disponibilidad</p>
            <div className='flex gap-4 flex-col justify-center items-center lg:flex-row w-full xl:w-auto'>
              <div className='flex flex-col justify-center items-center border-2 p-8 border-black w-full xl:w-auto'>
                <h2 className='font-bold text-3xl text-primarylight mb-4'>Mañana</h2>
                <div className='flex sm:flex-row justify-center items-center flex-col gap-4 sm:gap-16 w-full xl:w-auto'>
                  <div className='flex flex-col justify-center items-center w-full sm:w-44 '>
                    <p className='font-bold text-lg'>Lunes a Viernes</p>
                    <p className='font-light text-lg'>6:00 AM - 10:00 AM</p>
                  </div>
                  <div className='flex flex-col justify-center items-center w-full sm:w-44 '>
                    <p className='font-bold text-lg'>Sábado</p>
                    <p className='font-light text-lg'>6:00 AM - 10:00 AM</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col justify center items-center border-2 p-8 border-black w-full xl:w-auto'>
                <h2 className='font-bold text-3xl text-primarylight mb-4'>Tarde</h2>
                <div className='flex gap-4 sm:gap-16 justify-center items-center sm:flex-row flex-col w-full xl:w-auto'>
                  <div className='flex flex-col justify-center items-center w-full sm:w-44 '>
                    <p className='font-bold text-lg'>Lunes a Viernes</p>
                    <p className='font-light text-lg'>4:00 PM - 8:00 PM</p>
                  </div>
                  <div className='flex flex-col justify-center items-center w-full sm:w-44 '>
                    <p className='font-bold text-lg'>Sábado</p>
                    <p className='font-light text-lg'>1:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>


        

        {/* PRECIOS */}
        <div className='w-full bg-primarylight flex justify-center items-center'>
          <div className='flex flex-col w-full justify-center items-center gap-6 max-w-5xl py-16 px-6 sm:px-6 xl:px-0'>

            <h1 className=' text-white text-4xl sm:text-5xl font-extrabold sm:mt-0 self-center text-center'>PRECIOS Y PAQUETES DE ENTRENAMIENTO PERSONALIZADO</h1>
            <h2 className='text-white font-bold text-3xl mt-6'>Sesiones Individuales</h2>
            <div className='flex flex-col flex-wrap w-full md:flex-row gap-6 justify-center'>
              <div className='w-full sm:w-56 py-12 sm:py-8 px-6 border-2 border-black flex flex-col gap-3 rounded-3xl bg-transparent items-center shadow-xl h-auto '>
                <h1 className='text-3xl sm:text-2xl text-black font-extrabold'>Sesión</h1>
                <div className='w-full border-b  border-black'></div>
                <div className='flex flex-col gap-1'>
                  <p className='text-white text-xl sm:text-xs font-bold text-center'>Pago unico de:</p>
                  <h2 className='text-2xl sm:text-xl text-white font-semibold'>$100.00 MXN</h2>
                </div>       
              </div>

              <div className='w-full sm:w-56 py-12 sm:py-8 px-6 border-2 border-black flex flex-col gap-3 rounded-3xl bg-transparent  items-center shadow-xl h-auto'>
                <h1 className='text-4xl sm:text-2xl text-black font-extrabold'>5 Sesiones</h1>
                <div className='w-full border-b border-black'></div>
                <div className='flex flex-col gap-1 items-center'>
                  <p className='text-white text-xl sm:text-xs font-bold text-center'>Pago unico de:</p>
                  <h2 className='text-2xl sm:text-xl text-white font-semibold'>$400.00 MXN</h2>
                </div>
                <h4 className=' text-white font-semibold text-sm'>¡Ahorra 5%!</h4>  
              </div>

              <div className='w-full sm:w-56 py-12 sm:py-8 px-6 border-2 border-black flex flex-col gap-3 rounded-3xl bg-transparent  items-center shadow-xl h-auto'>
                <h1 className='text-4xl sm:text-2xl text-black font-extrabold'>10 Sesiones</h1>
                <div className='w-full border-b border-black'></div>
                <div className='flex flex-col gap-1'>
                  <p className='text-white text-xl sm:text-xs font-bold text-center'>Pago unico de:</p>
                  <h2 className='text-2xl sm:text-xl text-white font-semibold'>$850.00 MXN</h2>
                </div> 
                <h4 className=' text-white font-semibold text-sm'>¡Ahorras 10%!</h4>           
              </div>
            </div>

            <h2 className='text-white font-bold text-3xl mt-6 self-center'>Sesiones en Grupo (3 personas o más)</h2>
            <div className='flex flex-col flex-wrap w-full md:flex-row gap-6 justify-center'>
              <div className='w-full sm:w-56 py-12 sm:py-8 px-6 border-2 border-black flex flex-col gap-3 rounded-3xl bg-transparent  items-center shadow-xl h-auto'>
                <h1 className='text-3xl sm:text-2xl text-black font-extrabold'>Sesión</h1>
                <div className='w-full border-b border-black'></div>
                <div className='flex flex-col gap-1'>
                  <p className='text-white text-xl sm:text-xs font-bold text-center'>Pago unico de:</p>
                  <h2 className='text-2xl sm:text-xl text-white font-semibold'>$80.00 MXN</h2>
                </div>       
              </div>

              <div className='w-full sm:w-56 py-12 sm:py-8 px-6 border-2 border-black flex flex-col gap-3 rounded-3xl bg-transparent  items-center shadow-xl h-auto'>
                <h1 className='text-4xl sm:text-2xl text-black font-extrabold'>5 Sesiones</h1>
                <div className='w-full border-b border-black'></div>
                <div className='flex flex-col gap-1 items-center'>
                  <p className='text-white text-xl sm:text-xs font-bold text-center'>Pago unico de:</p>
                  <h2 className='text-2xl sm:text-xl text-white font-semibold'>$320.00 MXN</h2>
                </div>
                <h4 className=' text-white font-semibold text-sm'>¡Ahorra 5%!</h4>  
              </div>

              <div className='w-full sm:w-56 py-12 sm:py-8 px-6 border-2 border-black flex flex-col gap-3 rounded-3xl bg-transparent  items-center shadow-xl h-auto'>
                <h1 className='text-4xl sm:text-2xl text-black font-extrabold'>10 Sesiones</h1>
                <div className='w-full border-b border-black'></div>
                <div className='flex flex-col gap-1'>
                  <p className='text-white text-xl sm:text-xs font-bold text-center'>Pago unico de:</p>
                  <h2 className='text-2xl sm:text-xl text-white font-semibold'>$550.00 MXN</h2>
                </div> 
                <h4 className=' text-white font-semibold text-sm'>¡Ahorra 10%!</h4>           
              </div>
            </div>
          </div>
        </div>


        


        <Footer/>
      </main>
  )
}

export default Entrenamientos