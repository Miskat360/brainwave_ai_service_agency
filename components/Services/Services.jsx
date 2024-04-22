import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import Image from "next/image";
import { assets } from "@/app/assets";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import Generating from "../Generating";
import {
  Gradient,
  PhotChatMessage,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

const Services = () => {
  return (
    <>
      <Section id="how-to-use">
        <div className="container">
          <Heading
            title="Generative AI made for creators."
            text="Brainwave unlocks the potential of AI-powered applications"
          />

          <div className="relative">
            <div className="relative z-1 flex items-center mb-5 p-8 h-[39rem] xl:h-[46rem] border border-n-1/10 lg:p-20 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 pointer-events-none w-full h-full md:w-3/5 xl:w-auto">
                <Image
                  src={assets.service1}
                  alt=""
                  className="w-full h-full object-cover md:object-right"
                />
              </div>
              <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4">Smartest AI</h4>
                <p className="body-2 text-n-3 mt-4 mb-[3rem]">
                  Brainwave unlocks the potential of AI-powered applications
                </p>
                <ul className="body-2">
                  {brainwaveServices.map((item, index) => (
                    <li
                      key={index}
                      className="py-4 border-t border-n-6 flex items-center gap-4"
                    >
                      <div>
                        <Image src={assets.check} alt="" />
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Generating className="absolute left-4 right-4 border border-n-1/10 bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-8" />
            </div>
            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={assets.service2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <PhotChatMessage />
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90">
                  <h4 className="h4 mb-4">Photo editing</h4>
                  <p className="body-2 text-n-3">
                    Automatically enhance your photos using our AI app&apos;s
                    photo editing feature. Try it now!
                  </p>
                </div>
              </div>
              <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">Video generation</h4>
                  <p className="body-2 text-n-3 mb-[2rem]">
                    The world&apos;s most powerful AI photo and video art
                    generation engine. What will you create?
                  </p>
                  <ul className="flex items-center justify-between">
                    {brainwaveServicesIcons.map((item, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-center rounded-2xl ${
                          index == 2
                            ? "bg-conic-gradient w-[3rem] h-[3rem] md:w-[4.5rem] md:h-[4.5rem] p-0.25"
                            : "bg-n-6 w-10 h-10 md:w-15 md:h-15"
                        }`}
                      >
                        <div
                          className={`${
                            index == 2 &&
                            "bg-n-7 w-full h-full flex items-center justify-center rounded-[1rem]"
                          }`}
                        >
                          <Image src={item} alt="" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[20rem] rounded-xl overflow-hidden bg-n-8 md:h-[25rem]">
                  <Image
                    src={assets.service3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <VideoChatMessage />
                  <VideoBar />
                </div>
              </div>
            </div>
            <Gradient />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
