"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import styles from "@/components/Accordion/Accordion.module.css";

export interface ItemAccordion {
  icon: IconDefinition;
  title: string;
  subtitle: string;
  isSelected?: boolean;
}

export function Accordion({ listItems }: { listItems: ItemAccordion[] }) {
  const { theme } = useTheme();
  const [items, setItems] = useState(listItems);

  const selectedItem = (title: string) => {
    const copy = [...items];

    copy.forEach((i) => (i.isSelected = false));
    const item = copy.find((i) => i.title == title);

    if (item) {
      item.isSelected = true;
    }
    setItems(copy);
  };

  const printItems = () => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div
              className={`${styles.itemListContainer} ${item.isSelected == true ? styles.select : ""} ${theme == "dark" ? styles.itemListContainerDark : ""}`}
              role="none"
              onClick={() => {
                selectedItem(item.title);
              }}
            >
              <div className={styles.itemListHeader}>
                <FontAwesomeIcon
                  className={`${styles.icon} ${theme == "dark" ? styles.iconDark : ""}`}
                  icon={item.icon}
                  size="1x"
                />
                <span
                  className={`${styles.itemListTitle} ${theme == "dark" ? styles.itemListTitleDark : ""}`}
                >
                  {item.title}
                </span>
              </div>
              <p
                className={`${styles.itemListBody} ${theme == "dark" ? styles.itemListBodyDark : ""}`}
              >
                {item.subtitle}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return <div className={styles.containerList}>{printItems()}</div>;
}
