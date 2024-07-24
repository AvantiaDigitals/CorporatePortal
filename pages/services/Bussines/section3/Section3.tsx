"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

import process1 from "@/public/process-01.jpg";
import process2 from "@/public/process-02.jpg";
import Label from "@/components/Label/Label";
import { Component3D } from "@/components/Component3D/Component3D";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/services/Bussines/section3/Section3.module.css";

export default function ThirdSection() {
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
              className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
            >
              Our design process
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Our comprehensive design strategy ensures a perfectly crafted design for your business.
            </p>
          </ScrollComponent>
        </div>

        <div className={styles.processContainer}>
          <div className={styles.imageConainer}>
            <Component3D>
              <Image alt="Diagram" src={process1} />
            </Component3D>
          </div>
          <div className={styles.contentContainer}>
            <ScrollComponent>
              <div className={styles.labelContainer}>
                <Label color="blue" text="our four step process" />
                <span
                  className={`${styles.number} ${theme == "dark" ? styles.numberDark : ""}`}
                >
                  1
                </span>
              </div>
            </ScrollComponent>
            <ScrollComponent>
              <h2
                className={`${styles.title} ${styles.titleProcess} ${theme == "dark" ? styles.dark : ""}`}
              >
                Discover
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <p
                className={`${styles.paragraph} ${styles.paragraphProcess} ${theme == "dark" ? styles.dark : styles.light}`}
              >
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </ScrollComponent>
          </div>
        </div>

        <div className={styles.processContainer}>
          <div className={styles.imageConainer}>
            <Component3D>
              <Image alt="Diagram" src={process2} />
            </Component3D>
          </div>
          <div className={styles.contentContainer}>
            <ScrollComponent>
              <div className={styles.labelContainer}>
                <Label color="purple" text="our four step process" />
                <span
                  className={`${styles.number} ${theme == "dark" ? styles.numberDark : ""}`}
                >
                  2
                </span>
              </div>
            </ScrollComponent>
            <ScrollComponent>
              <h2
                className={`${styles.title} ${styles.titleProcess} ${theme == "dark" ? styles.dark : ""}`}
              >
                Prototype
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <p
                className={`${styles.paragraph} ${styles.paragraphProcess} ${theme == "dark" ? styles.dark : styles.light}`}
              >
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </ScrollComponent>
          </div>
        </div>

        <div className={styles.processContainer}>
          <div className={styles.imageConainer}>
            <Component3D>
              <Image alt="Diagram" src={process1} />
            </Component3D>
          </div>
          <div className={styles.contentContainer}>
            <ScrollComponent>
              <div className={styles.labelContainer}>
                <Label color="orange" text="our four step process" />
                <span
                  className={`${styles.number} ${theme == "dark" ? styles.numberDark : ""}`}
                >
                  3
                </span>
              </div>
            </ScrollComponent>
            <ScrollComponent>
              <h2
                className={`${styles.title} ${styles.titleProcess} ${theme == "dark" ? styles.dark : ""}`}
              >
                Test
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <p
                className={`${styles.paragraph} ${styles.paragraphProcess} ${theme == "dark" ? styles.dark : styles.light}`}
              >
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </ScrollComponent>
          </div>
        </div>

        <div className={styles.processContainer}>
          <div className={styles.imageConainer}>
            <Component3D>
              <Image alt="Diagram" src={process2} />
            </Component3D>
          </div>
          <div className={styles.contentContainer}>
            <ScrollComponent>
              <div className={styles.labelContainer}>
                <Label
                  className={styles.label}
                  color="blue"
                  text="our four step process"
                />
                <span
                  className={`${styles.number} ${theme == "dark" ? styles.numberDark : ""}`}
                >
                  4
                </span>
              </div>
            </ScrollComponent>
            <ScrollComponent>
              <h2
                className={`${styles.title} ${styles.titleProcess} ${theme == "dark" ? styles.dark : ""}`}
              >
                Build
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <p
                className={`${styles.paragraph} ${styles.paragraphProcess} ${theme == "dark" ? styles.dark : styles.light}`}
              >
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. Vestibulum eget risus velit.
                Aliquam tristique libero at dui sodales, et placerat orci
                lobortis. Maecenas ipsum neque, elementum id dignissim et,
                imperdiet vitae mauris.
              </p>
            </ScrollComponent>
          </div>
        </div>
      </div>
    </section>
  );
}
