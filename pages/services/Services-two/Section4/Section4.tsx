"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import Label from "@/components/Label/Label";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/services/Services-two/Section4/Section4.module.css";

export default function FourthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <ScrollComponent>
            <Label text="process" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.subtitle} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              This is our way
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.textSubtitle} ${theme == "dark" ? styles.colorDark : styles.colorLigth}`}
            >
              In vel varius turpis, non dictum sem. Aenean in efficitur ipsum,
              in egestas ipsum. Mauris in mi ac tellus.
            </p>
          </ScrollComponent>
        </div>
        <div className={styles.processes}>
          <div className={styles.process}>
            <span
              className={`${styles.processNumber} ${styles.processColorPurple}`}
            >
              1
            </span>
            <Link
              className={`${styles.processTitle} ${theme == "dark" ? styles.colorDark : ""}`}
              href="/services/detail/29"
            >
              1. Discuss
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
          <div className={styles.process}>
            <span
              className={`${styles.processNumber} ${styles.processColorOrange}`}
            >
              2
            </span>
            <Link
              className={`${styles.processTitle} ${theme == "dark" ? styles.colorDark : ""}`}
              href="/services/detail/30"
            >
              2. Mapping
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
          <div className={styles.process}>
            <span
              className={`${styles.processNumber} ${styles.processColorBlue}`}
            >
              3
            </span>
            <Link
              className={`${styles.processTitle} ${theme == "dark" ? styles.colorDark : ""}`}
              href="/services/detail/31"
            >
              3. Execution
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
