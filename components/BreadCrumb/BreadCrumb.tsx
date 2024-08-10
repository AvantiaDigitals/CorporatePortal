"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import styles from "@/components/BreadCrumb/BreadCrumb.module.css";

export interface ItemBreadCrumb {
  text: string;
  href: string;
}

export function BreadCrumb({ listItems }: { listItems: ItemBreadCrumb[] }) {
  const { theme } = useTheme();

  return (
    <nav>
      {listItems.map((item, index) => (
        <Link
          key={index}
          className={`${styles.link} ${theme == "dark" ? styles.dark : ""}`}
          href={item.href}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
}
