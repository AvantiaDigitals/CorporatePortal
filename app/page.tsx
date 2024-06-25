"use client";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FirstSection } from "@/pages/home/section1/Section1";
library.add(fab);
dom.watch();

export default function Home() {
  return <FirstSection />;
}
