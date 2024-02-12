"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Carousel from "nuka-carousel";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

interface DefaultControlsConfig  {
    nextButtonText?: React.ReactNode
    nextButtonClassName?: string
    prevButtonText?: React.ReactNode
    prevButtonClassName?: string
    pagingDotsClassName?: string
    pagingDotsContainerClassName?: string
  }

  const defaultControlsObj:DefaultControlsConfig = {
    nextButtonText: <MdArrowForwardIos />,
    nextButtonClassName: "rounded-full text-xl mx-2",
    
    prevButtonText: <MdArrowBackIosNew />,
    prevButtonClassName: "rounded-full text-xl mx-2",
    
    pagingDotsClassName: "mx-0.5 px-2 py-1",
    pagingDotsContainerClassName: "bg-neutral-400/70 rounded-full ",
  }

const CarouselImages = ({images}: {images:StaticImageData[]}) => {
  
    return (
    <Carousel autoplay className="rounded-md" defaultControlsConfig={defaultControlsObj} wrapAround={true} >
      {images.map((image, index) => (
            <Image key={index} src={image} className="object-cover h-full w-[350px]" alt="Carousel image" width={300} height={300} />

      ))}      
    </Carousel>
  );
};

export default CarouselImages;
