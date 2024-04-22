"use client";
import Button from "@/components/Button/Button";
import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Collaboratin from "@/components/Collaboration/Collaboratin";
import Services from "@/components/Services/Services";
import Pricing from "@/components/Pricing/Pricing";
import Roadmap from "@/components/Roadmap/Roadmap";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboratin />
        <Services />
        <Pricing />
        <Roadmap />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Home;
