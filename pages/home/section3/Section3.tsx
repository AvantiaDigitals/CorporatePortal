"use client";

import { useTheme } from "next-themes";
// import Image from "next/image";

// import imageWeb from "@/public/web.svg";
// import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
// import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import { Slide } from "@/components/Slide/Slide";
import styles from "@/pages/home/section3/Section3.module.css";

export function ThirdSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={`${styles.container}`}>
        <Slide />
      </div>
    </section>
  );
}
