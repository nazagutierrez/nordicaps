import React from "react";
import CarouselImages from "./components/CarouselImages";
import imageCarousel1 from "../assets/nordicaps-1.webp";
import imageCarousel2 from "../assets/nordicaps-2.webp";
import imageCarousel3 from "../assets/nordicaps-3.webp";
import imageCarousel4 from "../assets/nordicaps-4.webp";
import { principalFont } from '../../fonts/index'
import styles from "./Subtitle.module.css"
import Link from "next/link";

const productsTypes = ["gorras", "pilusos", "gorros"]

const ProductsSection = () => {
  return (
    <section className={`${principalFont.className} h-screen text-white gap-20 bg-[#081608e8] flex flex-col justify-center items-center products-section`}>
      <div className="flex flex-col items-start w-full pl-32 gap-8">
        <h1 className={`${styles.fancy} text-5xl `}>Nuestros productos</h1>
        <h2 className="text-2xl pl-16">Con muchisimos diseños para elegir!</h2>
      </div>
      <div className="flex justify-center items-center gap-32">
        {
          productsTypes.map((productType, index) => (
            <div key={index} className="w-[350px]">
              <h3 className="text-xl pb-3">{productType}</h3>
              <CarouselImages
                images={[
                  imageCarousel1,
                  imageCarousel2,
                  imageCarousel3,
                  imageCarousel4,
                ]}
              />
            </div>
          ))
        }
      </div>
      <Link href="/productos" className="text-2xl bg-green-800 text-center px-6 py-1 hover:opacity-70 transition-all rounded-md">Ver mas</Link>
    </section>
  );
};

export default ProductsSection;
