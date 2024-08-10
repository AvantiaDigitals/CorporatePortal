"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import image1 from "@/public/contact-01.jpg";
import image2 from "@/public/contact-02.jpg";
import Label from "@/components/Label/Label";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/contact/Section3/Section3.module.css";

export default function ThreethSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <ScrollComponent>
            <Label color="blue" text="who we are" />
          </ScrollComponent>
          <ScrollComponent>
            <h2 className={styles.title}>Our office</h2>
          </ScrollComponent>
        </div>
        <div className={styles.bottomContainer}>
          <ScrollComponent>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image alt="city" src={image1} />
              </div>
              <h3
                className={`${styles.cardTitle} ${theme == "dark" ? styles.dark : ""}`}
              >
                Virginia-HQ
              </h3>
              <span
                className={`${styles.cardAddress} ${theme == "dark" ? styles.dark : ""}`}
              >
                435 Pouros Locks
              </span>
              <span
                className={`${styles.cardCountry} ${theme == "dark" ? styles.dark : ""}`}
              >
                United States
              </span>
              <ButtonAnimateBackgound
                className={styles.cardButton}
                style={theme}
                text="View on Map"
              />
            </div>
          </ScrollComponent>
          <ScrollComponent>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image alt="city" src={image2} />
              </div>
              <h3
                className={`${styles.cardTitle} ${theme == "dark" ? styles.dark : ""}`}
              >
                Nevada
              </h3>
              <span
                className={`${styles.cardAddress} ${theme == "dark" ? styles.dark : ""}`}
              >
                46 Watsica Creek Suite 071
              </span>
              <span
                className={`${styles.cardCountry} ${theme == "dark" ? styles.dark : ""}`}
              >
                United States
              </span>
              <ButtonAnimateBackgound
                className={styles.cardButton}
                style={theme}
                text="View on Map"
              />
            </div>
          </ScrollComponent>
          <ScrollComponent>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image alt="city" src={image1} />
              </div>
              <h3
                className={`${styles.cardTitle} ${theme == "dark" ? styles.dark : ""}`}
              >
                Columbia
              </h3>
              <span
                className={`${styles.cardAddress} ${theme == "dark" ? styles.dark : ""}`}
              >
                7140 Wehner Tunnel
              </span>
              <span
                className={`${styles.cardCountry} ${theme == "dark" ? styles.dark : ""}`}
              >
                Washington, D.C
              </span>
              <ButtonAnimateBackgound
                className={styles.cardButton}
                style={theme}
                text="View on Map"
              />
            </div>
          </ScrollComponent>
          <ScrollComponent>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image alt="city" src={image1} />
              </div>
              <h3
                className={`${styles.cardTitle} ${theme == "dark" ? styles.dark : ""}`}
              >
                New Mexico
              </h3>
              <span
                className={`${styles.cardAddress} ${theme == "dark" ? styles.dark : ""}`}
              >
                10 Maggie Valleys
              </span>
              <span
                className={`${styles.cardCountry} ${theme == "dark" ? styles.dark : ""}`}
              >
                United States
              </span>
              <ButtonAnimateBackgound
                className={styles.cardButton}
                style={theme}
                text="View on Map"
              />
            </div>
          </ScrollComponent>
        </div>
      </div>
    </section>
  );
}
