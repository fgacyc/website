import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="sf-pro-display relative mx-auto max-w-screen-xl text-white">
      <Image
        src={"/images/get_involved.png"}
        alt="Get Involved"
        width={1258}
        height={622}
      />
      <div className="absolute left-8 top-0 flex h-full flex-col justify-center text-xl sm:left-14 md:left-20 lg:left-24">
        <div className="sf-pro-display w-1/2 text-2xl font-bold sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
          Build our home together
        </div>
        <div className="text-[10px] sm:mt-2 sm:text-xs md:mt-4 md:text-base lg:text-xl">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;
        </div>
      </div>
    </div>
  );
};

const GetInvolved = () => {
  return (
    <div className="mx-10 sm:mx-[90px]">
      <Banner />
      <div
        className="sf-pro-display xl:ml-50 my-8 ml-12 text-2xl font-bold text-black sm:my-14 
                   sm:ml-20 sm:text-5xl md:ml-32 md:text-6xl lg:my-20 lg:ml-40 lg:text-8xl xl:text-9xl"
      >
        Explore
      </div>
    </div>
  );
};

export default GetInvolved;
