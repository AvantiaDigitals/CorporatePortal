"use client";

import { useState, useEffect } from "react";

import ButtonOption from "@/components/GridImage/ButtonOption/ButtonOption";
import styles from "@/components/GridImage/GridImage.module.css";
import ImageProject, {
  ParamsImageProject,
} from "@/components/GridImage/ImageProject/ImageProject";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";

export function GridImage({ projects, title, gridStyles }: { projects: ParamsImageProject[], title?: string, gridStyles?: string }) {
  const [optionSelect, setOptionSelect] = useState("All");
  const [projectsObjects, setProjectsObjects] = useState<JSX.Element[]>();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getUniqueCategories();
    const components = projects.map((project, index) => (
      <ImageProject
        key={index}
        alt={project.alt}
        categories={project.categories}
        href={project.href}
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
        href={project.href}
        src={project.src}
        subtitle={project.subtitle}
        title={project.title}
      />
    ));

    setOptionSelect(category);
    setProjectsObjects(components);
  };

  const getUniqueCategories = () => {
    const allCategories = projects.flatMap((item) => item.categories);
    const uniqueCategories = Array.from(new Set(allCategories));
    const result = uniqueCategories.sort((a, b) => a.localeCompare(b));

    setCategories(result);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <ScrollComponent>
          <h2 className={styles.title}>
            {title ? title : "Some of our finest work."}
          </h2>
        </ScrollComponent>
        <div className={styles.buttons}>
          {categories.map((category, index) => (
            <ButtonOption
              key={index}
              isChecked={optionSelect == category}
              text={category}
              onClick={filter}
            />
          ))}
        </div>
      </div>
      <div className={`${styles.gridContainer} ${gridStyles}`}>{projectsObjects}</div>
    </div>
  );
}
