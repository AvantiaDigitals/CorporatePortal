import imageWeb from "@/public/services.svg";
import SectionCover from "@/components/SectionCover/SectionCover";

export default function FirstSection() {
  return (
    <SectionCover
      alt="Services"
      image={imageWeb}
      subtitle="A quick view of industry specific problems solved with design by the awesome team at Keystroke."
      title="Best solutions for your business"
    />
  );
}
