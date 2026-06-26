"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import { Product } from '../types/product';
import ImageWithLoader from '../components/ImageWithLoader';

// Color map helper
const COLOR_MAP: Record<string, string> = {
  white: "#ffffff", black: "#111111", navy: "#001f3f",
  grey: "#808080", gray: "#808080", "forest green": "#228B22",
  burgundy: "#800020", brown: "#A52A2A", beige: "#F5F5DC",
  charcoal: "#36454F", green: "#008000", blue: "#0000FF", purple: "#800080",
};
const colorHex = (name: string) => COLOR_MAP[name.toLowerCase()] ?? "#888888";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (cardRef.current && !hasAnimated.current) {
      hasAnimated.current = true;
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: index * 0.07, ease: "power3.out" }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use the new images array from the product data, fallback to imageUrl
  const slides = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];

  return (
    <Link
      href={`/productos/${product.id}`}
      ref={cardRef as any}
      style={{ opacity: 0 }}
      className="card-background rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group/card block"
    >
      {/* Image Swiper */}
      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: `.card-next-${product.id}`,
            prevEl: `.card-prev-${product.id}`,
          }}
          pagination={{ clickable: true, bulletClass: "card-bullet", bulletActiveClass: "card-bullet-active" }}
          loop
          className="w-full h-64"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i} className="overflow-hidden">
              <div className="block w-full h-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <ImageWithLoader
                  src={src}
                  alt={`${product.name} - ${i + 1}`}
                  loading={index < 4 && i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-all duration-300 pointer-events-none z-10" />

          {/* Badges */}
          <div className="absolute top-0 left-0 p-2 flex flex-col gap-1 z-20">
            {product.isNew && (
              <span className="bg-blue-600 text-white text-xs font-bold uppercase px-2 py-1 rounded-sm">Nuevo</span>
            )}
            {product.isBestseller && (
              <span className="bg-amber-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-sm">Más vendido</span>
            )}
          </div>

          {/* Custom nav — only visible on hover */}
          <button
            className={`card-prev-${product.id} absolute left-2 top-1/2 -translate-y-1/2 z-20
                        w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm
                        flex items-center justify-center text-white
                        opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 cursor-pointer`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`card-next-${product.id} absolute right-2 top-1/2 -translate-y-1/2 z-20
                        w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm
                        flex items-center justify-center text-white
                        opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 cursor-pointer`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Swiper>
      </div>

      {/* Card info */}
      <div className="p-4 grow flex flex-col">
        <div
          className="text-lg font-medium text-gray-200 mb-1 group-hover/card:text-[#62A9D7] transition-colors duration-200"
        >
          {product.name}
        </div>
        <p className="text-sm text-neutral-400 mb-3 grow">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className={`${styles.fancyNoHover} text-lg font-semibold text-gray-200`}>
            ${product.price.toFixed(2)}
          </span>
          <div className="flex space-x-1 items-center">
            {product.colors.slice(0, 3).map((color, i) => (
              <span
                key={i}
                title={color}
                className="w-3 h-3 rounded-full inline-block border border-gray-400/50"
                style={{ backgroundColor: colorHex(color) }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500 ml-0.5">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;