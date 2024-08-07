import React from "react";
import { useTheme } from "next-themes";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { Component3D } from "@/components/Component3D/Component3D";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/components/Cards/CardIcon/CardIcon.module.css";

interface ParamsCardIcon {
  title: string;
  text: string;
  icon: IconDefinition;
  sheetColor: string;
  ballColor: string;
  href?: string;
  className?: string;
}

const CardIcon: React.FC<ParamsCardIcon> = ({
  title,
  text,
  icon,
  sheetColor,
  ballColor,
  href,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <ScrollComponent>
      <Component3D>
        <Link href={href != undefined ? href : "/"}>
          <div
            className={`${styles.container} ${theme == "dark" ? styles.containerDark : styles.containerLigth} ${className}`}
          >
            <div className={`${styles.icon} ${sheetColor}`}>
              <div className={`${styles.iconInner} ${ballColor}`}>
                <div className={styles.layerImage}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
            <h3
              className={`${styles.title} ${theme == "dark" ? styles.dark : styles.ligth}`}
            >
              {title}
            </h3>
            <p
              className={`${styles.subtitle} ${theme == "dark" ? styles.dark : styles.ligth}`}
            >
              {text}
            </p>
            <span
              className={`${theme == "dark" ? styles.buttonDark : styles.button}`}
            >
              Learn More
            </span>
          </div>
        </Link>
      </Component3D>
    </ScrollComponent>
  );
};

export default CardIcon;
