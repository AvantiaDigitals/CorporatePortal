import React from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound.module.css";

interface ParamsButtonAnimateBackgound {
  text: string;
  style?: string;
  src?: string;
  className?: string;
  showEffect?: boolean;
}

const ButtonAnimateBackgound: React.FC<ParamsButtonAnimateBackgound> = ({
  text,
  style,
  className,
  showEffect = true,
}) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonLarge} ${showEffect == true ? styles.buttonTransparent : ""} ${style == "dark" ? styles.dark : ""} ${className}`}
    >
      <span className={styles.text}>{text}</span>
      <FontAwesomeIcon icon={faCaretRight} size="xs" />
    </button>
  );
};

export default ButtonAnimateBackgound;
