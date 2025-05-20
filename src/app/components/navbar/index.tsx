"use client";

import { useLenis } from "lenis/react";
import React from 'react'

const Navbar = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <header className='group fixed top-0 left-0 z-50'>
      <div className='flex items-center justify-center'>
        <svg className="cap-svg group-hover:scale-[0.95] transition-all" enableBackground="new 0 0 512 512" height="150px" width="150px" id="Layer_3" version="1.1" viewBox="0 0 512 512">
            <g>
                <path d="M393.2,180.3c-13.6-18.3-33.5-30.8-59.1-37.5c-0.7-8.1-5.1-18.6-18.7-21.1c-13.7-2.5-21.9,6.1-25.4,14.5    c-12.6-0.3-29.5,1-48.3,6.8c-21.5,6.7-40.6,20.6-53.7,39.1c-14.6,20.6-21.8,46.9-20.9,76l-67.5,53.4c-2,1.6-2.8,4.3-2,6.8    c0.9,2.4,3.2,4,5.8,3.9c0,0,0,0,0,0c0.3,0,16.7,0.2,54,21.7c4.4,2.5,8.8,5.3,13.4,8.3c17.3,11.1,36.6,23.5,61.2,23.5    c27.5,0,61.7-15.5,107.2-65.6c2.1,0.1,4.2,0.1,6.3,0.1c16.5,0,32-1.6,46.1-4.8c10.5-2.4,18.4-10.8,20.2-21.5    C416,260,418.9,214.7,393.2,180.3z M313.3,133.5c4.8,0.9,7.1,3.7,8.2,6.5c-2.9-0.5-5.8-0.9-8.7-1.3c-1.2-0.3-4.5-1-9.5-1.6    C305.1,134.7,308.2,132.6,313.3,133.5z M245.3,154.5c31-9.6,56.6-5.7,63.2-4.4c2.3,2.8,8.4,11.3,12.3,28.7    c4.7,20.8,7.1,57.8-8,117.3c-58.9-7.4-117.7-32-133.7-39.1C177.7,197.2,212.1,164.8,245.3,154.5z M237,363.6    c-23.5,1.8-41.8-10-59.6-21.4c-4.6-2.9-9.3-5.9-13.9-8.6c-21.2-12.2-36.2-18-46-20.8l56.6-44.8c19.6,8.7,85.3,36,149.6,41.3    C290.9,343.9,262.5,361.7,237,363.6z M400.2,282c-1,5.9-5.3,10.5-11,11.8c-15.8,3.6-33.6,5-52.8,4.3c-3.8-0.1-7.6-0.4-11.5-0.7    c20.7-82.9,9.1-125.6-0.6-144.6c26.3,5.5,46.2,17.1,59.3,34.6C406.6,218.3,403.9,259.9,400.2,282z"/>
            </g>
        </svg>
        <nav className='flex w-[450px] items-center justify-start text-white'>
          <button onClick={() => lenis?.scrollTo("#inicio")}  className='-translate-x-20 group-hover:opacity-100 group-hover:translate-x-[20px] transition-all duration-200 opacity-0'>Inicio</button>
          <div className='h-1 w-1 -translate-x-32 group-hover:translate-x-[30px] group-hover:opacity-100 opacity-0 transition-all duration-[250ms] rounded-full bg-green-700 mx-3' aria-hidden></div>
          <button onClick={() => lenis?.scrollTo("#nuestros-productos")} className='-translate-x-40 group-hover:opacity-100 group-hover:translate-x-[40px] transition-all duration-300 opacity-0'>Productos</button>	
          <div className='h-1 w-1 -translate-x-52 group-hover:translate-x-[50px] group-hover:opacity-100 opacity-0 transition-all duration-[400ms] rounded-full bg-green-700 mx-3' aria-hidden></div>
          <button onClick={() => lenis?.scrollTo("#como-comprar")} className='-translate-x-60 group-hover:opacity-100 group-hover:translate-x-[60px] transition-all duration-500 opacity-0'>Comprar</button>
          <div className='h-1 w-1 -translate-x-72 group-hover:translate-x-[70px] group-hover:opacity-100 opacity-0 transition-all duration-[600ms] rounded-full bg-green-700 mx-3' aria-hidden></div>
          <button onClick={() => lenis?.scrollTo("#nosotros")}  className='-translate-x-80 group-hover:opacity-100 group-hover:translate-x-[80px] transition-all duration-700 opacity-0'>Nosotros</button>
        </nav>
      </div>
    </header>

  )
}

export default Navbar