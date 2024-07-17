"use client";

import { useTheme } from "next-themes";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import Label from "@/components/Label/Label";
import styles from "@/pages/home/section12/Section12.module.css";

export function TwelfthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <ScrollComponent>
          <Label color="blue" text="Let's work together" />
        </ScrollComponent>
        <ScrollComponent>
          <h2 className={styles.title}>Need a successful project?</h2>
        </ScrollComponent>
        <ButtonAnimateBackgound
          className={styles.button}
          style={theme}
          text="Estimate Project"
        />
        <div className={styles.boxContact}>
          Or call us now
          <span
            className={`${styles.phone} ${theme == "dark" ? "" : styles.phoneLight}`}
          >
            &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faPhone} size="sm" />
            &nbsp;&nbsp;&nbsp;
            <span className={styles.number}>(123) 456 7890</span>
          </span>
        </div>
      </div>
    </section>
  );
}
