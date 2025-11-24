import React from "react";
import { Link } from "react-router-dom";

const LinkPath: React.FC<LinkProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
  path,
}) => {
  const variants: Record<string, string> = {
    primary: "text-black font-bold text-sm leading-[142.857%]",
    secondary: "bg-secondary text-white",
    outline: "border-2 border-primary text-primary bg-transparent",
    blank: "bg-transparent text-black",
    danger: "bg-red-500 text-white",
  };

  return (
    <Link
      to={`${path} ""/`}
      className={`${className} ${variants[variant]} group relative`}
      onClick={onClick}
    >
      {children}
      <span className="line-hover"></span>
    </Link>
  );
};

export default LinkPath;
