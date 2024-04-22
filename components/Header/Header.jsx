"use client";
import { assets } from "@/app/assets";
import { navigation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button/Button";
import MenuSvg from "@/app/assets/svg/MenuSvg";
import { HambugerMenu } from "../design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  return (
    <>
      <div
        className={`${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        } w-full left-0 fixed top-0 z-50 border-n-6 border-b lg:bg-n-8/90`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <Link href={"/"} className="w-[12rem] block xl:mr-8">
            <Image src={assets.brainwave} alt="" />
          </Link>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } lg:flex fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:mx-auto lg:bg-transparent`}
          >
            <div className="flex flex-col lg:flex-row m-auto z-2 relative">
              {navigation.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  className={`${
                    item.onlyMobile && "lg:hidden"
                  } uppercase text-2xl text-n-1 transition-colors hover:text-color-1 font-code relative px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs font-semibold xl:px-12 lg:leading-5 lg:hover:text-n-1 ${
                    item.title == "new account" && "mr-8"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <HambugerMenu />
          </nav>
          <Link
            href={`/signup`}
            className="hidden uppercase button transition-colors hover:text-n-1 mr-8 lg:block"
          >
            New account
          </Link>
          <Link href={`/login`}>
            <Button className="hidden lg:flex">Sign In</Button>
          </Link>
          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
