"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import Label from "@/components/Label/Label";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/about/Section3/Section3.module.css";

export default function ThreethSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <ScrollComponent>
            <Label text="our valus" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.subtitle} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Why should you work with us?
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.textSubtitle} ${theme == "dark" ? styles.colorDark : styles.colorLigth}`}
            >
              Nulla facilisi. Nullam in magna id dolor blandit rutrum eget
              vulputate augue sed eu leo eget risus imperdiet.
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
              href="/services/detail/32"
            >
              Exceed clients’ and colleagues’ expectations
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur
              tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl.
              Maecenas scelerisque dignissim elit.
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
              href="/services/detail/33"
            >
              Take ownership and question the status quo in a constructive
              manner
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur
              tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl.
              Maecenas scelerisque dignissim elit.
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
              href="/services/detail/34"
            >
              Be brave, curious and experiment – learn from all successes and
              failures
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur
              tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl.
              Maecenas scelerisque dignissim elit.
            </p>
          </div>
          <div className={styles.process}>
            <span
              className={`${styles.processNumber} ${styles.processColorYellow}`}
            >
              4
            </span>
            <Link
              className={`${styles.processTitle} ${theme == "dark" ? styles.colorDark : ""}`}
              href="/services/detail/35"
            >
              Act in a way that makes all of us proud
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur
              tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl.
              Maecenas scelerisque dignissim elit.
            </p>
          </div>
          <div className={styles.process}>
            <span
              className={`${styles.processNumber} ${styles.processColorGreen}`}
            >
              5
            </span>
            <Link
              className={`${styles.processTitle} ${theme == "dark" ? styles.colorDark : ""}`}
              href="/services/detail/36"
            >
              Build an inclusive, transparent and socially responsible culture
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur
              tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl.
              Maecenas scelerisque dignissim elit.
            </p>
          </div>
          <div className={styles.process}>
            <span
              className={`${styles.processNumber} ${styles.processColorOrange}`}
            >
              6
            </span>
            <Link
              className={`${styles.processTitle} ${theme == "dark" ? styles.colorDark : ""}`}
              href="/services/detail/37"
            >
              Exceed clients’ and colleagues’ expectations
            </Link>
            <p
              className={`${styles.processDescription} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur
              tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl.
              Maecenas scelerisque dignissim elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
