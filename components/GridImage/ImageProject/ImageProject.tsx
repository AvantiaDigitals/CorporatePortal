import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Component3D } from "@/components/Component3D/Component3D";
import styles from "@/components/GridImage/ImageProject/ImageProject.module.css";

export interface ParamsImageProject {
  src: string | StaticImport;
  alt: string;
  title: string;
  subtitle: string;
  categories: string[];
}

const ImageProject: React.FC<ParamsImageProject> = ({
  src,
  alt,
  title,
  subtitle,
}) => {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <Component3D className={styles.imageContent}>
        <div
          className={`${styles.containerImage} ${theme == "dark" ? styles.dark : styles.ligth}`}
        >
          <Image alt={alt} className={styles.image} src={src} />
        </div>
      </Component3D>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};

export default ImageProject;
