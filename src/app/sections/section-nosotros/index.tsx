import { principalFont } from "@/fonts";
import React from "react";
import styles from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css";
import Card3d from "@/app/components/Card-3d";

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className={`${principalFont.className} py-20 h-screen text-white bg-[#081608e8] flex px-32 justify-between items-center products-section`}
    >
      <div className="h-full flex flex-col items-start">
        <h1 className={`${styles.fancy} w-fit mb-20 text-5xl`}>Nosotros</h1>
        <article className="flex flex-col h-full justify-start text-[1.6rem] gap-y-7 max-w-xl">
          <h3 className="text-4xl">Somos nordicaps</h3>
          <p>
            un emprendimiento de gorras ubicado en Junin, Buenos Aires estamos
          </p>
          <p>
            Nuestro proyecto nació del deseo de romper con lo convencional y
            ofrecer algo verdaderamente único. Cada una de nuestras gorras tiene
            un diseño innovador, de muy buena calidad y muy fachero 😎
          </p>
          <p>
            Únete a nordicaps y llevate una gorra que no solo te protege del
            sol, sino que también te da un estilo unico.
          </p>
          <p>¡Gracias por elegirnos como parte de tu outfit!</p>
        </article>      
      </div>
      <Card3d />
    </section>
  );
};

export default Nosotros;
