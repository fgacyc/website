import React from "react";

interface CompletedFormProps {
  bg_color: string; // bg-black || bg-[#000000]
  tick_bg: string; // bg-white || bg-[#FFFFFF]
  tick_color: string; // #000000
  button_color: string; // bg-white || bg-[#FFFFFF]
  button_text: string;
  text: string;
  desc: string;
  onClick?: () => void;
}

const CompletedForm = ({
  bg_color,
  tick_bg,
  tick_color,
  button_color,
  button_text,
  text,
  desc,
  onClick,
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
      <button
        onClick={onClick}
        className={`sf-pro-display-black rounded-[35px] ${button_color} px-20 py-6 text-[25px] text-white`}
      >
        {button_text}
      </button>
    </div>
  );
};

export default CompletedForm;
