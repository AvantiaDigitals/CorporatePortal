"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import brand1 from "@/public/brand-01.png";
import brand2 from "@/public/brand-02.png";
import brand3 from "@/public/brand-03.png";
import brand4 from "@/public/brand-04.png";
import brand5 from "@/public/brand-05.png";
import brand6 from "@/public/brand-06.png";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import Label from "@/components/Label/Label";
import styles from "@/pages/home/section10/Section10.module.css";

export function TenthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <ScrollComponent>
            <Label color="orange" text="top clients" />
          </ScrollComponent>
          <ScrollComponent>
            <h2 className={styles.title}>We’ve built solutions for...</h2>
          </ScrollComponent>
          <ScrollComponent>
            <p className={styles.text}>
              Nulla facilisi. Nullam in magna id dolor blandit rutrum eget.
            </p>
          </ScrollComponent>
        </div>
        <div className={styles.downContainer}>
          <div className={styles.grid}>
            <div
              className={`${styles.containerImage} ${theme == "dark" ? styles.containerImageDark : styles.containerImageLigth}`}
            >
              <Image
                alt="brand1"
                className={`${theme == "dark" ? styles.imageBrandDark : styles.imageBrandLigth}`}
                src={brand1}
              />
            </div>
            <div
              className={`${styles.containerImage} ${theme == "dark" ? styles.containerImageDark : styles.containerImageLigth}`}
            >
              <Image
                alt="brand2"
                className={`${theme == "dark" ? styles.imageBrandDark : styles.imageBrandLigth}`}
                src={brand2}
              />
            </div>
            <div
              className={`${styles.containerImage} ${theme == "dark" ? styles.containerImageDark : styles.containerImageLigth}`}
            >
              <Image
                alt="brand3"
                className={`${theme == "dark" ? styles.imageBrandDark : styles.imageBrandLigth}`}
                src={brand3}
              />
            </div>
            <div
              className={`${styles.containerImage} ${theme == "dark" ? styles.containerImageDark : styles.containerImageLigth}`}
            >
              <Image
                alt="brand4"
                className={`${theme == "dark" ? styles.imageBrandDark : styles.imageBrandLigth}`}
                src={brand4}
              />
            </div>
            <div
              className={`${styles.containerImage} ${theme == "dark" ? styles.containerImageDark : styles.containerImageLigth}`}
            >
              <Image
                alt="brand5"
                className={`${theme == "dark" ? styles.imageBrandDark : styles.imageBrandLigth}`}
                src={brand5}
              />
            </div>
            <div
              className={`${styles.containerImage} ${theme == "dark" ? styles.containerImageDark : styles.containerImageLigth}`}
            >
              <Image
                alt="brand6"
                className={`${theme == "dark" ? styles.imageBrandDark : styles.imageBrandLigth}`}
                src={brand6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
