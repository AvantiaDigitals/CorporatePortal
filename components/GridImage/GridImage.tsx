"use client";

import { useState, useEffect } from "react";

import portfolio1 from "@/public/portfolio-01.jpg";
import portfolio2 from "@/public/portfolio-02.jpg";
import portfolio3 from "@/public/portfolio-03.jpg";
import portfolio4 from "@/public/portfolio-04.jpg";
import portfolio5 from "@/public/portfolio-05.jpg";
import ButtonOption from "@/components/GridImage/ButtonOption/ButtonOption";
import styles from "@/components/GridImage/GridImage.module.css";
import ImageProject, {
  ParamsImageProject,
} from "@/components/GridImage/ImageProject/ImageProject";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";

export function GridImage() {
  const [optionSelect, setOptionSelect] = useState("All");
  const [projectsObjects, setProjectsObjects] = useState<JSX.Element[]>();

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

  useEffect(() => {
    const components = projects.map((project, index) => (
      <ImageProject
        key={index}
        alt={project.alt}
        categories={project.categories}
        src={project.src}
        subtitle={project.subtitle}
        title={project.title}
      />
    ));

    setProjectsObjects(components);
  }, []);

  const filter = (category: string) => {
    const filteredItems = projects.filter((component) =>
      component.categories.includes(category),
    );

    const components = filteredItems.map((project, index) => (
      <ImageProject
        key={index}
        alt={project.alt}
        categories={project.categories}
        src={project.src}
        subtitle={project.subtitle}
        title={project.title}
      />
    ));

    setOptionSelect(category);
    setProjectsObjects(components);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <ScrollComponent>
          <h2 className={styles.title}>Some of our finest work.</h2>
        </ScrollComponent>
        <div className={styles.buttons}>
          <ButtonOption
            isChecked={optionSelect == "All"}
            text="All"
            onClick={filter}
          />
          <ButtonOption
            isChecked={optionSelect == "Branding"}
            text="Branding"
            onClick={filter}
          />
          <ButtonOption
            isChecked={optionSelect == "Web"}
            text="Web"
            onClick={filter}
          />
          <ButtonOption
            isChecked={optionSelect == "Graphic"}
            text="Graphic"
            onClick={filter}
          />
        </div>
      </div>
      <div className={styles.gridContainer}>{projectsObjects}</div>
    </div>
  );
}
