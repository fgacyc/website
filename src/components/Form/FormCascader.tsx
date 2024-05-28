import Image from "next/image";
import React from "react";

interface Option {
  value: string;
  label: string;
}

interface OptionGroup {
  label: string;
  options: Option[];
}

interface FormCascaderProps {
  label: string;
  name: string;
  id: string;
  options: (Option | OptionGroup)[];
  className?: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export const convertDataToOptions = (
  data: Record<string, string[]>
): (Option | OptionGroup)[] => {
  return Object.entries(data).map(([key, values]) => {
    if (values.length > 0) {
      return {
        label: key,
        options: values.map((value) => ({
          value: value,
          label: value,
        })),
      } as OptionGroup;
    } else {
      return {
        value: key,
        label: key,
      } as Option;
    }
  });
};

const FormCascader = ({
  label,
  name,
  id,
  options,
  className,
  selectedValue,
  onValueChange,
}: FormCascaderProps) => {
  return (
    <div
      className={`sf-pro-display relative mx-auto mb-5 flex flex-col text-xl ${className}`}
    >
      <label htmlFor={name} className="mb-[13px] font-semibold">
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={selectedValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="w-full appearance-none rounded-[5px] border border-[#B2B2B2] bg-white px-[18px] py-[13px] text-xl focus:outline-none"
      >
        {options.map((option, index) =>
          "options" in option ? (
            <optgroup key={index} label={option.label} className="bg-[#00EDC2]">
              {option.options.map((subOption, subIndex) => (
                <option
                  key={subIndex}
                  value={subOption.value}
                  className="bg-[#9E9E9E] text-white"
                >
                  {subOption.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option
              key={index}
              value={option.value}
              className="bg-[#00EDC2] font-semibold text-black"
            >
              {option.label}
            </option>
          )
        )}
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

export default FormCascader;
