"use client";

import React from "react";
import {
  faClose,
  faPhone,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ParamsNabvarMenu } from "@/components/Navbar/NavbarMenu/NavbarMenu";
import styles from "@/components/Navbar/NavbarAside/NavbarAsideMenuItems/NavbarAisdeRigth/NavbarAsideRigth.module.css";

const NavbarAsideRigth: React.FC<ParamsNabvarMenu> = ({ showMenu }) => {
  return (
    <div className={styles.asideDesk}>
      <div
        className={styles.buttonClose}
        role="button"
        tabIndex={0}
        onClick={showMenu}
        onKeyUp={() => {}}
      >
        <FontAwesomeIcon icon={faClose} size="2x" />
      </div>
      <div className={styles.search} />
      <div className={styles.buttons}>
        <div className={styles.links}>
          <span className={styles.link}>Digital Agency</span>
          <span className={styles.link}>Creative Agency</span>
          <span className={styles.link}>Personal Portafolio</span>
          <span className={styles.link}>Home Startup</span>
          <span className={styles.link}>Corporate Agency</span>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.info}>
            <span className={styles.subTitle}>Contact Information</span>
            <p>Theodore Lowe, Ap #867-859</p>
            <p>Sit Rd, Azusa New York</p>
          </div>
          <div className={styles.info}>
            <span className={styles.subTitle}>
              We are Available 24/ 7. Call Now.
            </span>
            <p>
              <FontAwesomeIcon icon={faPhone} size="xs" /> &nbsp;(888) 456-2790
            </p>
            <p>
              <FontAwesomeIcon icon={faBuilding} size="xs" /> &nbsp;(121)
              255-53333
            </p>
          </div>
          <div className={styles.socialBox}>
            <span className={styles.subTitle}>Find us here</span>
            <div className={styles.socialButtons}>
              <div className={styles.containerSocialIcon}>
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  size="lg"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className={styles.containerSocialIcon}>
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size="lg"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className={styles.containerSocialIcon}>
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="lg"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className={styles.containerSocialIcon}>
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size="lg"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAsideRigth;
