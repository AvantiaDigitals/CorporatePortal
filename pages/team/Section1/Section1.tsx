import imageWeb from "@/public/team.svg";
import SectionCover from "@/components/SectionCover/SectionCover";

export default function FirstSection() {
  return (
    <SectionCover
      alt="Team"
      image={imageWeb}
      subtitle="Grow your business online by awesomely designed mobile apps that fits all types."
      title="Meet talent & experience"
    />
  );
}
