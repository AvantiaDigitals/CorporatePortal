import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { ParamsCaseStudy } from "@/components/CaseStudy/CaseStudy";
import {
  DotButton,
  useDotButton,
} from "@/components/Slide/DotButton/DotButton";
import styles from "@/components/Slide/Slide.module.css";

type PropType = {
  options?: EmblaOptionsType;
  components: JSX.Element[];
};

const Slide: React.FC<PropType> = (props) => {
  const { options, components } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {components.map((component, index) => (
            <div key={index} className={styles.emblaSlide}>
              {component}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emblaControls}>
        <div className={styles.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              className={`${styles.emblaDot} ${index === selectedIndex ? styles.emblaDotSelected : ""}`}
              onClick={() => onDotButtonClick(index)}
              onKeyUp={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;
