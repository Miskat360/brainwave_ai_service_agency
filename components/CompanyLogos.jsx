import { companyLogos } from "@/constants";
import Image from "next/image";
import React from "react";

const CompanyLogos = ({ className }) => {
  return (
    <>
      <div className={`${className || ""}`}>
        <h5 className="tagline mb-6 lg:mb-12 xl:mb-16 text-center text-n-1/50">
          HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
        </h5>
        <ul className="flex items-center justify-around">
          {companyLogos.map((item, index) => (
            <li key={index}>
              <Image src={item} alt={index} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompanyLogos;
