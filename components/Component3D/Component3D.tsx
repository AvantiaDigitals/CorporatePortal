"use client";

import React, { useRef } from "react";

import styles from "@/components/Component3D/Component3D.module.css";

export const Component3D = ({ children }: { children: React.ReactNode }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      const image = imageRef.current;
      const { left, top, width, height } = image.getBoundingClientRect();
      const xAxis = (width / 2 - (e.clientX - left)) / 20;
      const yAxis = (height / 2 - (e.clientY - top)) / 20;

      image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      const image = imageRef.current;

      image.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <div
      className={styles.container}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div ref={imageRef} className={styles.image}>
        {children}
      </div>
    </div>
  );
};
