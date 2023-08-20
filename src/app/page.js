"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
export default function Home() {
  const [isShareHidden, setIsShareHidden] = useState(true);
  return (
    <main
      className="grid grid-cols-1 lg:grid-cols-12 max-w-3xl bg-white rounded-md shadow-xl 
    transition-colors duration-500"
    >
      <figure className="col-span-4 overflow-hidden rounded-tr-md lg:rounded-tr-none lg:rounded-l-md relative w-full min-h-[30vh] lg:min-h-0">
        <Image
          src="/images/drawers.jpg"
          alt="Drawers Image"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </figure>
      <section className="col-span-8 px-10 relative pt-14 z-0">
        <h1 className="font-bold text-xl text-vd-gray-blue leading-relaxed">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="my-5 text-des-dark-blue">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex items-center py-6 relative">
          <figure className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="/images/avatar-john.jpg"
              width={48}
              height={48}
              alt="John Doe Profile Picture"
            />
          </figure>
          <div className="ml-5">
            <h2 className="text-vd-gray-blue mb-1 font-bold text-base">
              John Doe
            </h2>
            <p className="text-gray-blue text-sm">28 Jun 2020</p>
          </div>
          <button
            className={`${
              !isShareHidden ? "lg:bg-vd-gray-blue lg:text-white" : ""
            } ml-auto bg-l-gray-blue hover:bg-vd-gray-blue rounded-full
          flex items-center justify-center p-2 z-10 group`}
            onClick={() => setIsShareHidden((prevState) => !prevState)}
          >
            <Icon icon="mdi:share" className="w-5 h-5 group-hover:text-white" />
          </button>
        </div>
        {!isShareHidden && (
          <div
            className="absolute inset-x-0 bottom-0 bg-vd-gray-blue 
          flex gap-x-5 py-9 px-10 
          lg:py-5 lg:inset-x-auto lg:bottom-24 lg:rounded-lg lg:shadow-md lg:-right-[19%] lg:z-50"
          >
            <span className="uppercase tracking-[0.5em] text-gray-blue">
              Share
            </span>
            <a href="#" target="_blank">
              <Icon
                icon="uil:facebook"
                className="text-white hover:text-gray-blue w-7 h-7"
              />
            </a>
            <a href="#" target="_blank">
              <Icon
                icon="akar-icons:twitter-fill"
                className="text-white hover:text-gray-blue w-7 h-7"
              />
            </a>
            <a href="#" target="_blank">
              <Icon
                icon="mingcute:pinterest-fill"
                className="text-white hover:text-gray-blue w-7 h-7"
              />
            </a>

            <span
              className="hidden lg:block absolute top-full left-1/2 -ml-1 
            border-[8px] border-transparent border-t-vd-gray-blue"
            ></span>
          </div>
        )}
      </section>
    </main>
  );
}
