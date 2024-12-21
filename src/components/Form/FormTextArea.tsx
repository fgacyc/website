import React, { type ChangeEvent } from "react";

interface FormTextAreaProps {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  className?: string;
  validate?: (inputValue: string) => boolean;
  value: string;
  onInputChange: (value: string) => void;
  setError: (value: boolean) => void;
  error: boolean;
  desc?: string;
}

const FormTextArea = ({
  label,
  placeholder,
  name,
  id,
  className,
  validate,
  value,
  onInputChange,
  setError,
  error,
  desc,
}: FormTextAreaProps) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    onInputChange(inputValue);
    if (setError && validate) {
      setError(!validate(inputValue));
    }
  };

  return (
    <div
      className={`sf-pro-display mx-auto mb-5 flex ${className} flex-col text-xl`}
    >
      <label htmlFor={name} className="mb-[13px] font-semibold">
        {label}
        {error && <span className="ml-1 text-[#FF0000]">* </span>}
      </label>
      <textarea
        rows={4}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange} // Use the custom event handler
        className={`w-full rounded-[5px] border text-xl ${
          error ? "border-red-500" : "border-[#B2B2B2]"
        } bg-white px-[18px] py-[13px] placeholder-[#B2B2B2] focus:outline-none`}
      />

      <span className="pl-5 text-sm text-[#B2B2B2]"> {desc} </span>
    </div>
  );
};

export default FormTextArea;
