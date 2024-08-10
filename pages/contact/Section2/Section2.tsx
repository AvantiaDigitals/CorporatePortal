"use client";

import { useTheme } from "next-themes";
import { Input, Textarea } from "@nextui-org/input";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/contact/Section2/Section2.module.css";

const SecondSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.firstSecctionDark : styles.firstSecctionLigth}`}
    >
      <div className={`${styles.container}`}>
        <div className={styles.containerUp}>
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
                  label="Phone"
                  type="tel"
                  variant="underlined"
                />
              </div>
              <div>
                <Textarea
                  className={styles.input}
                  classNames={{
                    label: `${styles.inputLabel}`,
                    inputWrapper: [styles.inputWrapper],
                  }}
                  label="Your message"
                  minRows={5}
                  type="text"
                  variant="underlined"
                />
              </div>
              <ButtonAnimateBackgound
                className={styles.buttonAnimate}
                style={theme}
                text="Send Message"
              />
            </form>
          </div>
        </div>
        <div className={styles.containerDown}>
          <ScrollComponent>
            <div
              className={`${styles.card} ${theme == "dark" ? styles.cardDark : ""}`}
            >
              <FontAwesomeIcon
                className={`${styles.icon} ${theme == "dark" ? styles.dark : ""}`}
                icon={faPhone}
                size="2x"
              />
              <h3
                className={`${styles.cardTitle} ${theme == "dark" ? styles.dark : ""}`}
              >
                Phone
              </h3>
              <p
                className={`${styles.cardText} ${theme == "dark" ? styles.dark : ""}`}
              >
                Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm
              </p>
              <span className={styles.cardContact}>(123) 456 7890</span>
            </div>
          </ScrollComponent>
          <ScrollComponent>
            <div
              className={`${styles.card} ${theme == "dark" ? styles.cardDark : ""}`}
            >
              <FontAwesomeIcon
                className={`${styles.icon} ${theme == "dark" ? styles.dark : ""}`}
                icon={faEnvelope}
                size="2x"
              />
              <h3
                className={`${styles.cardTitle} ${theme == "dark" ? styles.dark : ""}`}
              >
                Email
              </h3>
              <p
                className={`${styles.cardText} ${theme == "dark" ? styles.dark : ""}`}
              >
                Our support team will get back to in 48-h during standard
                business hours.
              </p>
              <span className={styles.cardContact}>example@gmail.com</span>
            </div>
          </ScrollComponent>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
