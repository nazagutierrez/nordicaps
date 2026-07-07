"use client";

import React from "react";
import highlightBLue from "@/app/utils/highlight-titles/HighlightTitleBlue.module.css";
import highlightGreen from "@/app/utils/highlight-titles/HighlightTitleGreen.module.css";
import { useLenis } from "lenis/react";

const GoToButton = ({children, sectionId, classname, highlightColor}:{ children: React.ReactNode, sectionId: string, classname?: string, highlightColor?: "green" | "blue"}) => {
  const lenis = useLenis(() => {});

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
