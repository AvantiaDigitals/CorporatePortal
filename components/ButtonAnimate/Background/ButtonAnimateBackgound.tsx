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
  onClick?: () => void;
}

const ButtonAnimateBackgound: React.FC<ParamsButtonAnimateBackgound> = ({
  text,
  style,
  className,
  showEffect = true,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles.buttonLarge} ${showEffect == true ? styles.buttonTransparent : ""} ${style == "dark" ? styles.dark : ""} ${className}`}
      onClick={onClick}
    >
      <span className={styles.text}>{text}</span>
      <FontAwesomeIcon icon={faCaretRight} size="xs" />
    </button>
  );
};

export default ButtonAnimateBackgound;
