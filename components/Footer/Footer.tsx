"use client";

import { useTheme } from "next-themes";
import { Input } from "@nextui-org/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import styles from "@/components/Footer/Footer.module.css";


export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`${styles.footer} ${theme == "dark" ? styles.footerDark : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.icons}>
          <div className={styles.iconsContent}>
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "facebook-f"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "twitter"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "github"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "linkedin-in"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "instagram"]}
              size="lg"
            />
            <FontAwesomeIcon
              className={theme == "dark" ? styles.iconDark : styles.icon}
              icon={["fab", "pinterest-p"]}
              size="lg"
            />
          </div>
        </div>
        <div className={styles.containerOptions}>
          <div className={styles.topContainer}>
            <h2 className={styles.title}>Get in touch!</h2>
            <p className={styles.text}>
              Fusce varius‚ dolor tempor interdum tristique‚ dui urna bibendum
              magna‚ ut ullamcorper purus
            </p>
            <form>
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
              <ButtonAnimateBackgound
                className={styles.buttonAnimate}
                style={theme}
                text="Suscribe"
              />
            </form>
            <div className={`${styles.sectionService} ${styles.showTop}`}>
              <h3 className={styles.area}>Resourses</h3>
              <span
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
              >
                Blog
              </span>
              <span
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
              >
                Case Studies
              </span>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/portfolio"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className={styles.downContainer}>
            <div className={styles.sectionService}>
              <h3 className={styles.area}>Services</h3>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/services/detail/1"
              >
                Logo & Branding
              </Link>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/services/detail/2"
              >
                Website Development
              </Link>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/services/detail/7"
              >
                Mobile App Development
              </Link>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/services/detail/9"
              >
                Search Engine Optimization
              </Link>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/services/detail/10"
              >
                Pay-Per-Click
              </Link>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/services/detail/13"
              >
                Social Media Marketing
              </Link>
            </div>
            <div className={`${styles.sectionService} ${styles.showDown}`}>
              <h3 className={styles.area}>Resourses</h3>
              <span
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
              >
                Blog
              </span>
              <span
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
              >
                Case Studies
              </span>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/portfolio"
              >
                Portfolio
              </Link>
            </div>
            <div className={styles.sectionService}>
              <h3 className={styles.area}>Support</h3>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <span
                className={
                  theme == "dark" ? styles.serviceDark : styles.service
                }
              >
                Sitemap
              </span>
            </div>
          </div>
        </div>
        <hr className={styles.line} />
        <div
          className={theme == "dark" ? styles.copyRightDark : styles.copyRight}
        >
          © 2022. All rights reserved by Your Company.
          <div className={styles.terms}>
            <Link
              className={`${theme == "dark" ? styles.serviceDark : styles.service} ${styles.politic}`}
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <span
              className={`${theme == "dark" ? styles.serviceDark : styles.service} ${styles.politic}`}
            >
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
