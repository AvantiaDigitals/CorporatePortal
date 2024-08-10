"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Overlay from "@/components/Overlay/Overlay";
import image1 from "@/public/portfolio-big-image-01.jpg";
import styles from "@/pages/portfolio/detail/Section3/Section3.module.css";

export default function SecondSection() {
  const { theme } = useTheme();
  const [isVisible, setVisible] = useState(false);

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.image}>
          <Image alt="woman" src={image1} />
          <button
            className={styles.button}
            onClick={() => {
              setVisible(true);
            }}
          >
            <FontAwesomeIcon className={styles.icon} icon={faPlay} size="1x" />
          </button>
        </div>
      </div>
      <Overlay
        close={() => {
          setVisible(false);
        }}
        show={isVisible}
      >
        <div className={styles.videoContainer}>
          <iframe
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={styles.video}
            frameBorder="0"
            height="515"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/Pj_geat9hvI?si=KOx43X5zcgGWP-29"
            title="YouTube video player"
            width="760"
          />
        </div>
      </Overlay>
    </section>
  );
}
