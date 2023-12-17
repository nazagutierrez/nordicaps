import React from "react";
import CarouselImages from "./components/CarouselImages";
import imageCarousel1 from "../assets/nordicaps-1.webp";
import imageCarousel2 from "../assets/nordicaps-2.webp";
import imageCarousel3 from "../assets/nordicaps-3.webp";
import imageCarousel4 from "../assets/nordicaps-4.webp";

const Page = () => {
  return (
    <section className="h-screen text-white gap-20 bg-neutral-900/95 flex flex-col justify-center items-center">
      <div className="flex flex-col items-start w-full pl-32 gap-8">
        <h1 className="text-5xl">Nuestras productos</h1>
        <h2 className="text-xl pl-16">Con muchisimos diseños para elegir!</h2>
      </div>
      <div className="flex justify-center items-center gap-32">
        <div className="w-[350px]">
          <h3 className="text-xl pb-3">Gorras</h3>
          <CarouselImages
            autoplayTime={3000}
            images={[
              imageCarousel1,
              imageCarousel2,
              imageCarousel3,
              imageCarousel4,
            ]}
          />
        </div>
        <div className="w-[350px]">
          <h3 className="text-xl pb-3">Pilusos</h3>
          <CarouselImages
            autoplayTime={4000}
            images={[
              imageCarousel4,
              imageCarousel3,
              imageCarousel2,
              imageCarousel1,
            ]}
          />
        </div>
        <div className="w-[350px]">
          <h3 className="text-xl pb-3">Gorros</h3>
          <CarouselImages
            autoplayTime={5000}
            images={[
              imageCarousel3,
              imageCarousel4,
              imageCarousel1,
              imageCarousel2,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
