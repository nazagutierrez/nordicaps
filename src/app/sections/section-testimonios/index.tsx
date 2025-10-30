"use client";

import TestimonialsMarquee from "@/app/ui/ScrollVelocity";
import { principalFont } from "@/fonts";
import React from "react";

const SectionTestimonios = () => {
  return (
    <section
      id="como-comprar"
      className={`${principalFont.className} relative h-full text-white gap-20 flex flex-col justify-between py-20 items-center como-comprar-section`}
    >
      <TestimonialsMarquee />
    </section>
  );
};

export default SectionTestimonios;
