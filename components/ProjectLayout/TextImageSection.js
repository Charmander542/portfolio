import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const TextImageSection = ({
  label,
  title,
  children,
  image,
  imageAlt = "",
  reversed = false,
  objectFit = "cover",
}) => {
  const textCol = (
    <div className="flex flex-col justify-center">
      {children}
    </div>
  );

  const imageCol = (
    <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-gray-dark-1">
      <Image src={image} alt={imageAlt} fill className={`object-${objectFit}`} />
    </div>
  );

  return (
    <SectionWrapper label={label} title={title}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
        {reversed ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
      </div>
    </SectionWrapper>
  );
};

export default TextImageSection;
