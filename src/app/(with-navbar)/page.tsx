import HomePage from "./Home";
import SectionProductos from "./sections/section-productos";
import SectionComoComprar from "./sections/section-como-comprar";
import SectionRedes from "./sections/section-redes";

export default function Home() {
  return (
    <>
      <HomePage />
      <SectionProductos />
      <SectionComoComprar />
      <SectionRedes />
    </>
  )
}
