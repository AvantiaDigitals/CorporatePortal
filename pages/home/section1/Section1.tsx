import imageWeb from "@/public/web.svg";
import SectionCover from "@/components/SectionCover/SectionCover";

export default function FirstSection() {
  const LinkButton = {
    text: "View Showcase",
    href: "/",
  };

  return (
    <SectionCover
      alt="Web devices"
      buttonLink={LinkButton}
      image={imageWeb}
      subtitle="Create live segments and target the right people for messages based on their behaviors."
      title="Build stunning websites & apps."
    />
  );
}
