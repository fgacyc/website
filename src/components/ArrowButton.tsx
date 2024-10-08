import React from "react";

interface ArrowButtonProps {
  text: string;
  text_color?: string; // text-white || text-[#FFFFFF]
  arrow_color: string; // black || #000000
  bg_color: string; // bg-black || bg-[#000000]
  className?: string;
  isSubmitted?: boolean;
  onClick?: () => void;
}

const ArrowButton = ({
  text,
  text_color,
  arrow_color,
  bg_color,
  className,
  isSubmitted,
  onClick,
}: ArrowButtonProps) => {
  return (
    <button
      disabled={isSubmitted}
      onClick={onClick}
      className={`flex items-center justify-between rounded-[35px] px-12 py-5 text-lg font-bold sm:text-2xl ${text_color} ${arrow_color} ${bg_color} ${className}`}
    >
      {text}{" "}
      <svg
        width="44"
        height="24"
        viewBox="0 0 44 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-3 h-3 w-3"
      >
        <path
          d="M43.0607 13.0607C43.6464 12.4749 43.6464 11.5251 43.0607 10.9393L33.5147 1.3934C32.9289 0.807611 31.9792 0.807611 31.3934 1.3934C30.8076 1.97919 30.8076 2.92893 31.3934 3.51472L39.8787 12L31.3934 20.4853C30.8076 21.0711 30.8076 22.0208 31.3934 22.6066C31.9792 23.1924 32.9289 23.1924 33.5147 22.6066L43.0607 13.0607ZM0 13.5H42V10.5H0V13.5Z"
          fill={arrow_color}
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
