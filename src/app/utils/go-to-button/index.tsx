"use client";

import React from "react";
import { useLenis } from "@studio-freight/react-lenis";
import highlightBLue from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import highlightGreen from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css";

const GoToButton = ({children, sectionId, classname, highlightColor}:{ children: React.ReactNode, sectionId: string, classname?: string, highlightColor?: "green" | "blue"}) => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <button
      className={`
        ${classname} 
        ${highlightColor === "green" ? highlightGreen.fancy : ""}
        ${highlightColor === "blue" ? highlightBLue.fancyNoHover : ""}
      `}
      onClick={() => lenis?.scrollTo(sectionId)}
    >
        {children}
    </button>
  );
};

export default GoToButton;
