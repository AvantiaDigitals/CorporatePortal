"use client";

import { useTheme } from "next-themes";
import {
  faPaintBrush,
  faComment,
  faCode,
  faLaptop,
  faBarChart,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

import { SubNav } from "@/components/SubNav/SubNav";
import SubSection from "@/pages/services/Main/Section2/SubSection/SubSection";
import styles from "@/pages/services/Main/Section2/Section2.module.css";

export default function SecondSection() {
  const { theme } = useTheme();
  const listItems = [
    {
      area: "Design",
      isSelected: true,
      cards: [
        {
          id: "1",
          icon: faPaintBrush,
          title: "Logo & branding",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon1,
          ballColor: styles.iconInner1,
          href: "/services/detail/1",
        },
        {
          id: "2",
          icon: faPaintBrush,
          title: "Website design",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon1,
          ballColor: styles.iconInner1,
          href: "/services/detail/2",
        },
        {
          id: "3",
          icon: faPaintBrush,
          title: "Mobile app design",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon1,
          ballColor: styles.iconInner1,
          href: "/services/detail/3",
        },
        {
          id: "4",
          icon: faPaintBrush,
          title: "Graphic/print design",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon1,
          ballColor: styles.iconInner1,
          href: "/services/detail/4",
        },
        {
          id: "5",
          icon: faPaintBrush,
          title: "Video production",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon1,
          ballColor: styles.iconInner1,
          href: "/services/detail/5",
        },
      ],
    },
    {
      area: "Development",
      isSelected: false,
      cards: [
        {
          id: "6",
          icon: faCode,
          title: "Content Managment",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon2,
          ballColor: styles.iconInner2,
          href: "/services/detail/6",
        },
        {
          id: "7",
          icon: faCode,
          title: "Mobile app development",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon2,
          ballColor: styles.iconInner2,
          href: "/services/detail/7",
        },
        {
          id: "8",
          icon: faCode,
          title: "eCommerce",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon2,
          ballColor: styles.iconInner2,
          href: "/services/detail/8",
        },
      ],
    },
    {
      area: "Online Marketing",
      isSelected: false,
      cards: [
        {
          id: "9",
          icon: faComment,
          title: "SEO",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon3,
          ballColor: styles.iconInner3,
          href: "/services/detail/9",
        },
        {
          id: "10",
          icon: faComment,
          title: "Pay-per click",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon3,
          ballColor: styles.iconInner3,
          href: "/services/detail/10",
        },
        {
          id: "11",
          icon: faComment,
          title: "Email marketing",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon3,
          ballColor: styles.iconInner3,
          href: "/services/detail/11",
        },
        {
          id: "12",
          icon: faComment,
          title: "Display marketing",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon3,
          ballColor: styles.iconInner3,
          href: "/services/detail/12",
        },
        {
          id: "13",
          icon: faComment,
          title: "Social media marketing",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon3,
          ballColor: styles.iconInner3,
          href: "/services/detail/13",
        },
      ],
    },
    {
      area: "Business",
      isSelected: false,
      cards: [
        {
          id: "14",
          icon: faBuilding,
          title: "Digital strategy",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon4,
          ballColor: styles.iconInner4,
          href: "/services/detail/14",
        },
        {
          id: "15",
          icon: faBuilding,
          title: "Business consulting",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon4,
          ballColor: styles.iconInner4,
          href: "/services/detail/15",
        },
        {
          id: "16",
          icon: faBuilding,
          title: "Content writing",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon4,
          ballColor: styles.iconInner4,
          href: "/services/detail/16",
        },
        {
          id: "17",
          icon: faBuilding,
          title: "Reporting",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon4,
          ballColor: styles.iconInner4,
          href: "/services/detail/17",
        },
      ],
    },
    {
      area: "Technology",
      isSelected: false,
      cards: [
        {
          id: "18",
          icon: faLaptop,
          title: "Hosting",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon5,
          ballColor: styles.iconInner5,
          href: "/services/detail/18",
        },
        {
          id: "19",
          icon: faLaptop,
          title: "Big data analysis",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon5,
          ballColor: styles.iconInner5,
          href: "/services/detail/19",
        },
      ],
    },
    {
      area: "Content strategy",
      isSelected: false,
      cards: [
        {
          id: "20",
          icon: faBarChart,
          title: "Design",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon6,
          ballColor: styles.iconInner6,
          href: "/services/detail/20",
        },
        {
          id: "21",
          icon: faBarChart,
          title: "Design",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon6,
          ballColor: styles.iconInner6,
          href: "/services/detail/21",
        },
        {
          id: "22",
          icon: faBarChart,
          title: "Design",
          text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
          sheetColor: styles.icon6,
          ballColor: styles.iconInner6,
          href: "/services/detail/22",
        },
      ],
    },
  ];

  return (
    <section
      className={`${styles.section} ${theme == "dark" ? styles.secctionDark : styles.secctionLigth}`}
    >
      <SubNav items={listItems} />
      <div className={styles.container}>
        <SubSection sections={listItems} />
      </div>
    </section>
  );
}
