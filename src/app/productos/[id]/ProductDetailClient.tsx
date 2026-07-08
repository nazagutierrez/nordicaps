"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { products } from "../data";
import { principalFont } from "@/fonts";
import styles from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import ImageWithLoader from "@/app/components/ImageWithLoader";
import { Product } from "@/app/types/product";
import { socialMediaAccounts } from "@/app/utils/social-const";

// ── Color helper ──────────────────────────────────────────────────────────────
const COLOR_MAP: Record<string, string> = {
  white:          "#ffffff",
  black:          "#111111",
  navy:           "#001f3f",
  grey:           "#808080",
  gray:           "#808080",
  "forest green": "#228B22",
  burgundy:       "#800020",
  brown:          "#A52A2A",
  beige:          "#F5F5DC",
  charcoal:       "#36454F",
  green:          "#008000",
  blue:           "#0000FF",
  purple:         "#800080",
  blanco:         "#ffffff",
  negra:          "#111111",
  negro:          "#111111",
  rosa:           "#FFB6C1",
  naranja:        "#FFA500",
  amarillo:       "#FFD700",
  marron:         "#A52A2A",
  rojo:           "#FF0000",
  bordo:          "#79282C",
};

const colorHex = (name: string) => COLOR_MAP[name.toLowerCase()] ?? "#888888";

