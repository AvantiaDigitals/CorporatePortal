import React from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound.module.css";

interface ParamsButtonAnimateBackgound {
  text: string;
  style?: string;
  src?: string;
}

const ButtonAnimateBackgound: React.FC<ParamsButtonAnimateBackgound> = ({
  text,
  style,
}) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonLarge} ${styles.buttonTransparent} ${style == "dark" ? styles.dark : ""}`}
    >
      <span className={styles.text}>{text}</span>
      <FontAwesomeIcon icon={faCaretRight} size="xs" />
    </button>
  );
};

export default ButtonAnimateBackgound;
