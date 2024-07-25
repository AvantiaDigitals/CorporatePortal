import React from "react";

import styles from "@/components/ButtonAnimate/Simple/ButtonAnimateSimple.module.css";


interface ParamsButtonAnimateSimple {
  text: string;
  onClick: (area: string) => void;
  className?: string;
}

const ButtonAnimateSimple: React.FC<ParamsButtonAnimateSimple> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${styles.buttonSimple} ${className}`}
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </button>
  );
};

export default ButtonAnimateSimple;
