"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Link } from "react-scroll";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import ButtonAnimateSimple from "@/components/ButtonAnimate/Simple/ButtonAnimateSimple";
import styles from "@/components/SubNav/SubNav.module.css";

export interface Card {
  icon: IconDefinition;
  title: string;
  text: string;
  sheetColor: string;
  ballColor: string;
  href: string;
}

export interface ItemSubNav {
  area: string;
  isSelected: boolean;
  cards: Card[];
}

export function SubNav({ items }: { items: ItemSubNav[] }) {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [listItems, setListItems] = useState(items);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          selectOption(entry.target.id);
        }
      });
    }, options);

    listItems.forEach((item) => {
      const element = document.getElementById(item.area);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      listItems.forEach((item) => {
        const element = document.getElementById(item.area);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const selectOption = (area: string) => {
    const copy = [...listItems];

    copy.forEach((item) => {
      item.isSelected = item.area == area;
    });

    setListItems(copy);
  };

  return (
    <nav
      className={`${styles.navContainer} ${theme == "dark" ? styles.navContainerDark : ""}`}
    >
      {listItems.map((item, index) => (
        <Link key={index} duration={500} smooth={true} to={item.area}>
          <ButtonAnimateSimple
            className={`${styles.navOption} ${item.isSelected ? styles.select : ""}`}
            text={item.area}
            onClick={selectOption}
          />
        </Link>
      ))}
    </nav>
  );
}