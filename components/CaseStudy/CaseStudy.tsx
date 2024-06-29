"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Counter from "@/components/Counter/Counter";
import Label from "@/components/Label/Label";
import { ScrollComponent } from "@/components/ScrollComponent/ScrollComponent";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import styles from "@/components/CaseStudy/CaseStudy.module.css";

export interface ParamsCaseStudy {
  key: number;
  alt: string;
  src: string | StaticImport;
  title: string;
  content: string;
  percent: number;
  visits: number;
}

const CaseStudy: React.FC<ParamsCaseStudy> = ({
  alt,
  src,
  title,
  content,
  percent,
  visits,
}) => {
  const { theme } = useTheme();

  const TIME_COUNTER: number = 1500;

  return (
    <div className={styles.container}>
      <div className={styles.contentCard}>
        <div className={styles.image}>
          <Image alt={alt} src={src} />
        </div>
        <div className={styles.containerInfo}>
          <Label color="blue" text="featured case study" />
          <h2
            className={`${styles.title} ${theme == "dark" ? styles.dark : ""}`}
          >
            {title}
          </h2>
          <p
            className={`${styles.content} ${theme == "dark" ? styles.dark : ""}`}
          >
            {content}
          </p>
          <ButtonAnimateBackgound
            className={styles.button}
            style={theme}
            text="Read Case Study"
          />
          <ScrollComponent>
            <div className={styles.statisticsInfo}>
              <div className={styles.boxPercent}>
                <h3 className={styles.numericStadistics}>
                  <Counter duration={TIME_COUNTER} end={percent} start={0} />%
                </h3>
                <span
                  className={`${styles.subtitle} ${theme == "dark" ? styles.dark : ""}`}
                >
                  ROI increase
                </span>
              </div>
              <div className={styles.boxVisits}>
                <h3 className={styles.numericStadistics}>
                  <Counter duration={TIME_COUNTER} end={visits} start={0} />K
                </h3>
                <span
                  className={`${styles.subtitle} ${theme == "dark" ? styles.dark : ""}`}
                >
                  Monthly website visits
                </span>
              </div>
            </div>
          </ScrollComponent>
        </div>
      </div>
      <ScrollComponent>
        <div className={styles.statistics}>
          <div className={styles.boxPercent}>
            <h3 className={styles.numericStadistics}>
              <Counter duration={TIME_COUNTER} end={percent} start={0} />%
            </h3>
            <span>ROI increase</span>
          </div>
          <div className={styles.boxVisits}>
            <h3 className={styles.numericStadistics}>
              <Counter duration={TIME_COUNTER} end={visits} start={0} />K
            </h3>
            <span>Monthly website visits</span>
          </div>
        </div>
      </ScrollComponent>
    </div>
  );
};

export default CaseStudy;
