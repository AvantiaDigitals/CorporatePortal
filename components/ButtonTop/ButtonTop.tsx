"use client";

import React, { useState, useEffect } from "react";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

import styles from "@/components/ButtonTop/ButtonTop.module.css";

export interface ParamsButtonTop {
  positionShow: number;
  text: string;
  className?: string;
}

const ButtonTop: React.FC<ParamsButtonTop> = ({
  positionShow,
  text,
  className,
}) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const triggerPosition = positionShow; // Posición de scroll en la que se muestra el elemento
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= triggerPosition) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${theme == "dark" ? styles.dark : ""} ${className} ${visible ? styles.show : ""}`}
      role="button"
      tabIndex={0}
      onClick={scrollToTop}
      onKeyUp={() => {}}
    >
      <FontAwesomeIcon className={styles.icon} icon={faCaretUp} size="1x" />
      <span>{text}</span>
    </div>
  );
};

export default ButtonTop;
