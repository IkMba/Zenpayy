import React from "react";
import whyImage from "@/assets/bg-image1.png";

export default function SaveWhy() {
  return (
    <div className="py-8 px-4 md:py-16 md:flex items-center  mx-auto max-w-[1200px]">
      <div className="my-8 flex-1">
        <h2 className="text-4xl uppercase font-semibold my-4 md:text-5xl md:font-bold">
          Build your savings small small!
        </h2>
        <p className="font-semibold">
          With Trustbanky, you can save periodically, automatically or manually.
          You can also save as you go, on your own terms. You’re the boss of
          your savings, choose how you want to save.
        </p>
      </div>
      <div className="flex-1">
        <img
          src={whyImage}
          alt=""
          className="h-[75vh] md:w-[400px] mx-auto rounded-2xl"
        />
      </div>
    </div>
  );
}
