"use client";

import React from "react";
import { useTheme } from "next-themes";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import styles from "@/components/Cards/CardPrice/CardPrice.module.css";

export interface ParamsCardPrice {
  title: string;
  description: string;
  price: number;
  textButton: string;
  textWarranty: string;
  services: string[];
  isSelected?: boolean;
}

const CardPrice: React.FC<ParamsCardPrice> = ({
  title,
  description,
  price,
  textButton,
  textWarranty,
  services,
  isSelected,
}) => {
  const { theme } = useTheme();

  const ServiceItems = () => {
    return services.map((service, index) => (
      <li key={index} className={styles.itemList}>
        <FontAwesomeIcon className={styles.iconList} icon={faCheck} size="1x" />
        <span className={styles.textItemList}>{service}</span>
      </li>
    ));
  };

  return (
    <div
      className={`${styles.cardPrice} ${isSelected == true ? styles.selectedCard : ""} ${theme == "dark" ? styles.cardDark : styles.cardLigth}`}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.titleCard}>{title}</h3>
        <span className={styles.descriptionCard}>{description}</span>
      </div>
      <div className={styles.cardContainerPrice}>
        <span>
          <span className={styles.price}>${price}</span>/month
        </span>
        <span className={styles.modality}>Monthly</span>
      </div>
      <ButtonAnimateBackgound
        className={`${styles.button} ${isSelected == true ? styles.selected : ""}`}
        showEffect={!isSelected}
        style={`${isSelected != true ? theme : ""}`}
        text={textButton}
      />
      <span className={styles.warranty}>{textWarranty}</span>
      <hr className={styles.line} />
      <div className={styles.list}>
        <ul>{ServiceItems()}</ul>
      </div>
    </div>
  );
};

export default CardPrice;
