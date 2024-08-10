import imageWeb from "@/public/projects.svg";
import SectionCover from "@/components/SectionCover/SectionCover";

export default function FirstSection() {
  return (
    <SectionCover
      alt="Planing"
      image={imageWeb}
      subtitle="A quick view of industry specific problems solved with design by the awesome team at Keystroke."
      title="Our projects"
    />
  );
}
