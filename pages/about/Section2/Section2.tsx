"use client";

import { useTheme } from "next-themes";

import CaseStudy from "@/components/CaseStudy/CaseStudy";
import image from "@/public/exams.svg";
import styles from "@/pages/about/Section2/Section2.module.css";

export default function SecondSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <CaseStudy
          key={1}
          alt="Two persons"
          content="Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris."
          percent={15}
          src={image}
          title="Building software for world changers"
          visits={60}
        />
      </div>
    </section>
  );
}
