import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { assets } from "@/app/assets";
import { pricing } from "@/constants";
const PricingList = () => {
  return (
    <>
      <div className="flex gap-[1rem] max-lg:flex-wrap -red-800">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-full h-full px-6 even:py-14 odd:py-8 odd:my-4 border border-n-6 rounded-[2rem] bg-n-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] text-n-1/50">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>
            <Link
              href={
                item.price ? "/pricing" : "mailto:gmcservicecenter@gmail.com"
              }
            >
              <Button white={!!item.price} className="w-full mb-6">
                {item.price ? "Get started" : "contact us"}
              </Button>
            </Link>
            <ul>
              {item.features.map((item, index) => (
                <li
                  key={index}
                  className="py-5 border-t border-n-6 flex items-start gap-4 body-2"
                >
                  <Image src={assets.check} alt="" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingList;
