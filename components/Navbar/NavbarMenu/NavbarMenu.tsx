"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import logo from "@/public/Logo.png";
import NavbarButtonToggle from "@/components/Navbar/NavbarMenu/NavbarButtonToggle/NavbarButtonToggle";
import NavbarMenuItems from "@/components/Navbar/NavbarMenu/NavbarMenuItems/NavbarMenuItems";
import styles from "@/components/Navbar/NavbarMenu/NavbarMenu.module.css";

export interface ParamsNabvarMenu {
  showMenu: () => void;
}

const NavbarMenu: React.FC<ParamsNabvarMenu> = ({ showMenu }) => {
  const [scrolling, setScrolling] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.nav} ${scrolling ? (theme == "light" ? styles.positionLigth : styles.positionBlack) : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image priority alt="Logo" src={logo} />
        </div>
        <NavbarMenuItems scrolling={scrolling} />
        <div
          className={styles.buttonBox}
          role="button"
          tabIndex={0}
          onClick={showMenu}
          onKeyUp={() => {}}
        >
          <NavbarButtonToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
