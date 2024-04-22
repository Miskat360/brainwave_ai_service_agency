import brackets from "@/app/assets/svg/Brackets";
import React from "react";

const Tagline = ({ className, children }) => {
  return (
    <>
      <div className={`tagline flex items-center ${className || ""}`}>
        {brackets("left")}
        <div className="mx-3">{children}</div>
        {brackets("right")}
      </div>
    </>
  );
};

export default Tagline;
