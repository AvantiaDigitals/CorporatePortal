"use client";

import { useTheme } from "next-themes";
import {
  faCrosshairs,
  faCode,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

import Label from "@/components/Label/Label";
import { Accordion, ItemAccordion } from "@/components/Accordion/Accordion";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/portfolio/detail/Section2/Section2.module.css";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";

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
          <ScrollComponent>
            <Label color="blue" text="ios , design" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
            >
              Creative Agency
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
              tristique libero at dui sodales.
            </p>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              et placerat orci lobortis. Maecenas ipsum neque, elementum id
              dignissim et, imperdiet vitae mauris.
            </p>
          </ScrollComponent>
          <ScrollComponent>
            <ButtonAnimateBackgound
              className={styles.button}
              style={theme}
              text="Launch The Site"
            />
          </ScrollComponent>
        </div>
        <div className={styles.rightContent}>
          <ScrollComponent>
            <h2
              className={`${styles.subtitle} ${theme == "dark" ? styles.dark : ""}`}
            >
              We delivered
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Ut condimentum enim nec diam convallis mollis. Sed felis quam,
              semper dapibus purus sed, rhoncus ullamcorper lacus.
            </p>
          </ScrollComponent>
          <Accordion className={styles.accordion} listItems={listItems} />
        </div>
      </div>
    </section>
  );
}
