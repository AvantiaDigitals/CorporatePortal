"use client";

import React, { useState, useRef } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { TypeParamsNavbarItem } from "@/components/Navbar/NavbarMenu/NavbarItem/TypeParamsNavbarItem";
import styles from "@/components/Navbar/NavbarAside/NavbarAsideItem/NavbarAsideItem.module.css";

interface ParamsNavbarAsideItem {
  params: TypeParamsNavbarItem;
}

const NavbarAsideItem: React.FC<ParamsNavbarAsideItem> = ({ params }) => {
  const optionsRef = useRef(null);
  const [showSubMenu, SetShowSubMenu] = useState(false);
  const [heightState, SetHeight] = useState(0);
  const router = useRouter();

  const goToPage = (href: string) => {
    router.push(href);
  };

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
        onClick={
          params.options
            ? ShowSubMenu
            : () => {
                params.showMenu!();
                goToPage(params.href);
              }
        }
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
        {params.options?.map((item) => (
          <li
            key={item.id}
            className={styles.link}
            role="none"
            onClick={params.showMenu}
            onKeyUp={() => {}}
          >
            <Link href={item.href} onClick={params.showMenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavbarAsideItem;
