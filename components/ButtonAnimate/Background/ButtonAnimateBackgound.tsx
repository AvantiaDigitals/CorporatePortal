import React from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound.module.css";

interface ParamsButtonAnimateBackgound {
  text: string;
  src?: string;
}

const ButtonAnimateBackgound: React.FC<ParamsButtonAnimateBackgound> = ({
  text,
}) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonLarge} ${styles.buttonTransparent}`}
    >
      <span className={styles.text}>{text}</span>
      <FontAwesomeIcon icon={faCaretRight} size="xs" />
    </button>
  );
};

export default ButtonAnimateBackgound;
