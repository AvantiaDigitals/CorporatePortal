"use client";

import { useTheme } from "next-themes";

import team1 from "@/public/team-01.jpg";
import team2 from "@/public/team-02.jpg";
import team3 from "@/public/team-03.jpg";
import team4 from "@/public/team-04.jpg";
import team5 from "@/public/team-05.jpg";
import team6 from "@/public/team-06.jpg";
import { GridImage } from "@/components/GridImage/GridImage";
import styles from "@/pages/team/Section3/Section3.module.css";
import { ParamsImageProject } from "@/components/GridImage/ImageProject/ImageProject";

export default function ThreeSection() {
  const { theme } = useTheme();

  const projects: ParamsImageProject[] = [
    {
      alt: "person",
      categories: ["Management", "All"],
      src: team1,
      subtitle: "CEO",
      title: "Madge Alvarez",
      href: "/portfolio/detail",
    },
    {
      alt: "person",
      categories: ["Management", "Designer", "All"],
      src: team2,
      subtitle: "CEO",
      title: "Jared Moreno",
      href: "/portfolio/detail",
    },
    {
      alt: "person",
      categories: ["Management", "App Developer", "All"],
      src: team3,
      subtitle: "CEO",
      title: "Margaret McKinney",
      href: "/portfolio/detail",
    },
    {
      alt: "person",
      categories: ["Management", "Frontend", "All"],
      src: team4,
      subtitle: "CEO",
      title: "Effie Frank",
      href: "/portfolio/detail",
    },
    {
      alt: "person",
      categories: ["Management", "Frontend", "All"],
      src: team5,
      subtitle: "CEO",
      title: "Tyler Hardy",
      href: "/portfolio/detail",
    },
    {
      alt: "person",
      categories: ["Management", "Designer", "All"],
      src: team6,
      subtitle: "CEO",
      title: "Effie Arnold",
      href: "/portfolio/detail",
    },
  ];

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={styles.container}>
        <GridImage
          gridStyles={styles.grid}
          projects={projects}
          title="Select department:"
        />
      </div>
    </section>
  );
}
