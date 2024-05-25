"use client";

import React from "react";
import Atropos from "atropos/react";
import "atropos/css";
import Image from "next/image";
import iphoneImg from "../../assets/iphone/iphone-view2.avif";

export default function Card3d() {
  return (
    <div className="pr-36">
      <Atropos
        shadow={true}
        highlight={false}
        shadowOffset={150}
        rotateXMax={10}
        rotateYMax={10}
        activeOffset={15}
        className="my-atropos shadow-neutral-100 flex items-center justify-center"
      >
        <Image
          src={iphoneImg}
          data-atropos-offset="-5"
          alt="vista desde un iphone"
          width={300}
          height={300}
        />
      </Atropos>
    </div>
  );
}
