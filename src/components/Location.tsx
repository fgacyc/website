import React, { useState } from "react";
import Image from "next/image";

interface LocationProps {
  name: string;
  addr: string;
  services: string[];
}

const Location = ({ name, addr, services }: LocationProps) => {
  const [show, setShow] = useState(true);
  const click = function () {
    console.log(show);
    setShow(!show);
  };
  return (
    <div onClick={click}>
      <button
        className="border-b-solid mt-1 flex items-center border-b-2 border-black text-xs font-bold text-black md:mt-0 lg:mt-3 lg:border-b-4 lg:text-xl xl:mt-5 xl:pb-2 xl:text-[33px]"
        onClick={click}
      >
        FGA CYC {name}
        <div className="w-5 lg:w-7 xl:w-auto">
          <Image
            src={"/icons/right_arrow.svg"}
            width={42}
            height={42}
            alt="right arrow icon"
            className="ml-3"
          />
        </div>
      </button>
      <div
        className={
          (show ? "hidden" : "") +
          " mt-3 flex text-[8px] font-bold sm:text-[10px] md:text-xs lg:text-sm xl:mt-4 xl:text-xl"
        }
      >
        <div className="w-[25vw] xl:w-[367px]">{addr}</div>
        <div className={(show ? "hidden " : "") + " ms-2"}>
          {services.map((s) => {
            return (
              <>
                <div className="font-bold">{s}</div>
              </>
            );
          })}
          <div className="text-[#00edc2]">Get Directions {">"}</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
