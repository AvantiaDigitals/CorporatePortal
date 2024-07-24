"use client";

import { useTheme } from "next-themes";

import portfolio1 from "@/public/portfolio-01.jpg";
import portfolio2 from "@/public/portfolio-02.jpg";
import portfolio3 from "@/public/portfolio-03.jpg";
import portfolio4 from "@/public/portfolio-04.jpg";
import portfolio5 from "@/public/portfolio-05.jpg";
import Label from "@/components/Label/Label";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import { GridImage } from "@/components/GridImage/GridImage";
import styles from "@/pages/services/Bussines/section4/Section4.module.css";
import { ParamsImageProject } from "@/components/GridImage/ImageProject/ImageProject";

export default function FourthSection() {
  const { theme } = useTheme();

  const projects: ParamsImageProject[] = [
    {
      alt: "seat",
      categories: ["Branding", "Graphic", "All"],
      src: portfolio1,
      subtitle: "iosdesign",
      title: "Creative Agency",
    },
    {
      alt: "bike",
      categories: ["Web", "Graphic", "All"],
      src: portfolio2,
      subtitle: "Branding",
      title: "Rent bike",
    },
    {
      alt: "laptop",
      categories: ["Graphic", "All"],
      src: portfolio3,
      subtitle: "Web application",
      title: "All Volees",
    },
    {
      alt: "orange",
      categories: ["Branding", "All"],
      src: portfolio4,
      subtitle: "Brandingdesign",
      title: "Larq",
    },
    {
      alt: "sofa",
      categories: ["Branding", "Web", "All"],
      src: portfolio5,
      subtitle: "Branding",
      title: "Trendy Design",
    },
    {
      alt: "seat",
      categories: ["Web", "All"],
      src: portfolio1,
      subtitle: "iosdesign",
      title: "Jet Airplane",
    },
  ];

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <ScrollComponent>
          <Label className={styles.label} text="our projects" />
        </ScrollComponent>
        <GridImage projects={projects} />
        <ButtonAnimateBackgound
          className={styles.button}
          style={theme}
          text="Discover More Projects"
        />
      </div>
    </section>
  );
}
