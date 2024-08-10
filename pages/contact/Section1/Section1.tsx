"use client";

import { useTheme } from "next-themes";

import { BreadCrumb, ItemBreadCrumb } from "@/components/BreadCrumb/BreadCrumb";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/contact/Section1/Section1.module.css";

const FirstSection = () => {
  const { theme } = useTheme();
  const listBreadCrumb: ItemBreadCrumb[] = [
    { text: "Home", href: "/" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.firstSecctionDark : styles.firstSecctionLigth}`}
    >
      <div className={`${styles.container}`}>
        <BreadCrumb listItems={listBreadCrumb} />
        <ScrollComponent>
          <h2
            className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
          >
            Contact
          </h2>
        </ScrollComponent>
      </div>
    </section>
  );
};

export default FirstSection;
