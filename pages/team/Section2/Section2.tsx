"use client";

import { useTheme } from "next-themes";
import {
  faClipboard,
  faLineChart,
  faUsers,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Label from "@/components/Label/Label";
import Counter from "@/components/Counter/Counter";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/team/Section2/Section2.module.css";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";

export default function SecondSection() {
  const TIME_COUNTER: number = 1500;
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <ScrollComponent>
            <Label color="green" text="experts in field" />
          </ScrollComponent>
          <ScrollComponent>
            <h2 className={styles.title}>What makes us special?</h2>
          </ScrollComponent>
          <ScrollComponent>
            <p className={styles.text}>
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
              tristique liber
            </p>
          </ScrollComponent>
          <ScrollComponent>
            <ButtonAnimateBackgound style={theme} text="Carrers" />
          </ScrollComponent>
        </div>
        <div className={styles.bottomContainer}>
          <div
            className={`${styles.box} ${theme == "dark" ? styles.dark : ""}`}
          >
            <div className={`${styles.icon} ${styles.violete}`}>
              <FontAwesomeIcon
                icon={faClipboard}
                style={{ color: "#702fff", height: 25 }}
              />
            </div>
            <span className={styles.number}>
              <Counter duration={TIME_COUNTER} end={15} start={0} />+
            </span>
            <span className={styles.subtitle}>Years of operation</span>
          </div>
          <div
            className={`${styles.box} ${theme == "dark" ? styles.dark : ""}`}
          >
            <div className={`${styles.icon} ${styles.orange}`}>
              <FontAwesomeIcon
                icon={faLineChart}
                style={{ color: "#fd7e14", height: 25 }}
              />
            </div>
            <span className={styles.number}>
              <Counter duration={TIME_COUNTER} end={360} start={0} />+
            </span>
            <span className={styles.subtitle}>Projects deliverd</span>
          </div>
          <div
            className={`${styles.box} ${theme == "dark" ? styles.dark : ""}`}
          >
            <div className={`${styles.icon} ${styles.blue}`}>
              <FontAwesomeIcon
                icon={faUsers}
                style={{ color: "#0dcaf0", height: 25 }}
              />
            </div>
            <span className={styles.number}>
              <Counter duration={TIME_COUNTER} end={600} start={0} />+
            </span>
            <span className={styles.subtitle}>Specialist</span>
          </div>
          <div
            className={`${styles.box} ${theme == "dark" ? styles.dark : ""}`}
          >
            <div className={`${styles.icon} ${styles.green}`}>
              <FontAwesomeIcon
                icon={faCogs}
                style={{ color: "#20c997", height: 25 }}
              />
            </div>
            <span className={styles.number}>
              <Counter duration={TIME_COUNTER} end={64} start={0} />+
            </span>
            <span className={styles.subtitle}>Years of operation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
