import React from "react";
import "./HeroButton.css";
import { principalFont } from "@/fonts";

const HeroButton = () => {
  return (
    <div className={`${principalFont.className} container text-xl text-white`}>
      <a href="/productos" className="button type--A">
        <span className="button__text">CATALOGO</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </div>
  );
};

export default HeroButton;
