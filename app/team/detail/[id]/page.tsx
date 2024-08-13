"use client";

import { useEffect, useState } from "react";

import team1 from "@/public/team-01.jpg";
import team2 from "@/public/team-02.jpg";
import team3 from "@/public/team-03.jpg";
import team4 from "@/public/team-04.jpg";
import team5 from "@/public/team-05.jpg";
import team6 from "@/public/team-06.jpg";
import Section1 from "@/pages/team/Detail/Section1";
import { Footer } from "@/components/Footer/Footer";
import { ParamsImageProject } from "@/components/GridImage/ImageProject/ImageProject";

export default function Page({ params }: { params: { id: string } }) {
  const description =
    "Phasellus in libero et nunc malesuada tincidunt. Morbi auctor tristique semper. Nunc condimentum dapibus felis, non volutpat ligula dapibus non. Quisque varius massa magna, eget iaculis ipsum tincidunt sed. Sed tempus magna id nunc posuere auctor. Morbi aliquam a justo eget cursus. Donec at quam id ex mollis dapibus eget ac sem. Maecenas pharetra bibendum massa, ut tincidunt lectus.";
  const [page, setPage] = useState<ParamsImageProject | undefined>({
    id: "1",
    alt: "person",
    categories: ["Management", "All"],
    src: team1,
    subtitle: "CEO",
    title: "Madge Alvarez",
    href: "/portfolio/detail",
    description: description,
  });
  const { id } = params;
  const team: ParamsImageProject[] = [
    {
      id: "1",
      alt: "person",
      categories: ["Management", "All"],
      src: team1,
      subtitle: "CEO",
      title: "Madge Alvarez",
      href: "/portfolio/detail",
      description: description,
    },
    {
      id: "2",
      alt: "person",
      categories: ["Management", "Designer", "All"],
      src: team2,
      subtitle: "CEO",
      title: "Jared Moreno",
      href: "/portfolio/detail",
      description: description,
    },
    {
      id: "3",
      alt: "person",
      categories: ["Management", "App Developer", "All"],
      src: team3,
      subtitle: "CEO",
      title: "Margaret McKinney",
      href: "/portfolio/detail",
      description: description,
    },
    {
      id: "4",
      alt: "person",
      categories: ["Management", "Frontend", "All"],
      src: team4,
      subtitle: "CEO",
      title: "Effie Frank",
      href: "/portfolio/detail",
      description: description,
    },
    {
      id: "5",
      alt: "person",
      categories: ["Management", "Frontend", "All"],
      src: team5,
      subtitle: "CEO",
      title: "Tyler Hardy",
      href: "/portfolio/detail",
      description: description,
    },
    {
      id: "6",
      alt: "person",
      categories: ["Management", "Designer", "All"],
      src: team6,
      subtitle: "CEO",
      title: "Effie Arnold",
      href: "/portfolio/detail",
      description: description,
    },
  ];

  useEffect(() => {
    const integrant = team.find((i) => i.id == id);

    setPage(integrant);
  }, []);

  return (
    <>
      <Section1
        alt={page?.alt}
        description={page?.description}
        src={page?.src}
        subtitle={page?.subtitle}
        title={page?.title}
      />
      <Footer />
    </>
  );
}
