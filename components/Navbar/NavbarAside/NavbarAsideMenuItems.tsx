"use client";

import React from "react";
import { useTheme } from "next-themes";

import NavbarAsideLeft from "@/components/Navbar/NavbarAside/NavbarAsideMenuItems/NavbarAsideLeft/NavbarAsideLeft";
import NavbarAsideRigth from "@/components/Navbar/NavbarAside/NavbarAsideMenuItems/NavbarAisdeRigth/NavbarAsideRigth";
import styles from "@/components/Navbar/NavbarAside/NavbarAsideMenuItems.module.css";

interface ParamsNavbarAside {
  showMenu: () => void;
  isShow: boolean;
}

const NavbarAside: React.FC<ParamsNavbarAside> = ({ showMenu, isShow }) => {
  const { theme } = useTheme();

  return (
    <aside
      className={`${styles.menu} ${isShow ? styles.show : ""} ${theme == "dark" ? styles.dark : styles.light}`}
    >
      <NavbarAsideLeft showMenu={showMenu} />
      <NavbarAsideRigth showMenu={showMenu} />
    </aside>
  );
};

export default NavbarAside;
