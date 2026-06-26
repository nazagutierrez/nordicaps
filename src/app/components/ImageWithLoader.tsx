"use client";

import React, { useState, useEffect, useRef } from 'react';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  wrapperClassName?: string;
}

export default function ImageWithLoader({ src, alt, className = "", wrapperClassName = "", ...props }: ImageWithLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If the image is already cached/loaded before React hydrates
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative w-full h-full ${wrapperClassName}`}>
      {/* Skeleton loader */}
      <div 
        className={`absolute inset-0 bg-[#273a28]/60 transition-opacity duration-500 flex items-center justify-center ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100 animate-pulse"
        }`}
      >
        <svg className="w-8 h-8 text-[#62A9D7]/50 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>

      {/* Actual image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
