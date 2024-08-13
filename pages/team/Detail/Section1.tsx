"use client";

import { useTheme } from "next-themes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import styles from "@/pages/team/Detail/Section1.module.css";
import { Component3D } from "@/components/Component3D/Component3D";

export default function FirstSection({
  alt,
  src,
  title,
  subtitle,
  description,
}: {
  alt?: string;
  src?: string | StaticImport;
  title?: string;
  subtitle?: string;
  description?: string;
}) {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Component3D>
            <div
              className={`${theme == "dark" ? styles.containerDark : styles.containerLigth}`}
            >
              <Image alt={alt ? alt : ""} src={src ? src : ""} />
            </div>
          </Component3D>
        </div>
        <div className={styles.bottomContainer}>
          <h2
            className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
          >
            {title}
          </h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <div className={styles.boxIcons}>
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "facebook-f"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "twitter"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "github"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "linkedin-in"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "instagram"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "pinterest-p"]}
              size="lg"
            />
          </div>
          <p
            className={`${styles.description} ${theme == "dark" ? styles.dark : ""}`}
          >
            {description ? description : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
