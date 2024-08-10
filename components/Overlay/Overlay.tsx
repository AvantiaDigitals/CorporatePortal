import React from "react";

import styles from "@/components/Overlay/Overlay.module.css";

interface ParamsOverlay {
  show: boolean;
  close: () => void;
  children?: React.ReactNode;
}

const Overlay: React.FC<ParamsOverlay> = ({ show, close, children }) => {
  return (
    <div
      className={`${styles.overlay} ${show ? styles.open : ""}`}
      role="none"
      onClick={close}
      onKeyUp={() => {}}
    >
      {children}
    </div>
  );
};

export default Overlay;
