"use client";

import React from "react";
import { useTheme } from "next-themes";

import { TypeParamsNavbarItem } from "@/components/Navbar/NavbarMenu/NavbarItem/TypeParamsNavbarItem";
import styles from "@/components/Navbar/NavbarMenu/NavbarItem/NavbarItem.module.css";

interface ParamsNavbarItem {
  params: TypeParamsNavbarItem;
}

const NavbarItem: React.FC<ParamsNavbarItem> = ({ params }) => {
  const { theme } = useTheme();

  return (
    <li key={params.id} className={`${styles.primaryOption}`}>
      <button
        className={`${styles.button} ${params.scrolling ? styles.buttonMin : styles.buttonMax}`}
      >
        {params.label}
      </button>
      {params.options && (
        <ul
          className={`${styles.options} ${theme == "dark" ? styles.optionsDark : styles.optionsLight} ${params.scrolling ? styles.optionsMin : styles.optionsMax}`}
        >
          {params.options?.map((item) => <li key={item.id}>{item.label}</li>)}
        </ul>
      )}
    </li>
  );
};

export default NavbarItem;
