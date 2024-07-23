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
import styles from "@/pages/home/section2/Section2.module.css";

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
              className={`${styles.subtitle} ${theme == "dark" ? styles.colorDark : styles.colorLigth}`}
            >
              Services we can help you with
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
        <div className={styles.cards}>
          <CardIcon
            ballColor={styles.iconInner1}
            href="/services/design"
            icon={faPaintBrush}
            sheetColor={styles.icon1}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Design"
          />
          <CardIcon
            ballColor={styles.iconInner2}
            href="/services/development"
            icon={faCode}
            sheetColor={styles.icon2}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Development"
          />
          <CardIcon
            ballColor={styles.iconInner3}
            href="/services/marketing"
            icon={faComment}
            sheetColor={styles.icon3}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Online marketing"
          />
          <CardIcon
            ballColor={styles.iconInner4}
            href="/services/bussines"
            icon={faBuilding}
            sheetColor={styles.icon4}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Business"
          />
          <CardIcon
            ballColor={styles.iconInner5}
            href="/services/technology"
            icon={faLaptop}
            sheetColor={styles.icon5}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Technology"
          />
          <CardIcon
            ballColor={styles.iconInner6}
            href="/services/contentStrategy"
            icon={faBarChart}
            sheetColor={styles.icon6}
            text="We design professional looking yet simple websites. Our designs are search engine and user friendly."
            title="Content strategy"
          />
        </div>
      </div>
    </section>
  );
}
