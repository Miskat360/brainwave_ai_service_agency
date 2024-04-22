import React, { useRef } from "react";
import Section from "./Section";
import Image from "next/image";
import { assets } from "@/app/assets";
import Button from "./Button/Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons, notificationImages } from "@/constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      custionPadding
      id="hero"
    >
      <div className="relative container" ref={parallaxRef}>
        <div className="relative z-1 text-center max-w-[62rem] mx-auto mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="relative inline-block">
              Brainwave
              <Image
                src={assets.curve}
                alt="curve"
                className="absolute top-full left-0 w-full xl:-m-2"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button white>get started</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl lg:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={assets.robot}
                  alt="robot"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  // width={1440}
                  // height={1800}
                />
                <Generating className="absolute bottom-5 left-5 right-4 md:bottom-8 md:w-[31rem] md:left-1/2 md:-translate-x-1/2" />
              </div>
            </div>
            <ScrollParallax isAbsolutelyPositioned>
              <ul
                className={`hidden absolute px-1 py-1 -left-[5.4rem] bottom-[7.5rem] bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex`}
              >
                {heroIcons.map((item, index) => (
                  <li key={index} className="px-5 py-5">
                    <Image src={item} alt={item} />
                  </li>
                ))}
              </ul>
              <Notification
                className={`hidden absolute -right-[5.4rem] bottom-[11rem] w-[18rem] xl:flex`}
                title="Code generation"
              />
            </ScrollParallax>
          </div>
          <Gradient />
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image src={assets.heroBackground} alt="heroBackground" />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
