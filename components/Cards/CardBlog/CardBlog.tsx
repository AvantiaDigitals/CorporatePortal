"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import styles from "@/components/Cards/CardBlog/CardBlog.module.css";

export interface ParamsCardBlog {
  tagText: string;
  title: string;
  abstract: string;
  imageSrc: string | StaticImport;
}

const CardBlog: React.FC<ParamsCardBlog> = ({
  tagText,
  title,
  abstract,
  imageSrc,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.cardBlog} ${theme == "dark" ? styles.cardBlogDark : ""}`}
    >
      <Image alt="blog" className={styles.image} src={imageSrc} />
      <div
        className={`${styles.containerText} ${theme == "dark" ? styles.containerTextDark : styles.containerTextLigth}`}
      >
        <span className={styles.tag}>{tagText}</span>
        <h3 className={styles.titleCard}>{title}</h3>
        <p className={styles.description}>{abstract}</p>
      </div>
    </div>
  );
};

export default CardBlog;
