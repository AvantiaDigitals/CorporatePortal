"use client";

import { useTheme } from "next-themes";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

import imageWeb from "@/public/searchPerson.svg";
import ButtonAnimateBackgound from "@/components/ButtonAnimate/Background/ButtonAnimateBackgound";
import styles from "@/styles/404.module.css";
library.add(fab);
dom.watch();

export default function NotFound() {
  const { theme } = useTheme();
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div
      className={`${styles.container} ${theme == "dark" ? styles.containerDark : ""}`}
    >
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
        recusandae consectetur nesciunt magnam facilis aliquid amet earum alias?
      </p>
      <ButtonAnimateBackgound style={theme} text="Go Back" onClick={goBack} />
      <Image
        priority
        alt="Search person"
        className={`${styles.image}`}
        src={imageWeb}
      />
    </div>
  );
}
