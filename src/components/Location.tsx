import React, { useState } from "react";
import Image from "next/image";

interface LocationProps {
  name: string;
  addr: string;
  services: string[];
}

const Location = ({ name, addr, services }: LocationProps) => {
  const [show, setShow] = useState(true);
  let click = function () {
    console.log(show);
    setShow(!show);
  };
  return (
    <div onClick={click}>
      <button
        className="border-b-solid mt-1 flex items-center border-b-2 border-black text-xs font-bold text-black md:mt-0 lg:mt-5 lg:border-b-4 lg:text-xl xl:text-[33px]"
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
      <div className={(show ? "hidden" : "") + " mt-4 flex"}>
        <div className="w-[90px] text-xl font-bold xl:w-[367px]">{addr}</div>
        <div className={show ? "hidden" : ""}>
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
