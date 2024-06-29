import React from "react";

import styles from "@/components/Label/Label.module.css";

interface ParamsLabel {
  text: string;
  color?: string;
  className?: string;
}

const getColor = (color?: string) => {
  var style = styles.green;

  switch (color) {
    case "green":
      style = styles.green;
      break;
    case "blue":
      style = styles.blue;
      break;
    default:
      break;
  }

  return style;
};

const Label: React.FC<ParamsLabel> = ({ text, color, className }) => {
  var labelColor = getColor(color);

  return (
    <span className={`${styles.label} ${labelColor} ${className}`}>{text}</span>
  );
};

export default Label;
