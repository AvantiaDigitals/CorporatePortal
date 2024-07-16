"use client";

import { useTheme } from "next-themes";

import CardPrice, { ParamsCardPrice } from "@/components/Cards/CardPrice/CardPrice";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import Label from "@/components/Label/Label";
import styles from "@/pages/home/section9/Section9.module.css";

export function NinethSection() {
  const { theme } = useTheme();

  const cardsPrice: ParamsCardPrice[] = [
    {
      title: "Small business",
      description: "A beautiful, simple website",
      price: 46,
      textButton: "Get Started Today",
      textWarranty: "100% money back guarantee",
      services: [
        "10 Pages Responsive Website",
        "5 PPC Campaigns",
        "10 SEO Keywords",
        "5 Facebook Camplaigns",
        "2 Video Camplaigns",
      ],
      isSelected: true,
    },
    {
      title: "Medium business",
      description: "A beautiful, simple website",
      price: 99,
      textButton: "Get Started Today",
      textWarranty: "100% money back guarantee",
      services: [
        "20 Pages Responsive Website",
        "Unlimited PPC Campaigns",
        "Unlimited SEO Keywords",
        "Unlimited Facebook",
        "Unlimited Video Camplaigns",
      ],
      isSelected: false,
    },
  ];

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
          {cardsPrice.map((card, index) => (
            <CardPrice
              key={index}
              description={card.description}
              isSelected={card.isSelected}
              price={card.price}
              services={card.services}
              textButton={card.textButton}
              textWarranty={card.textWarranty}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
