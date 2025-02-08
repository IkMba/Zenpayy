import React from "react";
import img1 from "@/assets/money-2.webp";
import savings1 from "@/assets/rev/savings-1.webp";
import savings4 from "@/assets/rev/savings4.webp";

export default function InvestHero() {
  return (
    <div className="px-6 py-4 bg-[--light-blue] text-[--dark-shade]">
      <div className="text-center">
        <h2 className="text-[--dark-shade] text-3xl font-semibold">
          Simple Investments with great returns
        </h2>
        <h3 className="text-md my-2">
          Investments are made accessible to everyone
        </h3>
      </div>
      <div className="mt-8 md:flex flex-wrap justify-center gap-8">
        <div className="product-card bg-white px-4 py-6 text-center rounded-2xl md:w-[400px] mt-8">
          <h4 className="text-[--blue2] text-[1.75rem] font-semibold my-4 ">
            Investments simplified
          </h4>
          <h5>
            With minimum investments starting as low as N5,000, investment is no
            longer out of reach. Everyone is welcome.
          </h5>
          <img src={img1} alt="" className="rounded-xl mt-4 h-[55vh] md:h-[65vh] w-full md:mt-12" />
        </div>
        <div className="product-card bg-white px-4 py-8 text-center rounded-2xl mt-8  md:w-[400px]">
          <h4 className="text-[--blue2] text-[1.75rem] font-semibold my-4 ">
            Invest confidently
          </h4>
          <h5>
            We work with leading licensed investment houses such as ARM, AIICO
            and Stanbic.
          </h5>
          <img src={savings4} alt="" className="rounded-xl mt-4 h-[55vh] md:h-[65vh] w-full md:mt-12" />
        </div>
        <div className="product-card bg-white px-4 py-8 text-center rounded-2xl mt-8 md:w-[400px]">
          <h4 className="text-[--blue2] text-[1.75rem] font-semibold my-4 ">
            Diversify your portfolio
          </h4>
          <h5>
            Invest in various industries such as fixed income instruments,
            agriculture, transportation, etc
          </h5>
          <img src={savings1} alt="" className="rounded-xl mt-4 h-[55vh] md:h-[65vh] w-full md:mt-12" />
        </div>
      </div>
    </div>
  );
}
