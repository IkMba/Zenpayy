import React from "react";
import whyImage from "@/assets/bg-image1.png";

export default function InvestWhy() {
  return (
    <div className="py-8 px-4 md:py-16 md:flex items-center  mx-auto max-w-[1200px]">
      <div className="my-8 flex-1">
        <h2 className="text-4xl uppercase font-semibold my-4 md:text-5xl md:font-bold">
        We’ve made it easier for anyone to get started.
        </h2>
        <p className="font-semibold">
        Finally, you can access pre-vetted low-medium risk primary and secondary investment opportunities easily with any amount you have. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.
        </p>
      </div>
      <div className="flex-1">
        <img src={whyImage} alt="" className="h-[75vh] md:w-[400px] mx-auto rounded-2xl" />
      </div>
    </div>
  );
}
