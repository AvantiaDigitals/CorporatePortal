import imageWeb from "@/public/serviceDetail.svg";
import SectionCover from "@/components/SectionCover/SectionCover";

export default function FirstSection({
  title,
  text,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <SectionCover
      alt="Web design"
      image={imageWeb}
      subtitle={text ? text : ""}
      title={title ? title : ""}
    />
  );
}
