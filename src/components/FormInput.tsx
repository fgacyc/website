import React from "react";

interface FormInputProps {
  width: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
  id: string;
  validate?: (inputValue: string) => boolean;
  value: string;
  onInputChange: (value: string) => void;
  setError: (value: boolean) => void;
  error: boolean;
}

const FormInput = ({
  width,
  label,
  placeholder,
  type,
  name,
  id,
  validate,
  value,
  onInputChange,
  setError,
  error,
}: FormInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onInputChange(inputValue);
    if (setError && validate) {
      setError(!validate(inputValue));
    }
  };

  return (
    <div
      className={`sf-pro-display mx-auto mb-5 flex ${width} flex-col text-xl`}
    >
      <label htmlFor={name} className="mb-[13px] font-semibold">
        {label}
        {error && <span className="ml-1 text-[#FF0000]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange} // Use the custom event handler
        className={`w-full rounded-[5px] border ${
          error ? "border-red-500" : "border-[#B2B2B2]"
        } bg-white px-[18px] py-[13px] placeholder-[#B2B2B2] focus:outline-none`}
      />
    </div>
  );
};

export default FormInput;
