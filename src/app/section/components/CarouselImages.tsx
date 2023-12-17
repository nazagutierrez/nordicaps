"use client";

import React, { CSSProperties, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Carousel from "nuka-carousel";
import imageCarousel1 from "../../assets/nordicaps-1.webp";
import imageCarousel2 from "../../assets/nordicaps-2.webp";
import imageCarousel3 from "../../assets/nordicaps-3.webp";
import imageCarousel4 from "../../assets/nordicaps-4.webp";
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

const CarouselImages = ({autoplayTime = 3000, images}: {autoplayTime:number, images:StaticImageData[]}) => {
  
    return (
    <Carousel autoplay className="rounded-md" defaultControlsConfig={defaultControlsObj} wrapAround={true} autoplayInterval={autoplayTime}>
      {images.map((image, index) => (
            <Image key={index} src={image} className="object-cover h-full w-[350px]" alt="Carousel image" width={300} height={300} />

      ))}      
    </Carousel>
  );
};

export default CarouselImages;
