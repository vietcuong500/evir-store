"use client";

import HelperText from "./HelperText/HelperText";
import Input from "./input/Input";

interface IInputFieldProps {
  name: string;
  label: string;
  value?: string;
  onChange?: any;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  message?: string | any;
}

function InputField(props: IInputFieldProps) {
  const {
    name,
    label,
    value,
    onChange,
    placeholder,
    required,
    message,
    error,
  } = props;
  return (
    <div className="w-full">
      <label className="text-sm block font-medium mb-1 text-neutral-950" htmlFor={name}>
        {label}
        {required ? <sup className="text-red-700 ml-1">*</sup> : null}
      </label>
      <Input
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
      />
      <HelperText error={error} message={message} />
    </div>
  );
}

export default InputField;
