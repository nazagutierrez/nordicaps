"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaRegUser } from "react-icons/fa";
import styles from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  photo: string;
}

const testimonials: Testimonial[] = [
  { 
    id: 1, 
    name: "@carojuareguizar", 
    text: "La gorra mas linda de todas, me acompañó a la playa!", 
    photo: "/clients/cliente-1.jpg"
  },
  { 
    id: 2, 
    name: "@flormoura", 
    text: "Me encantaron las gorras! Las llevé para todos lados.", 
    photo: "/clients/cliente-2.jpg"
  },
  { 
    id: 3, 
    name: "@camilaherra_", 
    text: "Muy bueno el piluso y la atención, todo muy rápido.", 
    photo: "/clients/cliente-3.jpg"
  },
  { 
    id: 4, 
    name: "@vaalenrojo", 
    text: "Una vez que las probas no queres otras! Siempre la mejor calidad.", 
    photo: "/clients/cliente-4.jpg"
  },
  { 
    id: 5, 
    name: "@lolicastillejo", 
    text: "El diseño es hermoso, siempre elijo Nordicaps.", 
    photo: "/clients/cliente-5.jpg"
  },
];

const testimonials2: Testimonial[] = [
  { 
    id: 6, 
    name: "@bernirovelli", 
    text: "Siempre atienden con la mejor onda, gracias chicos de Nordicaps!", 
    photo: "/clients/cliente-6.jpg"
  },
  { 
    id: 7, 
    name: "@almacolonna", 
    text: "Almi dice que le encantaron las gorras, había tantos diseños que no se decidía.", 
    photo: "/clients/cliente-7.jpg"
  },
  { 
    id: 8, 
    name: "@belenmontefinale", 
    text: "Muy rápido y con mucha buena onda todo! Si o si les compro otra.", 
    photo: "/clients/cliente-8.jpg"
  },
  { 
    id: 9, 
    name: "@juanherediaok_", 
    text: "Muy buena gorra, me sirve para ir a todos lados!", 
    photo: "/clients/cliente-9.jpg"
  },
  { 
    id: 10, 
    name: "@estilistadiego", 
    text: "El producto perfecto para esta temporada de verano!", 
    photo: "/clients/cliente-10.jpg"
  },
];

export default function TestimonialsMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    const container = containerRef.current;


    if (!row1 || !row2) return;

    // Duplicate the content
    const duplicateContent = (element: HTMLDivElement) => {
      element.innerHTML += element.innerHTML;
    };

    duplicateContent(row1);
    duplicateContent(row2);

    gsap.to(row1, {
      x: -900,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.fromTo(
      row2, 
      {
        x: -900,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Clean up function
    return () => {
      gsap.killTweensOf([row1, row2]);
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full overflow-hidden pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`${styles.fancy} w-fit mx-auto text-4xl md:text-5xl font-bold text-gray-100 mb-6`}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Experiencias reales
          </p>
        </div>
      </div>

      {/* Fila 1 - moves left */}
      <div ref={row1Ref} className="flex gap-6 whitespace-nowrap mb-10">
        {testimonials.map((t) => (
          <TestimonialCard key={`row1-${t.id}`} {...t} />
        ))}
      </div>

      {/* Fila 2 - moves right */}
      <div ref={row2Ref} className="flex gap-6 whitespace-nowrap">
        {testimonials2.map((t) => (
          <TestimonialCard key={`row2-${t.id}`} {...t} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ name, text, photo }: Testimonial) {
  return (
    <div className="flex products-section flex-col justify-between max-w-[300px] max-h-[450px] border border-green-900 rounded-xl p-4 flex-shrink-0 shadow-[0px_10px_35px_0px_#73956640] hover:shadow-[0px_15px_40px_0px_#5ba13f40] transition-all duration-300 hover:-translate-y-2">
      <div className="flex justify-center my-1 items-center">
        <div>
          <Image src={photo} className="rounded" alt="photo" width={150} height={150} />
        </div>
      </div>

      {/* Author Info */}
      <div className="flex relative items-center gap-4">
        <div className="flex flex-col">
          <p className="text-gray-200 tracking-wide leading-snug text-wrap text-lg  mb-2 italic">
            &quot;{text}&quot;
          </p>

          <div className="flex items-center gap-2">
            <div className="w-8 p-2.5 h-8 bg-gradient-to-br como-comprar-section border border-green-700/80 rounded-2xl flex items-center justify-center text-2xl text-white/80 font-bold shadow-lg">
              <FaRegUser />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-gray-300 tracking-wider text-base truncate">{name}</h4>
            </div>
          </div>
        </div>
        
        {/* Quote Icon */}
        <div className="text-blue-500 absolute bottom-0 right-0 opacity-40">
          <BiSolidQuoteAltLeft className="h-9 w-9" />
        </div>
      </div>
    </div>
  );
}