// ── Component ─────────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const heroRef    = useRef<HTMLDivElement>(null);
  const infoRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => {
        setProduct(data.product);
        setRelated(data.related);
        setIsLoading(false);
      })
      .catch(() => {
        notFound();
      });
  }, [id]);

  // ── Animations ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isLoading || !product) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (heroRef.current) {
        tl.fromTo(
          heroRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.7 }
        );
      }

      if (infoRef.current) {
        const items = infoRef.current.querySelectorAll("[data-anim]");
        tl.fromTo(
          items,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 },
          "-=0.4"
        );
      }
    });
    return () => ctx.revert();
  }, [isLoading, product]);

  return (
    <main className="min-h-screen products-section text-white pt-32 pb-20">

      {/* ── Back link ── */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <Link
          href="/productos"
          className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Volver a productos
        </Link>
      </div>

      {/* ── Main layout ── */}
      {isLoading || !product ? (
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start animate-pulse">
          <div className="aspect-square bg-[#1e2d1e] rounded-2xl w-full border border-white/5" />
          <div className="flex flex-col gap-6 pt-4">
            <div className="h-6 bg-[#1e2d1e] rounded w-1/4 border border-white/5" />
            <div className="h-12 bg-[#1e2d1e] rounded w-3/4 border border-white/5" />
            <div className="h-10 bg-[#1e2d1e] rounded w-1/3 border border-white/5" />
            <div className="h-24 bg-[#1e2d1e] rounded w-full border border-white/5" />
            <div className="h-px bg-white/10" />
            <div className="flex gap-3">
              <div className="h-8 w-8 bg-[#1e2d1e] rounded-full" />
              <div className="h-8 w-8 bg-[#1e2d1e] rounded-full" />
            </div>
            <div className="flex gap-3 mt-4">
              <div className="h-12 bg-[#1e2d1e] rounded-xl flex-1 border border-white/5" />
              <div className="h-12 bg-[#1e2d1e] rounded-xl flex-1 border border-white/5" />
            </div>
          </div>
        </div>
      ) : (() => {
        // Use real images from product data
        const slides = product.images && product.images.length > 0 
          ? product.images 
          : [product.imageUrl];

        return (
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* ── Image panel with Swiper ── */}
        <div ref={heroRef} style={{ opacity: 0 }} className="flex flex-col gap-3">

          {/* Main image swiper */}
          <div className="relative rounded-2xl overflow-hidden">
            <Swiper
              modules={[Navigation, Thumbs, FreeMode]}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              navigation={{ nextEl: ".detail-next", prevEl: ".detail-prev" }}
              loop
              className="aspect-square w-full"
            >
              {slides.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <ImageWithLoader
                      src={src}
                      alt={`${product.name} - vista ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                    Nuevo
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-amber-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                    Más vendido
                  </span>
                )}
              </div>

              {/* Color tint overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at 80% 80%, ${colorHex(product.colors[selectedColor])}22 0%, transparent 65%)`,
                }}
              />

              {/* Nav arrows */}
              <button className="detail-prev absolute left-3 top-1/2 -translate-y-1/2 z-20
                                 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/15
                                 flex items-center justify-center text-white hover:bg-black/60
                                 transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="detail-next absolute right-3 top-1/2 -translate-y-1/2 z-20
                                 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/15
                                 flex items-center justify-center text-white hover:bg-black/60
                                 transition-all duration-200 cursor-pointer">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Swiper>
          </div>

          {/* Thumbnails swiper */}
          <Swiper
            modules={[Thumbs, FreeMode]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode
            watchSlidesProgress
            className="w-full"
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent cursor-pointer transition-all duration-200 opacity-60 [&.swiper-slide-thumb-active]:border-[#62A9D7] [&.swiper-slide-thumb-active]:opacity-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <ImageWithLoader
                    src={src}
                    alt={`Miniatura ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── Info panel ── */}
        <div ref={infoRef} className="flex flex-col gap-6 lg:pt-4">
          {/* Category badge */}
          <div data-anim style={{ opacity: 0 }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#62A9D7] border border-[#62A9D7]/40 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          {/* Name */}
          <div data-anim style={{ opacity: 0 }}>
            <h1 className={`${principalFont.className} text-4xl sm:text-5xl font-semibold leading-tight`}>
              {product.name}
            </h1>
          </div>

          {/* Price */}
          <div data-anim style={{ opacity: 0 }} className="flex items-baseline gap-3">
            <span className={`${styles.fancyNoHover} text-3xl font-bold`}>
              ${product?.price?.toLocaleString("es-AR")}
            </span>
          </div>

          {/* Description */}
          <div data-anim style={{ opacity: 0 }}>
            <p className="text-white/70 text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Divider */}
          <div data-anim style={{ opacity: 0 }} className="h-px bg-white/10" />

          {/* Color picker */}
          <div data-anim style={{ opacity: 0 }} className="flex flex-col gap-3">
            <p className="text-sm text-white/50 uppercase tracking-wider font-medium">
              Color:{" "}
              <span className="text-white/90 normal-case tracking-normal font-semibold">
                {product.colors[selectedColor]}
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color, i) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(i)}
                  title={color}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                    i === selectedColor
                      ? "border-white scale-110 shadow-[0_0_10px_2px_rgba(255,255,255,0.25)]"
                      : "border-white/20 hover:border-white/60 hover:scale-105"
                  }`}
                  style={{ backgroundColor: colorHex(color) }}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div data-anim style={{ opacity: 0 }} className="flex flex-col sm:flex-row gap-3 pt-2">
            <a 
              href={`${socialMediaAccounts.whatsappPlain}?text=Hola!%20Vengo%20de%20la%20web.%20Quer%C3%ADa%20hacerte%20una%20consulta.%20Me%20interesa%20el%20producto%20${product.name}%20color%20${product.colors[selectedColor]}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 text-center py-3.5 rounded-xl como-comprar-section border border-green-700 text-white font-semibold text-base transition-all duration-200 hover:shadow-[0_0_20px_4px_rgba(98,169,215,0.3)] active:scale-[0.98] cursor-pointer">
              Consultar por WhatsApp
            </a>
            <a 
              href={socialMediaAccounts.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 text-center py-3.5 rounded-xl card-background border border-white/15 hover:border-white/35 text-white/90 font-medium text-base transition-all duration-200 cursor-pointer">
              Ver más en Instagram
            </a>
          </div>

          {/* Meta info */}
          <div data-anim style={{ opacity: 0 }} className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40 pt-1">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Alta calidad garantizada
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              Envíos a todo el país
            </span>
          </div>
        </div>
        </div>
        );
      })()}

      {/* ── Related products ── */}
      {!isLoading && related && related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-24 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`${principalFont.className} text-2xl font-semibold text-white/90`}>
              También te puede interesar
            </h2>
            <span className="text-xs text-white/40 uppercase tracking-widest hidden sm:block">
              Deslizá para ver más
            </span>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={2}
              loop={related.length > 2}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              navigation={{ nextEl: ".related-next", prevEl: ".related-prev" }}
              breakpoints={{
                640:  { slidesPerView: 2, spaceBetween: 16 },
                768:  { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {related.map((rel) => (
                <SwiperSlide key={rel.id}>
                  <Link
                    href={`/productos/${rel.id}`}
                    className="card-background rounded-xl overflow-hidden group
                               hover:shadow-[0_0_20px_2px_rgba(98,169,215,0.15)]
                               border border-white/5 hover:border-[#62A9D7]/25
                               transition-all duration-300 block"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.imageUrl}
                        alt={rel.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {rel.isNew && (
                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                          Nuevo
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-white/90 group-hover:text-[#62A9D7] transition-colors duration-200 truncate">
                        {rel.name}
                      </p>
                      <p className="text-xs text-[#62A9D7] mt-0.5">${rel.price.toLocaleString("es-AR")}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="related-prev absolute left-0 top-1/2 -translate-y-6 z-10
                               w-10 h-10 rounded-full card-background border border-white/15
                               flex items-center justify-center text-white/70 hover:text-white
                               hover:border-white/35 transition-all duration-200 cursor-pointer -translate-x-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="related-next absolute right-0 top-1/2 -translate-y-6 z-10
                               w-10 h-10 rounded-full card-background border border-white/15
                               flex items-center justify-center text-white/70 hover:text-white
                               hover:border-white/35 transition-all duration-200 cursor-pointer translate-x-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
