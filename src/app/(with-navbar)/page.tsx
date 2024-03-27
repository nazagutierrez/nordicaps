import HomePage from "./Home";
import SectionProductos from "../sections/section-productos";
import SectionComoComprar from "../sections/section-como-comprar";
import SectionNosotros from "../sections/section-nosotros";

export default function Home() {
  return (
    <>
      <HomePage />
      <SectionProductos />
      <SectionComoComprar />
      <SectionNosotros />
    </>
  )
}
