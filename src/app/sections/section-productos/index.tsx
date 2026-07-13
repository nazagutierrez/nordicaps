import React from "react";
import CarouselImages from "../../components/CarouselImages";
import img2Avif from "@/assets/nordicaps-2.avif";
import img2Webp from "@/assets/nordicaps-2.webp";
import imageCarouselGeneral from "@/assets/gorras/gorras-general.webp";
import img3Avif from "@/assets/nordicaps-3.avif";
import img3Webp from "@/assets/nordicaps-3.webp";
import img1Avif from "@/assets/nordicaps-1.avif";
import img1Webp from "@/assets/nordicaps-1.webp";
import img4Avif from "@/assets/nordicaps-4.avif";
import img4Webp from "@/assets/nordicaps-4.webp";
import imagePilusos1 from "@/assets/pilusos/piluso-amarillo-1.webp";
import imagePilusosGeneral from "@/assets/pilusos/pilusos-general.webp";
import imagePilusos2 from "@/assets/pilusos/piluso-marron-1-v1.webp";
import imagePilusos3 from "@/assets/pilusos/piluso-negro-1.webp";
import imagePilusos4 from "@/assets/pilusos/piluso-rojo-1.webp";
import imageGorrosGeneral from "@/assets/gorros/gorros-general.webp";
import imageGorrosGeneral2 from "@/assets/gorros/gorros-general-2.webp";
import imageGorros2 from "@/assets/gorros/gorro-naranja-2-v1.webp";
import imageGorros3 from "@/assets/gorros/gorro-3.webp";
import { principalFont } from '../../../fonts/index'
import styles from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css";
import Link from "next/link";

const productsTypes = [
  { name: "gorras", images: [imageCarouselGeneral, {avif: img2Avif, webp: img2Webp}, {avif: img3Avif, webp: img3Webp}, {avif: img4Avif, webp: img4Webp}, {avif: img1Avif, webp: img1Webp}] },
  { name: "pilusos", images: [imagePilusos1, imagePilusosGeneral, imagePilusos2, imagePilusos3, imagePilusos4] },
  { name: "gorros", images: [imageGorrosGeneral, imageGorrosGeneral2, imageGorros2, imageGorros3] },
]

const SectionProductos = () => {
  return (
    <section id="nuestros-productos" className={`${principalFont.className} min-h-screen h-auto text-white bg-[#081608e8] flex flex-col py-20 justify-between items-center products-section relative z-20`}>
      <div className="flex flex-col items-center lg:items-start w-full px-4 lg:pl-32 gap-8">
        <h1 className={`${styles.fancy} ${principalFont.className} w-fit self-center lg:self-start font-bold! text-4xl xs:text-5xl sm:text-6xl`}>Nuestros productos</h1>
        <h2 className="text-xl xs:text-2xl px-4 lg:pl-16 lg:px-0">Con muchisimos diseños para elegir!</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-16 xl:gap-32 px-10 mt-10 xl:mt-3">
        {
          productsTypes.map((productType, index) => (
            <div key={index} className={`w-full max-w-[350px] px- md:px-0 animation-${productType}`}>
              <h3 className="text-3xl md:text-2xl pb-3">{productType.name}</h3>
              <CarouselImages
                images={productType.images}
              />
            </div>
          ))
        }
      </div>
      <div className="group mt-18 xl:mt-10">
        <Link href="/productos" className="text-2xl px-7 py-1 button border-b bg-black/15 rounded-t hover:border-green-300/70 shadow-[0px_25px_40px_-6px_#738d6965] hover:shadow-[0px_25px_40px_-6px_#cccccc60] transition-all border-white/40">
          <span>CATÁLOGO</span>
        </Link>
      </div>
    </section>
  );
};

export default SectionProductos;
