import { assets } from "@/app/assets";
import Image from "next/image";
import React from "react";

const Generating = ({ className }) => {
  return (
    <>
      <div
        className={`flex items-center bg-n-8/80 rounded-[1.7rem] px-6 h-[3.5rem] gap-4 ${
          className || ""
        }`}
      >
        <div className="w-5 h-5">
          <Image src={assets.loading} alt="" />
        </div>
        AI is generating|
      </div>
    </>
  );
};

export default Generating;
