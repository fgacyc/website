import Image from "next/image";
import React from "react";

interface BannerProps {
  text: string;
  desc: string;
  img_url: string;
  img_width: number;
  img_height: number;
}

const Banner = ({
  text,
  desc,
  img_url,
  img_width,
  img_height,
}: BannerProps) => {
  return (
    <div className="mx-10 sm:mx-[90px]">
      <div className="sf-pro-display relative mx-auto max-w-screen-xl text-white">
        <Image
          src={img_url}
          alt="Banner Image"
          width={img_width}
          height={img_height}
        />
        <div className="absolute left-8 top-0 flex h-full flex-col justify-center text-xl sm:left-14 md:left-20 lg:left-24">
          <div className="sf-pro-display w-1/2 text-2xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
            {text}
          </div>
          <div className="text-[10px] sm:mt-2 sm:text-xs md:mt-4 md:text-base lg:text-xl">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
