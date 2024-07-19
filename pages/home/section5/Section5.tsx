"use client";

import { useTheme } from "next-themes";

import Label from "@/components/Label/Label";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import { GridImage } from "@/components/GridImage/GridImage";
import styles from "@/pages/home/section5/Section5.module.css";

export default function FifthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <ScrollComponent>
          <Label className={styles.label} text="our projects" />
        </ScrollComponent>
        <GridImage />
        <ButtonAnimateBackgound
          className={styles.button}
          style={theme}
          text="Discover More Projects"
        />
      </div>
    </section>
  );
}
