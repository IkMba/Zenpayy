import React from "react";
import aboutBanner from "@/assets/aboutBanner.webp";

export default function InvestBanner() {
  return (
    <div className="about-banner px-8 py-20 text-white">
      <div className="lg:w-[70%] lg:px-[100px] lg:py-[50px]">
        {/* <h2 className='text-xl font-semibold text-[--gray]'>About us</h2> */}
        <h3 className="text-4xl font-extrabold uppercase my-2 lg:my-6 lg:text-5xl">
          Invest on the go
        </h3>
        <p className="font-medium mb-8">
          Invest securely and confidently on the go. Up to 35% returns, 6-12
          month duration.
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
