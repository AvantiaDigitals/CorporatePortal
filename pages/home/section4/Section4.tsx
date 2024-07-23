"use client";

import { useTheme } from "next-themes";

import Label from "@/components/Label/Label";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/home/section4/Section4.module.css";

export default function FourthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <ScrollComponent>
            <Label text="about us" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
            >
              We do design, code & develop.
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Nulla et velit gravida, facilisis quam a, molestie ante. Mauris
              placerat suscipit dui, eget maximus tellus blandit a. Praesent non
              tellus sed ligula commodo blandit in et mauris. Quisque efficitur
              ipsum ut dolor molestie pellentesque.
            </p>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a
              venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim
              eget libero.
            </p>
          </ScrollComponent>
        </div>
        <div className={styles.rightContent}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
