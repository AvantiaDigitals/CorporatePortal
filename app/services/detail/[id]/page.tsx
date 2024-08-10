"use client";

import { useEffect, useState } from "react";

import Section1 from "@/pages/services/Detail/section1/Section1";
import Section2 from "@/pages/services/Detail/section2/Section2";
import Section3 from "@/pages/services/Detail/section3/Section3";
import Section4 from "@/pages/services/Detail/section4/Section4";
import Section5 from "@/pages/home/section12/Section12";
import { Footer } from "@/components/Footer/Footer";

export default function Page({ params }: { params: { id: string } }) {
  const [page, setPage] = useState<{
        id: string;
        title: string;
        text: string;
      }
    | undefined
  >({
    id: "1",
    title: "Logo & branding",
    text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
  });
  const { id } = params;

  const listItems = [
    {
      id: "1",
      title: "Logo & branding",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "2",
      title: "Website design",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "3",
      title: "Mobile app design",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "4",
      title: "Graphic/print design",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "5",
      title: "Video production",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "6",
      title: "Content Managment",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "7",
      title: "Mobile app development",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "8",
      title: "eCommerce",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "9",
      title: "SEO",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "10",
      title: "Pay-per click",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "11",
      title: "Email marketing",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "12",
      title: "Display marketing",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "13",
      title: "Social media marketing",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "14",
      title: "Digital strategy",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "15",
      title: "Business consulting",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "16",
      title: "Content writing",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "17",
      title: "Reporting",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "18",
      title: "Hosting",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "19",
      title: "Big data analysis",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "20",
      title: "Design",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "21",
      title: "Design",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "22",
      title: "Design",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "23",
      title: "Visual brandingign",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "24",
      title: "Interaction",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "25",
      title: "Creative production",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "26",
      title: "Development",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "27",
      title: "Digital marketing",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "28",
      title: "SEO optimization",
      text: "We design professional looking yet simple websites. Our designs are search engine and user friendly.",
    },
    {
      id: "29",
      title: "Discuss",
      text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
    },
    {
      id: "30",
      title: "Mapping",
      text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
    },
    {
      id: "31",
      title: "Execution",
      text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.",
    },
    {
      id: "32",
      title: "Exceed clients’ and colleagues’ expectations",
      text: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit.",
    },
    {
      id: "33",
      title:
        "Take ownership and question the status quo in a constructive manner",
      text: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit.",
    },
    {
      id: "34",
      title:
        "Be brave, curious and experiment – learn from all successes and failures",
      text: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit.",
    },
    {
      id: "35",
      title: "Act in a way that makes all of us proud",
      text: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit.",
    },
    {
      id: "36",
      title: "Build an inclusive, transparent and socially responsible culture",
      text: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit.",
    },
    {
      id: "37",
      title: "Exceed clients’ and colleagues’ expectations",
      text: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit.",
    },
  ];

  useEffect(() => {
    const item = listItems.find((i) => i.id == id);

    setPage(item);
  }, []);

  return (
    <>
      <Section1 text={page?.text} title={page?.title} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}
