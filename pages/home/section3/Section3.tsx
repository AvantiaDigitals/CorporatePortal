"use client";

import { useTheme } from "next-themes";
import { EmblaOptionsType } from "embla-carousel";

import Slide from "@/components/Slide/Slide";
import CaseStudy, { ParamsCaseStudy } from "@/components/CaseStudy/CaseStudy";
import image1 from "@/public/featured-image-01.jpg";
import image2 from "@/public/featured-image-03.jpg";
import image3 from "@/public/featured-image-04.jpg";
import styles from "@/pages/home/section3/Section3.module.css";

export default function ThirdSection() {
  const { theme } = useTheme();
  const OPTIONS: EmblaOptionsType = {};
  const caseStudies: ParamsCaseStudy[] = [
    {
      key: 1,
      alt: "Team womens",
      title: "Logo, identity & web design for Uber",
      content:
        "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
      percent: 15,
      visits: 60,
      src: image1,
    },
    {
      key: 2,
      alt: "Skateboard",
      title: "Logo, identity & web design for Uber",
      content:
        "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
      percent: 15,
      visits: 60,
      src: image2,
    },
    {
      key: 3,
      alt: "Laptop",
      title: "Logo, identity & web design for Uber",
      content:
        "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.",
      percent: 15,
      visits: 60,
      src: image3,
    },
  ];

  const components = caseStudies.map((caseStudy) => (
    <CaseStudy
      key={caseStudy.key}
      alt={caseStudy.alt}
      content={caseStudy.content}
      percent={caseStudy.percent}
      src={caseStudy.src}
      title={caseStudy.title}
      visits={caseStudy.visits}
    />
  ));

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <div className={`${styles.container}`}>
        <Slide components={components} options={OPTIONS} />
      </div>
    </section>
  );
}
