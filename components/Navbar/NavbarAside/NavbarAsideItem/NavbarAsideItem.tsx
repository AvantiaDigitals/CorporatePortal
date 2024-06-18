"use client";

import React, { useState, useRef } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TypeParamsNavbarItem } from "@/components/Navbar/NavbarMenu/NavbarItem/TypeParamsNavbarItem";
import styles from "@/components/Navbar/NavbarAside/NavbarAsideItem/NavbarAsideItem.module.css";

interface ParamsNavbarAsideItem {
  params: TypeParamsNavbarItem;
}

const NavbarAsideItem: React.FC<ParamsNavbarAsideItem> = ({ params }) => {
  const optionsRef = useRef(null);
  const [showSubMenu, SetShowSubMenu] = useState(false);
  const [heightState, SetHeight] = useState(0);
  const ShowSubMenu = () => {
    if (!showSubMenu) {
      var heightOptionsContainer: any = optionsRef.current;

      SetHeight(heightOptionsContainer.scrollHeight);
    } else {
      SetHeight(0);
    }

    SetShowSubMenu(!showSubMenu);
  };

  return (
    <li key={params.id} className={styles.light}>
      <span
        className={`${styles.primary}`}
        role="none"
        onClick={ShowSubMenu}
        onKeyUp={() => {}}
      >
        <span className={styles.textOption}>{params.label}</span>
        {params.options != null && (
          <FontAwesomeIcon icon={faCaretDown} size="lg" />
        )}
      </span>
      <ul
        ref={optionsRef}
        className={`${styles.subOptions}`}
        style={{ height: heightState }}
      >
        {params.options?.map((item) => <li key={item.id}>{item.label}</li>)}
      </ul>
    </li>
  );
};

export default NavbarAsideItem;
