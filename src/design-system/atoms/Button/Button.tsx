import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  const variants: Record<string, string> = {
    primary:
      "bg-kingly px-4 py-2.5 md:py-3 rounded-xl hover:bg-transparent hover:text-kingly border border-kingly text-white font-black tracking-036 text-sm sm:text-base lg:text-lg leading-l3 w-full",
    secondary: "bg-secondary text-white ",
    outline: "border-2 border-primary text-primary bg-transparent",
    blank:
      "bg-transparent text-black text-sm sm:text-base tracking-032 leading-l1 font-bold",
    danger: "bg-red-500 text-white tracking-032 ",
  };

  return (
    <button
      className={`${className} ${variants[variant]} group relative flex cursor-pointer items-center justify-center gap-1 transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
