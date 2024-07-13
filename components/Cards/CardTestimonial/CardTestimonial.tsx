"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import styles from "@/components/Cards/CardTestimonial/CardTestimonial.module.css";

export interface ParamsCardTestimonial {
  id: string;
  src: string | StaticImport;
  name: string;
  job: string;
  description: string;
  textLink: string;
  isHovered: boolean;
  setIsHovered: (id: string) => void;
}

export interface ParamsCardTestimonialOP {
  id: string;
  src: string | StaticImport;
  name: string;
  job: string;
  description: string;
  textLink: string;
  isHovered: boolean;
}

const CardTestimonial: React.FC<ParamsCardTestimonial> = ({
  id,
  src,
  name,
  job,
  description,
  textLink,
  isHovered,
  setIsHovered,
}) => {
  const { theme } = useTheme();

  return (
    <div
      key={id}
      className={`${styles.card} ${theme == "dark" ? (isHovered ? styles.selectedDark : "") : isHovered ? styles.selected : ""}`}
      onMouseEnter={() => setIsHovered(id)}
    >
      <div className={styles.header}>
        <Image alt="client" className={styles.image} src={src} />
        <div className={styles.titels}>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.jobTitle}>{job}</span>
        </div>
      </div>
      <p
        className={`${styles.description} ${theme == "dark" ? "" : styles.descriptionLigth}`}
      >
        {description}
      </p>
      <span className={styles.link}>{textLink}</span>
    </div>
  );
};

export default CardTestimonial;
