"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import Label from "@/components/Label/Label";
import team from "@/public/team-group.png";
import styles from "@/pages/home/section8/Section8.module.css";

export function EighthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Image
            alt="group"
            className={styles.image}
            color="green"
            src={team}
          />
          <span className={styles.count}>20+</span>
        </div>
        <div className={styles.downContainer}>
          <ScrollComponent>
            <Label text="our team" />
          </ScrollComponent>
          <ScrollComponent>
            <h2 className={styles.title}>
              Alone we can do so little; together we can do so much.
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p className={styles.text}>
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
              tristique libero.
            </p>
          </ScrollComponent>
          <div className={styles.buttons}>
            <ButtonAnimateBackgound style={theme} text="Our Team" />
            <span
              className={`${styles.subButton} ${theme == "dark" ? styles.subButtonDark : styles.subButtonLigth}`}
            >
              Careers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
