import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  id: string;
  className?: string;
  onInputSelect: (inputValue: string) => void;
  value: string;
  //   onInputChange: (value: string) => void;
  //   setError: (value: boolean) => void;
  //   error: boolean;
}

const FormCheckList = ({
  label,
  name,
  id,
  onInputSelect,
  value,
}: FormInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const inputValue = e.target.name;
      onInputSelect(inputValue);
    }
  };

  return (
    <div className="sf-pro-display mt-6">
      <div className="flex items-center gap-x-3">
        <input
          id={name}
          name={name}
          type="radio"
          value={value}
          checked={name === value}
          onChange={handleInputChange}
          className="h-4 w-4  border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label htmlFor={name} className="block text-lg leading-3 text-gray-900">
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormCheckList;
