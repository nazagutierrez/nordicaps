"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { products as allProducts } from "./data"; // Just for categories
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import { principalFont } from "@/fonts";
import highlightBLue from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import { Product } from "../types/product";

// Derive categories from local data or this could be an API call too
const categories = Array.from(new Set(allProducts.map((p) => p.category)));

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const cacheRef = useRef<Record<string, any>>({});

  // Initial fetch and on filter/sort change
  useEffect(() => {
    setPage(1);
    fetchProducts(1, activeCategory, sortOption, true);
  }, [activeCategory, sortOption]);

  const fetchProducts = async (pageNum: number, category: string, sort: string, replace = false) => {
    const cacheKey = `${pageNum}-${category}-${sort}`;
    
    // Check if we already have the data in memory
    if (cacheRef.current[cacheKey]) {
      const cachedData = cacheRef.current[cacheKey];
      if (replace) {
        setProducts(cachedData.data);
      } else {
        setProducts((prev) => [...prev, ...cachedData.data]);
      }
      setHasMore(cachedData.meta.hasMore);
      return; // Skip the fetch
    }

    if (replace) setIsLoading(true);
    else setIsLoadingMore(true);

    try {
      const res = await fetch(`/api/products?page=${pageNum}&limit=8&category=${category}&sort=${sort}`);
      const data = await res.json();
      
      // Save to memory cache
      cacheRef.current[cacheKey] = data;
      
      if (replace) {
        setProducts(data.data);
      } else {
        setProducts((prev) => [...prev, ...data.data]);
      }
      setHasMore(data.meta.hasMore);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage, activeCategory, sortOption, false);
  };

  // Header animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headerRef.current) return;
      gsap.timeline()
        .fromTo(headerRef.current.querySelector("h2"),
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })
        .fromTo(headerRef.current.querySelector("p"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="text-white min-h-screen pb-20 pt-32 md:pt-28 px-4 products-section">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className={`${principalFont.className} text-center mb-10 sm:mb-20`}>
          <h2 className="text-7xl sm:text-8xl font-semibold tracking-wide mb-4 opacity-0">
            Nordicaps Shop
          </h2>
          <p className="max-w-2xl text-xl mx-auto opacity-0">
            Descubre las mejores gorras de Junín
            <span className={`${highlightBLue.fancyNoHover} w-fit max-w-2xl text-xl mx-auto`}>
              {" "}al mejor precio posible.
            </span>
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSortChange={setSortOption}
        />

        {/* Skeletons while loading initial data */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-[420px] bg-[#1e2d1e] rounded-sm animate-pulse border border-white/5" />
            ))}
          </div>
        )}

        {/* Products grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {!isLoading && hasMore && (
          <div className="mt-12 text-center flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center min-w-[200px] relative"
            >
              {isLoadingMore && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#62A9D7] animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              )}
              <span className={isLoadingMore ? "invisible" : ""}>
                Cargar más productos
              </span>
            </button>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-white/40 text-lg mb-4">No hay productos en esta categoría.</p>
            <button
              className="px-6 py-2 bg-[#62A9D7] text-white rounded-full hover:bg-[#4e8fb5] transition-colors cursor-pointer"
              onClick={() => setActiveCategory("All")}
            >
              Ver todos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
