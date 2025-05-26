import React from "react";
import { principalFont } from "@/fonts";

const HeroButton = () => {
  return (
    <div className={`${principalFont.className} text-2xl w-fit text-white -z-10 mt-4 `}>
      <a href="/productos" className="px-7 py-1 button border-b bg-black/10 rounded-t hover:border-green-300/40 shadow-[0px_25px_40px_-6px_#738d6965] hover:shadow-[0px_25px_40px_-6px_#5b88498a] transition-all border-white/40">
        <span>CATÁLOGO</span>
      </a>
    </div>
  );
};

export default HeroButton;
