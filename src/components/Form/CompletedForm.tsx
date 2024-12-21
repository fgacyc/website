import Link from "next/link";
import React from "react";
import { IoMdRefresh } from "react-icons/io";

interface CompletedFormProps {
  bg_color: string; // bg-black || bg-[#000000]
  tick_bg: string; // bg-white || bg-[#FFFFFF]
  tick_color: string; // #000000
  button_text: string;
  button_color: string; // bg-white || bg-[#FFFFFF]
  text: string;
  desc: string;
  onClick?: () => void;
  onReset?: () => void;
}

const CompletedForm = ({
  bg_color,
  tick_bg,
  tick_color,
  button_text,
  button_color,
  text,
  desc,
  onClick,
  onReset,
}: CompletedFormProps) => {
  return (
    <div
      className={`flex w-4/5 flex-col items-center justify-center rounded-[20px] ${bg_color} py-20 text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
    >
      <div
        className={`flex h-32 w-32 items-center justify-center rounded-full ${tick_bg}`}
      >
        <svg
          width="84"
          height="67"
          viewBox="0 0 84 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.062 66.1878L0.0146484 38.1407L10.1057 28.0497L28.062 46.0059L73.418 0.650391L83.509 10.7413L28.062 66.1878Z"
            fill={tick_color}
          />
        </svg>
      </div>
      <div className="sf-pro-display-black mb-4 mt-14 text-[33px]">{text}</div>
      <div className="sf-pro-display mx-5 mb-14 max-w-[293px] text-xl text-[#747474]">
        {desc}
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-3">
        <Link
          href={"/"}
          onClick={onClick}
          className={`sf-pro-display-black rounded-[35px] ${button_color} px-20 py-6 text-[25px] text-white`}
        >
          {button_text}
        </Link>
        {onReset ? (
          <button onClick={onReset} className="rounded-full bg-black p-3">
            <IoMdRefresh size={50} className="text-white" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CompletedForm;
