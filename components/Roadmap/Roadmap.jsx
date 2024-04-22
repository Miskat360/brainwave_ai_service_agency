import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { roadmap } from "@/constants";
import Image from "next/image";
import { assets } from "@/app/assets";
import Tagline from "../Tagline/Tagline";

const Roadmap = () => {
  return (
    <>
      <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
          <Heading title="What we're working on" tag="READY TO GET STARTED" />

          <div className="relative grid md:grid-cols-2 gap-6 md:gap-4 md:pb-[7rem]">
            {roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In progress";
              return (
                <div
                  key={item.id}
                  className={`md:flex even:md:translate-y-[7rem] ${
                    item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  } p-0.25 rounded-[2.5rem]`}
                >
                  <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                    <div className="absolute top-0 left-0">
                      <Image
                        src={assets.grid}
                        alt=""
                        // width={550}
                        // height={550}
                        // className="w-full"
                      />
                    </div>
                    <div className="relative z-1">
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                        <Tagline>{item.date}</Tagline>
                        <div className="flex items-center px-4 py-1 bg-n-1 text-n-8 gap-3 rounded">
                          <Image
                            src={
                              item.status === "done"
                                ? assets.check2
                                : assets.loading1
                            }
                            alt=""
                          />
                          <div className="tagline">{status}</div>
                        </div>
                      </div>
                      <div className="mb-10 -my-10 -mx-15">
                        <Image
                          src={item.imageUrl}
                          alt=""
                          //   width={630}
                          //   height={420}
                          //   className="w-full"
                        />
                      </div>
                      <h4 className="h4">{item.title}</h4>
                      <p className="body-2 text-n-4">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Roadmap;
