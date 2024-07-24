"use client";

import { useTheme } from "next-themes";
import {
  faCrosshairs,
  faCode,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

import Label from "@/components/Label/Label";
import { Accordion, ItemAccordion } from "@/components/Accordion/Accordion";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/services/Development/section2/Section2.module.css";

export default function SecondSection() {
  const { theme } = useTheme();
  const listItems: ItemAccordion[] = [
    {
      icon: faCrosshairs,
      title: "Strategy",
      subtitle:
        "Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.",
      isSelected: true,
    },
    {
      icon: faCode,
      title: "Design",
      subtitle:
        "Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.",
      isSelected: false,
    },
    {
      icon: faLaptop,
      title: "Development",
      subtitle:
        "Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.",
      isSelected: false,
    },
  ];

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <ContactForm className={styles.form} />
        </div>
        <div className={styles.rightContent}>
          <ScrollComponent>
            <Label text="about us" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
            >
              Why branding matters?
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Ut condimentum enim nec diam convallis mollis. Sed felis quam, semper dapibus purus sed, rhoncus ullamcorper lacus.
            </p>
          </ScrollComponent>
          <Accordion listItems={listItems} />
        </div>
      </div>
    </section>
  );
}
