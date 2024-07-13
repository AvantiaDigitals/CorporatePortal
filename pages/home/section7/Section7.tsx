"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import CardTestimonial from "@/components/Cards/CardTestimonial/CardTestimonial";
import Label from "@/components/Label/Label";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import client1 from "@/public/client-01.jpg";
import client2 from "@/public/client-02.jpg";
import styles from "@/pages/home/section7/Section7.module.css";
import { ParamsCardTestimonialOP } from "@/components/Cards/CardTestimonial/CardTestimonial";

export function SeventhSection() {
  const { theme } = useTheme();
  const [CardsInfo, setCardsInfo] = useState<ParamsCardTestimonialOP[]>([
    {
      id: "a",
      src: client1,
      name: "Martha Maldonado",
      job: "Executive Chairman @ Google",
      description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
      textLink: "Read Project Case Study",
      isHovered: true,
    },
    {
      id: "b",
      src: client2,
      name: "Martha Maldonado",
      job: "Executive Chairman @ Google",
      description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
      textLink: "Read Project Case Study",
      isHovered: false,
    },
  ]);

  const setHovered = (id: string) => {
    const copyCards = [...CardsInfo];

    copyCards.forEach((card) => {
      card.isHovered = false;
      if (card.id == id) {
        card.isHovered = true;
      }
    });

    setCardsInfo(copyCards);
  };

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <ScrollComponent>
            <Label className={styles.label} text="testimonials" />
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
        <div className={styles.bottomContainer}>
          {CardsInfo.map((card, index) => (
            <CardTestimonial
              key={index}
              description={card.description}
              id={card.id}
              isHovered={card.isHovered}
              job={card.job}
              name={card.name}
              setIsHovered={setHovered}
              src={card.src}
              textLink={card.textLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
