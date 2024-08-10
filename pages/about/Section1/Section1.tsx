import imageWeb from "@/public/aboutUs.svg";
import SectionCover from "@/components/SectionCover/SectionCover";

export default function FirstSection() {
  return (
    <SectionCover
      alt="About us"
      image={imageWeb}
      subtitle="We design and develop web and mobile applications for our clients worldwide."
      title="One of the fastest growing agency"
    />
  );
}
