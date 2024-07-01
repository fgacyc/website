import Image from "next/image";

interface ExperienceImagesProps {
  className?: string;
}

export default function ExperienceImages({ className }: ExperienceImagesProps) {
  const experience_images = [
    {
      src: "/images/experience-gallery/encountering-jesus.png",
      alt: "encounter-jesus",
      title: "Encountering Jesus",
    },
    {
      src: "/images/experience-gallery/experiencing-family.png",
      alt: "experiencing-family",
      title: "Experiencing Family",
    },
    {
      src: "/images/experience-gallery/promoting-discipleship.png",
      alt: "promoting-discipleship",
      title: "Promoting Discipleship",
    },
    {
      src: "/images/experience-gallery/growing-spiritually.png",
      alt: "growing-spiritually",
      title: "Growing Spiritually",
    },
  ];

  return (
    <>
      <div className="gird-cols-1 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {experience_images.map((image, index) => (
          <div key={index} className="mb-10">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              layout=""
              className="mb-5"
            />
            <h5
              className={`sf-pro-display mx-auto w-[249px] border-b-[5px] pb-[16px] ${className}`}
            >
              {image.title}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
}
