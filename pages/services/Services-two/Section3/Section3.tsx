"use client";

import { useTheme } from "next-themes";
import {
  faPaintBrush,
  faComment,
  faCode,
  faLaptop,
  faBarChart,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import Label from "@/components/Label/Label";
import CardIcon from "@/components/Cards/CardIcon/CardIcon";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/services/Services-two/Section3/Section3.module.css";

export default function SecondSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <ScrollComponent>
            <Label text="what we can do for you" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.subtitle} ${theme == "dark" ? styles.colorDark : ""}`}
            >
              Our capabilities
            </h2>
          </ScrollComponent>
        </div>
        <div className={styles.cards}>
          <CardIcon
            ballColor={styles.iconInner1}
            className={`${theme == "dark" ? styles.cardDark : ""}`}
            href="/services/detail/23"
            icon={faPaintBrush}
            sheetColor={styles.icon1}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Visual branding"
          />
          <CardIcon
            ballColor={styles.iconInner2}
            className={`${theme == "dark" ? styles.cardDark : ""}`}
            href="/services/detail/24"
            icon={faCode}
            sheetColor={styles.icon2}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Development"
          />
          <CardIcon
            ballColor={styles.iconInner3}
            className={`${theme == "dark" ? styles.cardDark : ""}`}
            href="/services/detail/25"
            icon={faComment}
            sheetColor={styles.icon3}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Creative production"
          />
          <CardIcon
            ballColor={styles.iconInner4}
            className={`${theme == "dark" ? styles.cardDark : ""}`}
            href="/services/detail/26"
            icon={faBuilding}
            sheetColor={styles.icon4}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Digital marketing"
          />
          <CardIcon
            ballColor={styles.iconInner5}
            className={`${theme == "dark" ? styles.cardDark : ""}`}
            href="/services/detail/27"
            icon={faLaptop}
            sheetColor={styles.icon5}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Interaction"
          />
          <CardIcon
            ballColor={styles.iconInner6}
            className={`${theme == "dark" ? styles.cardDark : ""}`}
            href="/services/detail/28"
            icon={faBarChart}
            sheetColor={styles.icon6}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="SEO optimization"
          />
        </div>
      </div>
    </section>
  );
}
