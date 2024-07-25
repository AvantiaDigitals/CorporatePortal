"use client";

import { useTheme } from "next-themes";

import Label from "@/components/Label/Label";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import { ItemSubNav } from "@/components/SubNav/SubNav";
import CardIcon from "@/components/Cards/CardIcon/CardIcon";
import styles from "@/pages/services/Main/Section2/SubSection/SubSection.module.css";

export default function SubSection({ sections }: { sections: ItemSubNav[] }) {
  const { theme } = useTheme();

  return (
    <>
      {sections?.map((item, index) => (
        <div
          key={index}
          className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
          id={item.area}
        >
          <div className={styles.container}>
            <div className={styles.header}>
              <ScrollComponent>
                <Label color="blue" text="services" />
              </ScrollComponent>
              <ScrollComponent>
                <h2 className={styles.title}>{item.area}</h2>
              </ScrollComponent>
            </div>
            <div className={styles.cards}>
              {item.cards.map((card, index) => (
                <CardIcon
                  key={index}
                  ballColor={card.ballColor}
                  className={`${theme == "dark" ? styles.cardDark : styles.cardLigth}`}
                  href={card.href}
                  icon={card.icon}
                  sheetColor={card.sheetColor}
                  text={card.text}
                  title={card.title}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}