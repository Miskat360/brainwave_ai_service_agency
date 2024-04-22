"use client";
import ButtonSvg from "@/app/assets/svg/ButtonSvg";
import React from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
  const btnStyle = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${className || ""} ${white ? "text-n-8" : "text-n-1"}`;
  const spanStyle = `relative z-10`;
  const renderButton = () => (
    <button className={btnStyle} onClick={onClick}>
      <span className={spanStyle}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={btnStyle} onClick={onClick}>
      <span className={spanStyle}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
