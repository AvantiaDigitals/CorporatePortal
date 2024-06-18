import React from "react";

import styles from "@/components/ButtonAnimate/Simple/ButtonAnimateSimple.module.css";

interface ParamsButtonAnimateSimple {
  text: string;
  src?: string;
}

const ButtonAnimateSimple: React.FC<ParamsButtonAnimateSimple> = ({ text }) => {
  return <button className={`${styles.buttonSimple}`}>{text}</button>;
};

export default ButtonAnimateSimple;
