import Image from "next/image";
import React from "react";
import styles from "@/app/Home/home.module.css";
import { n, o, r, d, i, c, a, p, s } from "@/assets/title-letters/imgExports";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const TitleMagazine = () => {
  const TitleLetter = ({
    img,
    customClass,
    animationType = 1,
  }: {
    img: StaticImport;
    w?: string;
    smW?: string;
    xlW?: string;
    customClass?: string;
    animationType?: number;
    aspect?: string;
  }) => {
    const animationStyle = animationType === 1 ? styles.homeLetterRight : styles.homeLetterLeft;

    return (
      <Image
        src={img}
        alt="Letra del titulo"
        className={`object-contain h-auto ${customClass} ${animationStyle}`}
      />
    );
  };

  return (
    <div className="flex select-none pointer-events-none">
      <TitleLetter img={n} customClass="w-[38px] sm:w-[75px] xl:w-[140px]" />
      <TitleLetter img={o} customClass="w-[37px] sm:w-[75px] xl:w-[120px]" animationType={2} />
      <TitleLetter img={r} customClass="w-[37px] sm:w-[75px] xl:w-[110px]" />
      <TitleLetter img={d} customClass="w-[37px] sm:w-[75px] xl:w-[120px] -ms-6 -mr-3 -z-10" animationType={2} />
      <TitleLetter img={i} customClass="w-[34px] sm:w-[65px] xl:w-[85px] -mx-3 skew-x-3" />
      <TitleLetter img={c} customClass="w-[50px] sm:w-[75px] xl:w-[75px] -me-5 z-10" animationType={2} />
      <TitleLetter img={a} customClass="w-[37px] sm:w-[75px] xl:w-[120px] -mx-2" />
      <TitleLetter img={p} customClass="w-[37px] sm:w-[75px] xl:w-[120px]" animationType={2} />
      <TitleLetter img={s} customClass="w-[37px] sm:w-[75px] xl:w-[120px] -ms-5" />
    </div>
  );
};

export default TitleMagazine;
