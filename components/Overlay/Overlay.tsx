import React from "react";

import styles from "@/components/Overlay/Overlay.module.css";

interface ParamsOverlay {
  show: boolean;
  close: () => void;
}

const Overlay: React.FC<ParamsOverlay> = ({ show, close }) => {
  return (
    <div
      className={`${styles.overlay} ${show ? styles.open : ""}`}
      role="none"
      onClick={close}
      onKeyUp={() => {}}
    />
  );
};

export default Overlay;
