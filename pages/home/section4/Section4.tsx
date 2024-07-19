"use client";

import { useTheme } from "next-themes";
import { Input } from "@nextui-org/input";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Label from "@/components/Label/Label";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import styles from "@/pages/home/section4/Section4.module.css";

export default function FourthSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <ScrollComponent>
            <Label text="about us" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
            >
              We do design, code & develop.
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Nulla et velit gravida, facilisis quam a, molestie ante. Mauris
              placerat suscipit dui, eget maximus tellus blandit a. Praesent non
              tellus sed ligula commodo blandit in et mauris. Quisque efficitur
              ipsum ut dolor molestie pellentesque.
            </p>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.paragraph} ${theme == "dark" ? styles.dark : styles.light}`}
            >
              Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a
              venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim
              eget libero.
            </p>
          </ScrollComponent>
        </div>
        <div className={styles.rightContent}>
          <div
            className={`${styles.formContainer} ${theme == "dark" ? styles.formContainerDark : ""}`}
          >
            <h2
              className={`${styles.titleForm} ${theme == "dark" ? styles.dark : ""}`}
            >
              Get a free Keystroke quote now
            </h2>
            <form>
              <div>
                <Input
                  className={styles.input}
                  classNames={{
                    label: `${styles.inputLabel}`,
                    inputWrapper: [styles.inputWrapper],
                  }}
                  label="Name"
                  type="text"
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  className={styles.input}
                  classNames={{
                    label: `${styles.inputLabel}`,
                    inputWrapper: [styles.inputWrapper],
                  }}
                  label="Email"
                  type="email"
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  className={styles.input}
                  classNames={{
                    label: `${styles.inputLabel}`,
                    inputWrapper: [styles.inputWrapper],
                  }}
                  label="Company"
                  type="text"
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  className={styles.input}
                  classNames={{
                    label: `${styles.inputLabel}`,
                    inputWrapper: [styles.inputWrapper],
                  }}
                  label="Phone"
                  type="tel"
                  variant="underlined"
                />
              </div>
              <ButtonAnimateBackgound
                className={styles.buttonAnimate}
                style={theme}
                text="Get Pricing Now"
              />
              <p
                className={`${styles.footer} ${theme == "dark" ? styles.dark : styles.light}`}
              >
                Or call us now
                <span
                  className={`${styles.phone} ${theme == "dark" ? "" : styles.phoneLight}`}
                >
                  &nbsp;
                  <FontAwesomeIcon icon={faPhone} size="sm" />
                  &nbsp;<span className={styles.number}>(123) 456 7890</span>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
