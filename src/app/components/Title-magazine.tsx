import { getImageProps } from "next/image";
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
    img: { avif: StaticImport; webp: StaticImport };
    w?: string;
    smW?: string;
    xlW?: string;
    customClass?: string;
    animationType?: number;
    aspect?: string;
  }) => {
    const animationStyle = animationType === 1 ? styles.homeLetterRight : styles.homeLetterLeft;
    
    const common = { alt: "Letra del titulo", className: `object-contain h-auto ${customClass} ${animationStyle}` };
    const { props: { srcSet: avifSrcSet } } = getImageProps({ ...common, src: img.avif });
    const { props: { srcSet: webpSrcSet, ...rest } } = getImageProps({ ...common, src: img.webp });

    return (
      <picture style={{ display: 'contents' }}>
        <source srcSet={avifSrcSet} type="image/avif" />
        <source srcSet={webpSrcSet} type="image/webp" />
        <img {...rest} />
      </picture>
    );
  };

  return (
    <div className="flex select-none pointer-events-none">
      <TitleLetter img={n} customClass="w-[46px] sm:w-[75px] xl:w-[140px]" />
      <TitleLetter img={o} customClass="w-[37px] sm:w-[75px] xl:w-[120px]" animationType={2} />
      <TitleLetter img={r} customClass="w-[37px] sm:w-[75px] xl:w-[110px]" />
      <TitleLetter img={d} customClass="w-[43px] sm:w-[75px] xl:w-[120px] -ms-1 mr-1 sm:-ms-6 sm:-mr-3 -z-10" animationType={2} />
      <TitleLetter img={i} customClass="w-[30px] sm:w-[60px] xl:w-[85px] -ms-3 -mr-1 sm:-mx-3 skew-x-3" />
      <TitleLetter img={c} customClass="w-[27px] sm:w-[50px] xl:w-[75px] -me-5 z-10" animationType={2} />
      <TitleLetter img={a} customClass="w-[37px] sm:w-[75px] xl:w-[120px] ms-2.5 sm:-mx-2 md:ms-0.5 md:-mr-2 -rotate-5" />
      <TitleLetter img={p} customClass="w-[37px] sm:w-[75px] xl:w-[120px] mr-2.5 sm:mr-0 z-10" animationType={2} />
      <TitleLetter img={s} customClass="w-[37px] sm:w-[75px] xl:w-[120px] -ms-5 z-20" />
    </div>
  );
};

export default TitleMagazine;
