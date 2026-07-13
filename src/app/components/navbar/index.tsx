"use client";

import { principalFont } from "@/fonts";
import { useLenis } from "lenis/react";
import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from "next/navigation";
import { bind } from "cuelume";

const Navbar = () => {
  const lenis = useLenis(({ scroll }) => {});
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    bind();
  }, []);

  const navItems = [
    { label: "Inicio", target: "#inicio" },
    { label: "Productos", target: "#nuestros-productos" },
    { label: "Clientes", target: "#como-comprar" },
    { label: "Nosotros", target: "#nosotros" },
    { label: "Catálogo", target: "productos" },
  ];

  const handleNav = (target: string) => {
    if (target.startsWith("#")) {
      if (pathname === "/") {
        lenis?.scrollTo(target);
      } else {
        router.push(`/${target}`);
      }
    } else {
      router.push(`/${target}`);
    }
    setMobileOpen(false);
  };

  return (
    <header className='fixed w-full top-0 left-0 z-50'>
      <div className='flex ps-5 pr-3 items-center gap-x-6 w-full justify-between md:justify-start'>
        {/* Logo */}
        <svg
          data-cuelume-press="press"
          onClick={() => handleNav("#inicio")}
          className="cap-svg shrink-0 pt-4 h-[80px] w-[80px] xs:h-[90px] xs:w-[90px] cursor-pointer"
          enableBackground="new 90 110 330 280"
          id="Layer_3"
          version="1.1"
          viewBox="90 110 330 280"
        >
          <g>
            <path d="M393.2,180.3c-13.6-18.3-33.5-30.8-59.1-37.5c-0.7-8.1-5.1-18.6-18.7-21.1c-13.7-2.5-21.9,6.1-25.4,14.5    c-12.6-0.3-29.5,1-48.3,6.8c-21.5,6.7-40.6,20.6-53.7,39.1c-14.6,20.6-21.8,46.9-20.9,76l-67.5,53.4c-2,1.6-2.8,4.3-2,6.8    c0.9,2.4,3.2,4,5.8,3.9c0,0,0,0,0,0c0.3,0,16.7,0.2,54,21.7c4.4,2.5,8.8,5.3,13.4,8.3c17.3,11.1,36.6,23.5,61.2,23.5    c27.5,0,61.7-15.5,107.2-65.6c2.1,0.1,4.2,0.1,6.3,0.1c16.5,0,32-1.6,46.1-4.8c10.5-2.4,18.4-10.8,20.2-21.5    C416,260,418.9,214.7,393.2,180.3z M313.3,133.5c4.8,0.9,7.1,3.7,8.2,6.5c-2.9-0.5-5.8-0.9-8.7-1.3c-1.2-0.3-4.5-1-9.5-1.6    C305.1,134.7,308.2,132.6,313.3,133.5z M245.3,154.5c31-9.6,56.6-5.7,63.2-4.4c2.3,2.8,8.4,11.3,12.3,28.7    c4.7,20.8,7.1,57.8-8,117.3c-58.9-7.4-117.7-32-133.7-39.1C177.7,197.2,212.1,164.8,245.3,154.5z M237,363.6    c-23.5,1.8-41.8-10-59.6-21.4c-4.6-2.9-9.3-5.9-13.9-8.6c-21.2-12.2-36.2-18-46-20.8l56.6-44.8c19.6,8.7,85.3,36,149.6,41.3    C290.9,343.9,262.5,361.7,237,363.6z M400.2,282c-1,5.9-5.3,10.5-11,11.8c-15.8,3.6-33.6,5-52.8,4.3c-3.8-0.1-7.6-0.4-11.5-0.7    c20.7-82.9,9.1-125.6-0.6-144.6c26.3,5.5,46.2,17.1,59.3,34.6C406.6,218.3,403.9,259.9,400.2,282z"/>
          </g>
        </svg>

        {/* Desktop nav — siempre visible en md+ */}
        <nav className={`${principalFont.className} hidden md:flex items-center pt-3 gap-3 text-green-50 text-lg xl:text-xl`}>
          {navItems.map((item, i) => (
            <React.Fragment key={item.target}>
              <button
                data-cuelume-press="press"
                onClick={() => handleNav(item.target)}
                className='hover:text-green-200/70 flex items-center gap-x-1 transition-colors duration-200 cursor-pointer'
              >
                {item.label}
                {
                  item.label === "Catálogo" && 
                    <svg stroke="currentColor" className="mb-0.5" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg"><path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path><path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path></svg>
                }
              </button>
              {i < navItems.length - 1 && (
                <div className='h-1 w-1 rounded-full bg-green-700' aria-hidden />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          data-cuelume-press="press"
          className='md:hidden flex flex-col gap-[5px] p-2 pt-4 ml-1 text-white'
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden ml-auto w-fit overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className={`${principalFont.className} flex flex-col justify-end gap-1 px-5 pb-3 text-white text-base`}>
          {navItems.map((item) => (
            <button
              key={item.target}
              data-cuelume-press="press"
              onClick={() => handleNav(item.target)}
              className='w-full flex justify-end items-center gap-x-1 text-xl text-end py-1.5 border-b border-white/30 hover:text-green-200/70 transition-colors duration-200 last:border-b-0'
            >
              {
                item.label === "Catálogo" && 
                  <svg stroke="currentColor" className="mb-0.5" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg"><path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path><path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path></svg>
              }
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar