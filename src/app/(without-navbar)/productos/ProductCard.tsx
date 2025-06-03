"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "power3.out"
        }
      );
    }
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        
        {/* Product labels */}
        <div className="absolute top-0 left-0 p-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-xs font-bold uppercase px-2 py-1 rounded">New</span>
          )}
          {product.isBestseller && (
            <span className="bg-amber-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">Bestseller</span>
          )}
        </div>
        
        {/* Quick add button */}
        <button className="absolute bottom-0 right-0 m-4 bg-white rounded-full p-2 shadow-lg opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          COMPRAR
        </button>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          <div className="flex space-x-1">
            {product.colors.slice(0, 3).map((color, i) => (
              <span key={i} className="w-3 h-3 rounded-full inline-block border border-gray-300" style={{ 
                backgroundColor: color.toLowerCase() === 'white' ? 'white' : 
                                 color.toLowerCase() === 'black' ? 'black' :
                                 color.toLowerCase() === 'navy' ? '#001f3f' :
                                 color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#808080' :
                                 color.toLowerCase() === 'forest green' ? '#228B22' :
                                 color.toLowerCase() === 'burgundy' ? '#800020' :
                                 color.toLowerCase() === 'brown' ? '#A52A2A' :
                                 color.toLowerCase() === 'beige' ? '#F5F5DC' :
                                 color.toLowerCase() === 'charcoal' ? '#36454F' :
                                 color.toLowerCase() === 'green' ? '#008000' :
                                 color.toLowerCase() === 'blue' ? '#0000FF' :
                                 color.toLowerCase() === 'purple' ? '#800080' : undefined
              }}></span>
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;