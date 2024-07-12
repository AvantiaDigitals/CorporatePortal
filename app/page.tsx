"use client";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FirstSection } from "@/pages/home/section1/Section1";
import { SecondSection } from "@/pages/home/section2/Section2";
import { ThirdSection } from "@/pages/home/section3/Section3";
import { FourthSection } from "@/pages/home/section4/Section4";
import { FifthSection } from "@/pages/home/section5/Section5";
import { SixhSection } from "@/pages/home/section6/Section6";
library.add(fab);
dom.watch();

export default function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixhSection />
    </>
  );
}
