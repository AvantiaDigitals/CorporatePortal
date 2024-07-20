"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/components/ButtonToggleTheme/ButtonToggleTheme.module.css";

export function ButtonToggleTheme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme == "dark") {
      setTheme("dark");
    }
    if (theme == "light") {
      setTheme("light");
    }
  }, []);

  const switchTheme = () => {
    var status = theme == "dark" ? "light" : "dark";

    setTheme(status);
  };

  return (
    <div
      className={styles.switch}
      role="button"
      tabIndex={0}
      onClick={switchTheme}
      onKeyUp={() => {}}
    >
      <FontAwesomeIcon icon={theme == "dark" ? faSun : faMoon} />
      <span>{theme == "dark" ? " LIGHT" : " DARK"}</span>
    </div>
  );
}
