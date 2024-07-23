import imageWeb from "@/public/marketing.svg";
import SectionCover from "@/components/SectionCover/SectionCover";

export default function FirstSection() {
  return (
    <SectionCover
      alt="Web design"
      image={imageWeb}
      subtitle="We design professional looking yet simple websites. Our designs are search engine and user friendly."
      title="Online marketing"
    />
  );
}
