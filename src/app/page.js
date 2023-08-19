"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Home() {
  return (
    <main className="bg-white rounded-md shadow-xl overflow-hidden">
      <figure className="relative w-full min-h-[30vh]">
        <Image
          src="/images/drawers.jpg"
          alt="Drawers Image"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </figure>
      <section className="px-10 relative  pt-14">
        <h1 className="font-bold text-xl text-vd-gray-blue leading-relaxed">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="my-5 text-lg text-des-dark-blue">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex items-center mb-6 relative">
          <figure className="w-12 h-12 rounded-full bg-vd-gray-blue"></figure>
          <div className="ml-5">
            <h2 className="text-vd-gray-blue mb-2 font-bold text-base">
              Michelle Appleton
            </h2>
            <p className="text-gray-blue text-sm">28 Jun 2020</p>
          </div>
          <button
            className="ml-auto bg-l-gray-blue rounded-full
          flex items-center justify-center p-2 z-10"
          >
            <Icon icon="mdi:share" className="w-5 h-5" />
          </button>
        </div>
        <div
          className="absolute bg-vd-gray-blue inset-x-0 -bottom-6 
          flex items-center gap-x-5"
        >
          <span className="uppercase tracking-[0.5em] text-gray-blue">
            Share
          </span>
          <Icon icon="uil:facebook" className="text-white w-7 h-7" />
          <Icon icon="akar-icons:twitter-fill" className="text-white w-7 h-7" />
          <Icon icon="mingcute:pinterest-fill" className="text-white w-7 h-7" />
        </div>
      </section>
    </main>
  );
}
