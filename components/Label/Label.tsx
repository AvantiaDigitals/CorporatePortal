import React from "react";

import styles from "@/components/Label/Label.module.css";

interface ParamsLabel {
  text: string;
}

const Label: React.FC<ParamsLabel> = ({ text }) => {
  return <span className={`${styles.label} ${styles.green}`}>{text}</span>;
};

export default Label;
