import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  start: number;
  end: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration }) => {
  const [count, setCount] = useState<number>(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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

  useEffect(() => {
    if (isVisible) CountUp();
  }, [isVisible]);

  const CountUp = () => {
    if (count < end) {
      const increment = (end - start) / (duration / 50);
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + increment;

          if (newCount >= end) {
            clearInterval(interval);

            return end;
          }

          return newCount;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  };

  return <div ref={ref}>{Math.round(count)}</div>;
};

export default Counter;
