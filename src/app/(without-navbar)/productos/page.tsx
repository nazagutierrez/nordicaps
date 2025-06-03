"use client";

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { products } from './data';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import { principalFont } from '@/fonts';

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Extract unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Handle filtering and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting - keep original order
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, sortOption]);
  
  // GSAP animation for header
  useEffect(() => {
    if (headerRef.current) {
      const tl = gsap.timeline();
      
      tl.from(headerRef.current.querySelector('.logo-icon'), {
        rotation: -180,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      })
      .from(headerRef.current.querySelector('h2'), {
        y: -50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.5")
      .from(headerRef.current.querySelector('p'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.5");
    }
  }, []);
  
  return (
    <section className={`${principalFont.className} text-white min-h-screen py-20 px-4 bg-gradient-to-b products-section`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-5xl font-semibold tracking-wide mb-4">Nordicaps Shop</h2>
          <p className="max-w-2xl mx-auto">
            Descubre las mejores gorras de Junín al mejor precio posible.
          </p>
        </div>
        
        {/* Filters */}
        <FilterBar 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSortChange={setSortOption}
        />
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <button 
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => setActiveCategory('All')}
            >
              Show all products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;