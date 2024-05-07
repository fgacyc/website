import Image from "next/image";
import Location from "~/components/Location";
import { locations } from "./data";

export default function Locations() {
  return (
    <>
      <div className="">
        {/* <div className="flex flex-col items-center"> */}
        <div>
          {/* First section - black bg */}
          <div className="h-[625px] bg-[#1d2129]"></div>

          {/* absolute-positioned banner */}
          <div className="absolute inset-0 mx-10 mt-[90px] flex flex-col items-center sm:mx-[90px]">
            <Image
              alt=""
              src={"/images/locations/banner.png"}
              width={1258}
              height={622}
              className="rounded-lg"
            ></Image>
            <div className="absolute inset-0 left-6 mt-5 text-white sm:left-14 md:left-20 lg:left-24 lg:ms-52 lg:mt-24">
              <h3 className="w-1/2 text-2xl font-bold sm:text-4xl md:text-6xl lg:text-8xl xl:w-1/3 xl:text-9xl">
                We can't wait to meet you
              </h3>
              <h6 className="text-[8px] sm:mt-2 md:mt-4 lg:mt-5 lg:text-xl">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
