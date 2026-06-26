"use client";

import React, { useState, useRef, useEffect } from 'react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sortOption: string) => void;
}

const sortOptions = [
  { value: 'default',    label: 'Relevancia',        icon: '✦' },
  { value: 'price-asc',  label: 'Precio: menor a mayor', icon: '↑' },
  { value: 'price-desc', label: 'Precio: mayor a menor', icon: '↓' },
  { value: 'name-asc',   label: 'Nombre: A → Z',     icon: 'Az' },
  { value: 'name-desc',  label: 'Nombre: Z → A',     icon: 'Za' },
];

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  onSortChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (opt: typeof sortOptions[number]) => {
    setSelected(opt);
    onSortChange(opt.value);
    setOpen(false);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

        {/* Category pills */}
        <div className="w-full md:w-auto">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === 'All'
                  ? 'card-background border border-[#62A9D7] text-white'
                  : 'card-background hover:opacity-70'
              }`}
              onClick={() => onCategoryChange('All')}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === category
                    ? 'card-background border border-[#62A9D7] text-white'
                    : 'card-background hover:opacity-70'
                }`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Custom sort dropdown */}
        <div ref={ref} className="relative w-full md:w-auto shrink-0">
          {/* Trigger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full md:w-52 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl
                       card-background border border-white/10 hover:border-white/25
                       text-white text-sm transition-all duration-200 cursor-pointer
                       hover:shadow-[0_0_18px_2px_rgba(98,169,215,0.12)]"
          >
            <span className="flex items-center gap-2 min-w-0">
              <span className="text-[#62A9D7] font-mono text-xs w-4 text-center shrink-0">
                {selected.icon}
              </span>
              <span className="truncate">{selected.label}</span>
            </span>
            {/* Chevron */}
            <svg
              className={`w-4 h-4 text-white/80 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown panel */}
          <div
            className={`absolute right-0 mt-2 w-full md:w-52 z-30 overflow-hidden
                        rounded-xl border border-white/10
                        card-background shadow-[0_8px_32px_rgba(0,0,0,0.45)]
                        transition-all duration-250 ease-out origin-top
                        ${open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
          >
            {sortOptions.map((opt, i) => {
              const isActive = opt.value === selected.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left
                              transition-colors duration-150 cursor-pointer
                              ${i !== sortOptions.length - 1 ? 'border-b border-white/5' : ''}
                              ${isActive
                                ? 'text-[#62A9D7] bg-[#62A9D7]/10'
                                : 'text-white/80 hover:text-white hover:bg-white/5'
                              }`}
                >
                  <span className={`font-mono text-xs w-4 text-center shrink-0 ${isActive ? 'text-[#62A9D7]' : 'text-white/30'}`}>
                    {opt.icon}
                  </span>
                  <span>{opt.label}</span>
                  {isActive && (
                    <svg className="ml-auto w-3.5 h-3.5 text-[#62A9D7] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterBar;
