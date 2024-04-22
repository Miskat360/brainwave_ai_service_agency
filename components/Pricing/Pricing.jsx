import React from "react";
import Section from "../Section";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/assets";
import Heading from "../Heading";
import PricingList from "../PricingList/PricingList";
import { LeftLine, RightLine } from "../design/Pricing";
const Pricing = () => {
  return (
    <>
      <Section className="overflow-hidden" id="pricing">
        <div className="container relative z-2">
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <Image
              src={assets.smallSphere}
              alt=""
              className="relative z-1"
              width={255}
              height={255}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
              <Image src={assets.stars} alt="" />
            </div>
          </div>
          <Heading
            title="Pay once, use forever"
            tag="GET STARTED WITH BRAINWAVE"
          />
          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>
          <div className="flex justify-center mt-10 text-xs font-bold font-code tracking-wider">
            <Link href={"/pricing"} className="border-b hover:border-none">
              SEE THE FULL DETAILS
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Pricing;
