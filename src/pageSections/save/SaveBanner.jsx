import React from "react";
import aboutBanner from "@/assets/aboutBanner.webp";

export default function SaveBanner() {
  return (
    <div className="about-banner px-8 py-20 text-white">
      <div className="lg:w-[70%] lg:px-[100px] lg:py-[50px]">
        <h2 className="text-xl font-semibold text-[--gray]"></h2>
        <h3 className="text-4xl font-extrabold uppercase my-2 lg:my-6 lg:text-5xl">
          Automated savings
        </h3>
        <p className="font-medium mb-8">
          Strict daily, weekly or monthly automatic savings. Earn up to 14% p.a.
        </p>
        <a
          href="/register"
          className="bg-white px-6 py-4 rounded-[50px] text-[--dark-shade] font-semibold "
        >
          Try Trustbanky now
        </a>
      </div>
    </div>
  );
}
