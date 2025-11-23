import React from "react";

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  className,
  onChange,
  value,
  name,
  variant = "primary",
}) => {
  const variants: Record<string, string> = {
    primary:
      "border outline-none w-full border-primary rounded-xl p-3 placeholder:text-primary text-black tracking-032 leading-l1 text-base ",
    underline:
      "border-b-2 border-gray-400 focus:border-primary outline-none bg-transparent",
    minimal: "bg-transparent border-none outline-none px-2 py-1",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${variants[variant]} ${className}`}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
