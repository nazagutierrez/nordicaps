import React from "react";
import CarouselImages from "../../components/CarouselImages";
import imageCarousel2 from "@/assets/nordicaps-2.avif";
import imageCarousel3 from "@/assets/nordicaps-3.avif";
import imageCarousel1 from "@/assets/nordicaps-1.avif";
import imageCarousel4 from "@/assets/nordicaps-4.avif";
import { principalFont } from '../../../fonts/index'
import styles from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css";
import Link from "next/link";

const productsTypes = ["gorras", "pilusos", "gorros"]

const SectionProductos = () => {
  return (
    <section id="nuestros-productos" className={`${principalFont.className} h-screen text-white bg-[#081608e8] flex flex-col py-20 justify-between items-center products-section relative z-20`}>
      <div className="flex flex-col items-start w-full pl-32 gap-8">
        <h1 className={`${styles.fancy} text-5xl `}>Nuestros productos</h1>
        <h2 className="text-2xl pl-16">Con muchisimos diseños para elegir!</h2>
      </div>
      <div className="flex justify-center items-center gap-32">
        {
          productsTypes.map((productType, index) => (
            <div key={index} className={`w-[350px] animation-${productType}`}>
              <h3 className="text-2xl pb-3">{productType}</h3>
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
      <div className="group">
        <Link href="/productos" className="text-2xl px-7 py-1 button border-b bg-black/15 rounded-t hover:border-green-300/70 shadow-[0px_25px_40px_-6px_#738d6965] hover:shadow-[0px_25px_40px_-6px_#cccccc60] transition-all border-white/40">
          <span>CATÁLOGO</span>
        </Link>
      </div>
    </section>
  );
};

export default SectionProductos;
