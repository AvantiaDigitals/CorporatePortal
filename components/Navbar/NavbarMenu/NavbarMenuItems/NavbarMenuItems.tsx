import React from "react";

import { siteConfig } from "@/config/site";
import NavbarItem from "@/components/Navbar/NavbarMenu/NavbarItem/NavbarItem";
import styles from "@/components/Navbar/NavbarMenu/NavbarMenuItems/NavbarMenuItems.module.css";

interface ParamsNavbarMenuItems {
  scrolling: boolean;
}

const NavbarMenuItems: React.FC<ParamsNavbarMenuItems> = ({ scrolling }) => {
  return (
    <div className={styles.optionButtonsContainer}>
      <ul className={styles.optionButtons}>
        {siteConfig.navItems.map((item) => (
          <NavbarItem
            key={item.id}
            params={{
              id: item.id,
              label: item.label,
              href: item.href,
              options: item.options,
              scrolling: scrolling,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavbarMenuItems;
