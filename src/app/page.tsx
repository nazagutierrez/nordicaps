import HomePage from "./Home";
import SectionProductos from "./sections/section-productos";
// import SectionComoComprar from "./sections/section-como-comprar";
import SectionNosotros from "./sections/section-nosotros";
import SectionTestimonios from "./sections/section-testimonios";

export default function Home() {
  return (
    <>
      <HomePage />
      <SectionProductos />
      {/* <SectionComoComprar /> */}
      <SectionTestimonios />
      <SectionNosotros />
    </>
  )
}
