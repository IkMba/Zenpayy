import React from "react";
import img1 from "@/assets/money-2.webp";
import savings1 from "@/assets/rev/savings-1.webp";
import savings4 from "@/assets/rev/savings4.webp";

export default function SaveHero() {
  return (
    <div className="px-6 py-8 bg-[--light-blue] text-[--dark-shade]">
      <div className="text-center">
        <h2 className="text-[--dark-shade] text-3xl font-semibold md:text-4xl">
        Save without thinking about it.
        </h2>
        <h3 className="text-md my-2">
        Enjoy automated savings, quick manual savings top up and competitive interest rates.
        </h3>
      </div>
      <div className="mt-8 md:flex flex-wrap justify-center gap-8">
        <div className="product-card bg-white px-4 py-6 text-center rounded-2xl md:w-[400px] mt-8">
          <h4 className="text-[--blue2] text-[1.75rem] font-semibold my-4 ">
          Save automatically
          </h4>
          <h5>
          Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.
          </h5>
          <img src={img1} alt="" className="rounded-xl mt-4 h-[55vh] md:h-[65vh] w-full md:mt-12" />
        </div>
        <div className="product-card bg-white px-4 py-8 text-center rounded-2xl mt-8  md:w-[400px]">
          <h4 className="text-[--blue2] text-[1.75rem] font-semibold my-4 ">
          Save on the go
          </h4>
          <h5>
          Don’t fancy automatic savings? No problem, you can manually top up your Piggybank savings at anytime, anywhere.
          </h5>
          <img src={savings4} alt="" className="rounded-xl mt-4 h-[55vh] md:h-[65vh] w-full md:mt-12" />
        </div>
        <div className="product-card bg-white px-4 py-8 text-center rounded-2xl mt-8 md:w-[400px]">
          <h4 className="text-[--blue2] text-[1.75rem] font-semibold my-4 ">
          Build discipline
          </h4>
          <h5>
          With four free withdrawal days in the year, you are less tempted to spend your savings and meet your savings goals faster.
          </h5>
          <img src={savings1} alt="" className="rounded-xl mt-4 h-[55vh] md:h-[65vh] w-full md:mt-12" />
        </div>
      </div>
    </div>
  );
}
