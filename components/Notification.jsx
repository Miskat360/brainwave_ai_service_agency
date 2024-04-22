import { assets } from "@/app/assets";
import { notificationImages } from "@/constants";
import Image from "next/image";
import React from "react";

const Notification = ({ className, title }) => {
  return (
    <>
      <div
        className={`${
          className || ""
        } bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl p-4 pr-6 gap-5 items-center`}
      >
        <div className="w-16 rounded-xl overflow-hidden">
          <Image src={assets.notification1} alt="" />
        </div>
        <div className="flex-1">
          <h6 className="mb-1 font-semibold text-base">{title}</h6>
          <div className="flex items-center justify-between">
            <ul className="flex -m-0.5">
              {notificationImages.map((item, index) => (
                <li
                  key={index}
                  className="rounded-full first:-ml-0 -ml-2 overflow-hidden w-6 h-6 border-2 border-n-12"
                >
                  <Image src={item} alt={index} />
                </li>
              ))}
            </ul>
            <p className="body-2 text-n-13">1m ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
