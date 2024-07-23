"use client";

import { useTheme } from "next-themes";
import { Input } from "@nextui-org/input";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import styles from "@/components/ContactForm/ContactForm.module.css";

export const ContactForm = ({ className }: { className?: string }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.formContainer} ${className} ${theme == "dark" ? styles.formContainerDark : ""}`}
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
  );
};
