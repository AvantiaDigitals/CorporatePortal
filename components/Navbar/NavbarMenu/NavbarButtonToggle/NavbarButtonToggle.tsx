"use client";

import { useTheme } from "next-themes";

import styles from "@/components/Navbar/NavbarMenu/NavbarButtonToggle/NavbarButtonToggle.module.css";

export default function NavbarButtonToggle() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();

  return (
    <div
      className={`${theme == "dark" ? styles.buttonDark : styles.buttonLight}`}
    >
      <span className={theme == "dark" ? styles.lineDark : styles.lineLight} />
    </div>
  );
}
