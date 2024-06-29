import React, { useRef, useState, useEffect } from "react";

import styles from "@/components/ScrollComponent/ScrollComponent.module.css";

export const ScrollComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.scrollComponent} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};
