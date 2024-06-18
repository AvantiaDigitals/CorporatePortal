"use client";

import React from "react";
import Image from "next/image";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { siteConfig } from "@/config/site";
import logo from "@/public/Logo.png";
import NavbarAsideItem from "@/components/Navbar/NavbarAside/NavbarAsideItem/NavbarAsideItem";
import { ParamsNabvarMenu } from "@/components/Navbar/NavbarMenu/NavbarMenu";
import styles from "@/components/Navbar/NavbarAside/NavbarAsideMenuItems/NavbarAsideLeft/NavbarAsideLeft.module.css";

const NavbarAsideLeft: React.FC<ParamsNabvarMenu> = ({ showMenu }) => {
  return (
    <div className={styles.asideMobile}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image priority alt="Logo" src={logo} />
        </div>

        <div
          className={styles.buttonClose}
          role="button"
          tabIndex={0}
          onClick={showMenu}
          onKeyUp={() => {}}
        >
          <FontAwesomeIcon icon={faClose} size="2x" />
        </div>
      </div>
      <ul className={styles.options}>
        {siteConfig.navItems.map((item) => (
          <NavbarAsideItem
            key={item.id}
            params={{
              id: item.id,
              label: item.label,
              href: item.href,
              options: item.options,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavbarAsideLeft;
