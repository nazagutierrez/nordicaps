"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function CarouselImages({ images }: { images: StaticImageData[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay({ delay: 2500 })])
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="overflow-hidden rounded-md" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 ">
            <Image src={image} className="object-cover h-full w-[350px]" alt="Carousel image" width={300} height={300} />
          </div>
        ))}
      </div>
        <button className="text-2xl embla__prev text-white bg-neutral-900/30 rounded-full w-9 h-14 absolute top-[50%] left-0" onClick={scrollPrev}>
        {"<"}
      </button>
      <button className="text-2xl embla__next text-white bg-neutral-900/30 rounded-full w-9 h-14 absolute top-[50%] right-0" onClick={scrollNext}>
        {">"}
      </button>
    </div>
  )
}
