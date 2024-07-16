"use client";

import { useTheme } from "next-themes";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import Label from "@/components/Label/Label";
import styles from "@/pages/home/section9/Section9.module.css";

export function NinethSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <ScrollComponent>
            <Label color="blue" text="pricing plan" />
          </ScrollComponent>
          <ScrollComponent>
            <h2 className={styles.title}>From getting started</h2>
          </ScrollComponent>
          <ScrollComponent>
            <p className={styles.text}>
              In vel varius turpis, non dictum sem. Aenean in efficitur ipsum,
              in egestas ipsum. Mauris in mi ac tellus.
            </p>
          </ScrollComponent>
        </div>
        <div className={styles.downContainer}>
          <div
            className={`${styles.cardPrice} ${styles.selectedCard} ${theme == "dark" ? styles.cardDark : styles.cardLigth}`}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.titleCard}>Small Busiines</h3>
              <span className={styles.descriptionCard}>
                A beautiful, simple website
              </span>
            </div>
            <div className={styles.cardContainerPrice}>
              <span>
                <span className={styles.price}>$46</span>/month
              </span>
              <span className={styles.modality}>Monthly</span>
            </div>
            <ButtonAnimateBackgound
              className={`${styles.button} ${styles.selected}`}
              showEffect={false}
              text="Get Started Today"
            />
            <span className={styles.warranty}>100% money back guarantee</span>
            <hr className={styles.line} />
            <div className={styles.list}>
              <ul>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    10 Pages Responsive Website
                  </span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>5 PPC Campaigns</span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>10 SEO Keywords</span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    5 Facebook Camplaigns
                  </span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    2 Video Camplaigns
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${styles.cardPrice} ${theme == "dark" ? styles.cardDark : styles.cardLigth}`}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.titleCard}>Medium business</h3>
              <span className={styles.descriptionCard}>
                A beautiful, simple website
              </span>
            </div>
            <div className={styles.cardContainerPrice}>
              <span>
                <span className={styles.price}>$99</span>/month
              </span>
              <span className={styles.modality}>Monthly</span>
            </div>
            <ButtonAnimateBackgound
              className={styles.button}
              style={theme}
              text="Get Started Today"
            />
            <span className={styles.warranty}>100% money back guarantee</span>
            <hr className={styles.line} />
            <div className={styles.list}>
              <ul>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    20 Pages Responsive Website
                  </span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    Unlimited PPC Campaigns
                  </span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    Unlimited SEO Keywords
                  </span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    Unlimited Facebook
                  </span>
                </li>
                <li className={styles.itemList}>
                  <FontAwesomeIcon
                    className={styles.iconList}
                    icon={faCheck}
                    size="1x"
                  />
                  <span className={styles.textItemList}>
                    Unlimited Video Camplaigns
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
