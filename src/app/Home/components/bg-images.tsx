import React from "react";
import bgHome1 from "../../assets/nordicaps-1.webp";
import bgHome2 from "../../assets/nordicaps-2.webp";
import bgHome3 from "../../assets/nordicaps-3.webp";
import bgHome4 from "../../assets/nordicaps-4.webp";
import Image from "next/image";

const BgImages = () => {
  return (
    <div className="absolute h-full w-full flex opacity-20 bg-fixed">
      <Image
        src={bgHome2}
        className="h-screen w-[32%] object-cover"
        alt="background"
      />
      <Image
        src={bgHome1}
        className="h-screen w-[38%] object-cover"
        alt="background"
      />
      <Image
        src={bgHome3}
        className="h-screen w-[30%] object-cover"
        alt="background"
      />
    </div>
  );
};

export default BgImages;
