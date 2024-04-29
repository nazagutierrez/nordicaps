"use client";

import React from "react";
import Atropos from "atropos/react";
import "atropos/css";
import Image from "next/image";
import iphoneImg from "../../assets/iphone/iphone-view.png";

export default function Card3d() {
  return (
    <div>
      <Atropos
        shadow={true}
        shadowOffset={150}
        highlight={false}
        rotateXMax={25}
        rotateYMax={25}
        activeOffset={100}
        className="my-atropos shadow-neutral-100"
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
