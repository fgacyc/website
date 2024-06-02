import Image from "next/image";
import React from "react";

interface FormComboboxProps {
  label: string;
  name: string;
  id: string;
  options: { value: string; label: string }[];
  className?: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  error: boolean;
}

const FormCombobox = ({
  label,
  name,
  id,
  options,
  className,
  selectedValue,
  onValueChange,
  error,
}: FormComboboxProps) => {
  return (
    <div
      className={`sf-pro-display relative mx-auto mb-5 flex flex-col text-xl ${className}`}
    >
      <label htmlFor={name} className="mb-[13px] font-semibold">
        {label}
        {error && <span className="ml-1 text-[#FF0000]">* </span>}
      </label>
      <select
        name={name}
        id={id}
        value={selectedValue}
        onChange={(e) => onValueChange(e.target.value)}
        className={`w-full appearance-none  rounded-[5px] border ${
          error ? "border-red-500" : "border-[#B2B2B2]"
        } bg-white px-[18px] py-[13px] text-xl focus:outline-none`}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="bg-[#9E9E9E] text-white"
          >
            {option.label}
          </option>
        ))}
      </select>
      <Image
        src={"/icons/arrow_down.svg"}
        alt="Arrow Down Icon"
        width={13}
        height={7}
        className="absolute bottom-[20px] right-[18px]"
      />
    </div>
  );
};

export default FormCombobox;
