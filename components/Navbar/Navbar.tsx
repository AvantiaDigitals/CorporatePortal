"use client";

import React, { useState } from "react";

import NavbarMenu from "@/components/Navbar/NavbarMenu/NavbarMenu";
import NavbarAside from "@/components/Navbar/NavbarAside/NavbarAsideMenuItems";
import { ButtonToggleTheme } from "@/components/ButtonToggleTheme/ButtonToggleTheme";
import { Footer } from "@/components/Footer/Footer";
import Overlay from "@/components/Overlay/Overlay";
import styles from "@/components/Navbar/Nav.module.css";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, SetShowMenu] = useState(false);
  const ShowSubMenu = () => {
    SetShowMenu(!showMenu);
  };

  return (
    <div className={`${styles.container}`}>
      <ButtonToggleTheme />
      <Overlay close={ShowSubMenu} show={showMenu} />
      <NavbarMenu showMenu={ShowSubMenu} />
      <NavbarAside isShow={showMenu} showMenu={ShowSubMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
