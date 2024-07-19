"use client";

import { useTheme } from "next-themes";

import blog1 from "@/public/blog-list-01.jpg";
import blog2 from "@/public/blog-list-02.jpg";
import CardBlog, { ParamsCardBlog } from "@/components/Cards/CardBlog/CardBlog";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import Label from "@/components/Label/Label";
import styles from "@/pages/home/section11/Section11.module.css";

export default function EleventhSection() {
  const { theme } = useTheme();

  const cardsBlog: ParamsCardBlog[] = [
    {
      tagText: "Lifestyle",
      title: "An oral history of the AIM away message by the pe",
      abstract:
        "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
      imageSrc: blog1,
    },
    {
      tagText: "Lifestyle",
      title: "Everything You Wanted to Know About UX and Were Af",
      abstract:
        "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
      imageSrc: blog2,
    },
  ];

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <ScrollComponent>
            <Label color="blue" text="what's going on" />
          </ScrollComponent>
          <ScrollComponent>
            <h2 className={styles.title}>Latest stories</h2>
          </ScrollComponent>
          <ScrollComponent>
            <p className={styles.text}>
              In vel varius turpis, non dictum sem. Aenean in efficitur ipsum,
              in egestas ipsum. Mauris in mi ac tellus.
            </p>
          </ScrollComponent>
        </div>
        <div className={styles.downContainer}>
          {cardsBlog.map((card, index) => (
            <CardBlog
              key={index}
              abstract={card.abstract}
              imageSrc={card.imageSrc}
              tagText={card.tagText}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
