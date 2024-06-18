"use client";

import { useTheme } from "next-themes";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import styles from "@/components/Home/Home.module.css";

library.add(fab);
dom.watch();

export default function Home() {
  const { theme } = useTheme();

  return (
    <section
      className={
        theme == "dark" ? styles.firstSecctionDark : styles.firstSecctionLigth
      }
    />
  );
}
