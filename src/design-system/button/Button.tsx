import React from "react";
import {
  LoadingPrimaryIcon,
  LoadingSecondaryIcon,
  LoadingTertiaryIcon,
} from "../atoms/icon/Icon";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className,
  disabled,
  active,
  loading,
}) => {
  const variants: Record<string, string> = {
    primary:
      "bg-kingly hover:bg-shoeWax text-white focus:ring-kingly focus:bg-kingly focus:outline-2 disabled:bg-kingly/40 focus:shadow-c1",
    secondary:
      "bg-hollandaise text-black hover:bg-dandelion focus:bg-hollandaise focus:ring-kingly focus:outline-2 disabled:bg-glowlight/40 focus:shadow-c2",
    tertiary:
      "bg-superSilver text-black hover:bg-placebo focus:bg-placebo focus:ring-kingly focus:outline-2 disabled:bg-superSilver/40 focus:shadow-c3",
    blank:
      "text-black hover:bg-superSilver focus:ring-kingly focus:bg-white focus:outline-2 disabled:bg-transparent focus:shadow-c3",
    danger:
      "bg-spiritstoneRed text-white hover:bg-aresRed focus:bg-aresRed focus:ring-kingly focus:outline-2 disabled:bg-spiritstoneRed/40 focus:shadow-c4",
  };

  const activeStyles: Record<string, string> = {
    primary: "bg-sdhadowed",
    secondary: "bg-mustard",
    tertiary: "bg-gainsboro",
    blank: "bg-white",
    danger: "bg-rufous",
  };

  const sizes: Record<string, string> = {
    lg: "px-4 text-lg py-3 font-black",
    md: "px-3 text-sm sm:text-base py-1.5 sm:py-2 font-bold",
    sm: "px-2 text-sm py-1.5 font-black",
  };

  const loadingIcons: Record<string, React.ReactNode> = {
    primary: <LoadingPrimaryIcon />,
    secondary: <LoadingSecondaryIcon />,
    tertiary: <LoadingTertiaryIcon />,
    blank: <LoadingTertiaryIcon />,
    danger: <LoadingPrimaryIcon />,
  };
  const loaderSizes: Record<string, string> = {
    lg: "h-6 w-[57px]",
    md: "h-6 w-[51px]",
    sm: "h-5 w-[46px]",
  };
  return (
    <button
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} ${
        active ? activeStyles[variant] : ""
      } ${loading ? "pointer-events-none" : ""} ${className} leading-l3 group relative flex cursor-pointer items-center justify-center gap-1 rounded-xl ring-offset-2 outline-2 outline-transparent transition-all duration-150 ease-in-out focus:ring-2 disabled:cursor-not-allowed disabled:opacity-40`}
      onClick={onClick}
    >
      {loading ? (
        <span className={`${loaderSizes[size]} animate-spin`}>
          {loadingIcons[variant]}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
