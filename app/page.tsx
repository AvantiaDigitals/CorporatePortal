"use client";

import { useTheme } from "next-themes";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

import imageWeb from "@/public/web.svg";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import { Component3D } from "@/components/Component3D/Component3D";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/styles/Home/Home.module.css";

library.add(fab);
dom.watch();

export default function Home() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.firstSecctionDark : styles.firstSecctionLigth}`}
    >
      <div className={`${styles.container} ${styles.firstContainer}`}>
        <div className={styles.boxContainerLeft}>
          <Component3D>
            <Image
              priority
              alt="Web devices"
              className={`${styles.image}`}
              src={imageWeb}
            />
          </Component3D>
        </div>
        <div className={styles.boxContainerRight}>
          <h1
            className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
          >
            Build stunning websites & apps.
          </h1>
          <span
            className={`${styles.subtitle} ${theme == "dark" ? styles.dark : ""}`}
          >
            Create live segments and target the right people for messages based
            on their behaviors.
          </span>
          <ScrollComponent>
            <ButtonAnimateBackgound style={theme} text="View Showcase" />
          </ScrollComponent>
        </div>
      </div>
    </section>
  );
}
