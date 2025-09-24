import React, { useState } from "react";
import Image from "next/image";

interface LocationProps {
  name: string;
  addr: string;
  services: string[];
}

const Location = ({ name, addr, services }: LocationProps) => {
  const [hide, setHide] = useState(true);
  const click = () => {
    setHide(!hide);
  };
  const rowOneStyle =
    "md:pt-2 xl:pb-4 xl:pt-12 border-b-2 border-solid border-black xl:border-b-4";

  const rowTwoStyle = "pb-2 pt-2 sm:pb-3 sm:pt-3 xl:pt-8 align-top";
  return (
    <>
      <tr onClick={click}>
        <th className={rowOneStyle}>
          <div className="flex items-start text-xs font-bold sm:text-sm md:text-[18px] lg:text-xl xl:text-[33px]">
            {"FGA " + name}
          </div>
        </th>
        <th className={rowOneStyle}>
          <div
            className={
              hide
                ? "w-[35px] lg:w-10 xl:w-14 2xl:w-16"
                : "w-[24px] lg:w-8 xl:w-11"
            }
          >
            <Image
              src={hide ? "/icons/right_arrow.svg" : "/icons/cross-2.svg"}
              width={1}
              height={1}
              alt="right arrow icon"
              className="w-full pl-3"
            />
          </div>
        </th>
      </tr>
      <tr
        hidden={hide}
        className="text-[8px] font-bold sm:text-[10px] md:text-xs lg:text-sm xl:text-xl"
      >
        <th colSpan={2} className={"w-0 " + rowTwoStyle}>
          <div className="mr-3 text-left">{addr}</div>
        </th>
        <th className={"text-left " + rowTwoStyle}>
          {services.map((s) => {
            return (
              <>
                <div className="font-semibold text-gray-800">{s}</div>
              </>
            );
          })}
          {/* <div className="text-[#00edc2]">Get Directions {">"}</div> */}
        </th>
      </tr>
    </>
  );
};

export default Location;
