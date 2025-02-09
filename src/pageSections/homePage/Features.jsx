import React from "react";
import seamless from "@/assets/seamless.png";
import multicurrency from "@/assets/mullticurrency.png";
import realtime from "@/assets/stri/platform-payments.webp";
import userfriendly from "@/assets/stri/global-payments.webp";

export default function Features() {
  return (
    <div className="py-12 px-6">
      <div className="text-center font-semibold max-w-[500px] mx-auto">
        <h2 className="text-4xl font-semibold my-4">
          Empower Your Financial Journey with Seamless Solutions.
        </h2>
        <h3 className="text-[--gray2] text-sm">
          Explore our powerful features for seamless payments.
        </h3>
      </div>
      <div className="mt-12 flex flex-wrap gap-4 justify-center max-w-[1000px] mx-auto">
        <div className=" feature-card bg-[#ECF2F6] hover:text-[--blue2] basis-[450px] rounded-3xl px-6 py-12  ">
          <img
            src={realtime}
            alt="seamless-integration-image"
            className="bg-inherit mx-auto w-[300px] h-[250px]"
          />
          <h3 className="font-semibold text-2xl mt-6 mb-2">
            Real-time Transactions
          </h3>
          <h4 className="text-sm text-[--gray2]">
            Enjoy the convenience of sending money globally in seconds.
          </h4>
        </div>
        <div className="feature-card bg-[#ECF2F9] hover:text-[--blue2] basis-[450px] rounded-3xl px-6 py-12   ">
          <img
            src={seamless}
            alt="seamless-integration-image"
            className="bg-inherit mx-auto w-[300px]"
          />
          <h3 className="font-semibold text-2xl mt-6 mb-2">
            Seamless Integration
          </h3>
          <h4 className="text-sm text-[--gray2]">
            Seamlessly integrate with your favourite apps and services
          </h4>
        </div>
        <div className="feature-card bg-[#EBF1F3] hover:text-[--blue2] basis-[450px] rounded-3xl px-6 py-12   ">
          <img
            src={multicurrency}
            alt="seamless-integration-image"
            className="bg-inherit mx-auto w-[300px]"
          />
          <h3 className="font-semibold text-2xl mt-6 mb-2">
            Multi-Currency Support
          </h3>
          <h4 className="text-sm text-[--gray2]">
            Our systems allow to transact in various currencies effortlessly.
          </h4>
        </div>
        <div className="feature-card bg-[#EBF1F3] hover:text-[--blue2] basis-[450px] rounded-3xl px-6 py-12  ">
          <img
            src={userfriendly}
            alt="seamless-integration-image"
            className="bg-inherit mx-auto w-[300px]"
          />
          <h3 className="font-semibold text-2xl mt-6 mb-2">
            User-Friendly Interface
          </h3>
          <h4 className="text-sm text-[--gray2]">
            Zenpay is designed with you in mind,featuring an intuitive interface.
          </h4>
        </div>
      </div>
    </div>
  );
}
