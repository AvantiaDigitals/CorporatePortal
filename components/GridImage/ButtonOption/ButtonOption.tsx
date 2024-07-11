"use client";

import React from "react";
import { useTheme } from "next-themes";

import styles from "@/components/GridImage/ButtonOption/ButtonOption.module.css";

export interface ParametersButtonOption {
  isChecked?: boolean;
  text: string;
  onClick: (option: string) => void;
}

const ButtonOption: React.FC<ParametersButtonOption> = ({
  isChecked,
  text,
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <button
      className={`${styles.button} ${isChecked ? (theme == "dark" ? `${styles.dark} ${styles.cheked}` : `${styles.ligth} ${styles.cheked}`) : ""}`}
      onClick={() => onClick(text)}
      onKeyUp={() => {}}
    >
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
};

export default ButtonOption;
