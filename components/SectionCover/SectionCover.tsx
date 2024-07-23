"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { Component3D } from "@/components/Component3D/Component3D";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import styles from "@/components/SectionCover/SectionCover.module.css";

export interface ParamsSectionCover {
  title: string;
  subtitle: string;
  image: string | StaticImport;
  alt: string;
  buttonLink?: {
    text: string;
    href: string;
  };
}

const SectionCover: React.FC<ParamsSectionCover> = ({
  title,
  subtitle,
  image,
  alt,
  buttonLink,
}) => {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.firstSecctionDark : styles.firstSecctionLigth}`}
    >
      <div className={`${styles.container}`}>
        <div className={styles.firstContainer}>
          <div className={styles.boxContainerLeft}>
            <Component3D>
              <Image
                priority
                alt={alt}
                className={`${styles.image}`}
                src={image}
              />
            </Component3D>
          </div>
          <div className={styles.boxContainerRight}>
            <h1
              className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
            >
              {title}
            </h1>
            <span
              className={`${styles.subtitle} ${theme == "dark" ? styles.dark : ""}`}
            >
              {subtitle}
            </span>
            {buttonLink && (
              <ScrollComponent>
                <Link href={buttonLink.href}>
                  <ButtonAnimateBackgound
                    style={theme}
                    text={buttonLink.text}
                  />
                </Link>
              </ScrollComponent>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCover;
