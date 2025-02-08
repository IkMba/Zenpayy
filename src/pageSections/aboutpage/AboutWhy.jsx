import React from "react";
import whyImage from "@/assets/aboutstronger.webp";


export default function AboutWhy() {
  return (
    <div className="py-8 px-4 md:py-16 md:flex items-center  mx-auto max-w-[1200px]">
      <div className="my-8 flex-1">
        <h2 className="text-4xl uppercase font-semibold my-4 md:text-5xl md:font-bold">
          Why we come to work every day
        </h2>
        <p className="font-semibold">
          Money matters are complicated. Whether it’s sending money abroad,
          balancing your family’s budget, or scaling your business — we’ve all
          experienced how fractured and frustrating finances can be. That’s why
          we’re here. Revolut exists to remove the friction that stands in the
          way of your money goals becoming your new reality.
        </p>
      </div>
      <div className="flex-1">
        <img src={whyImage} className="h-[75vh] md:w-[400px] mx-auto" />
      </div>
    </div>
  )
}
