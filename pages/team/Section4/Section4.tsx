"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image from "@/public/video-bg.png";
import Label from "@/components/Label/Label";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import styles from "@/pages/team/Section4/Section4.module.css";
import Overlay from "@/components/Overlay/Overlay";

export default function FourthSection() {
  const { theme } = useTheme();
  const [isVisible, setVisible] = useState(false);

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <ScrollComponent>
            <Label text="experts in field" />
          </ScrollComponent>
          <ScrollComponent>
            <h2
              className={`${styles.subtitle} ${theme == "dark" ? styles.colorDark : styles.colorLigth}`}
            >
              Design startup movement
            </h2>
          </ScrollComponent>
          <ScrollComponent>
            <p
              className={`${styles.textSubtitle} ${theme == "dark" ? styles.colorDark : styles.colorLigth}`}
            >
              In vel varius turpis, non dictum sem. Aenean in efficitur ipsum,
              in egestas ipsum. Mauris in mi ac tellus.
            </p>
          </ScrollComponent>
        </div>
      </div>
      <div className={styles.containerBotton}>
        <Image alt="team" src={image} />
        <button
          className={styles.button}
          onClick={() => {
            setVisible(true);
          }}
        >
          <FontAwesomeIcon className={styles.icon} icon={faPlay} size="1x" />
        </button>
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
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/Pj_geat9hvI?si=KOx43X5zcgGWP-29"
            title="YouTube video player"
          />
        </div>
      </Overlay>
    </section>
  );
}
