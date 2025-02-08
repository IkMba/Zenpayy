import React from "react";
import fastCompany from "@/assets/fastcompanylogo.svg";
import stripe from "@/assets/stripe.svg";
import coinbase from "@/assets/coinbase.svg";
import venmo from "@/assets/venmo.svg";
import cio from "@/assets/cio.svg";
import pyments from "@/assets/pyments.svg";
import amazon from "@/assets/amazon.svg";
import salesforce from "@/assets/salesforce.svg";
import microsoft from "@/assets/rev/microsoft.svg";
import paypal from "@/assets/rev/paypal.svg";

export default function Partners() {
  return (
    <div className="my-8">
      <h3 className="text-center text-4xl md:text-5xl font-semibold text-[--dark-shade] mb-4">
        Partners
      </h3>
      <div className="relative w-[90%] max-w-[1536px] h-[100px] overflow-hidden mx-auto marquee ">
        <img src={stripe} alt="" className="marq-item marq-1" />
        <img src={salesforce} alt="" className=" marq-item marq-6" />
        <img src={coinbase} alt="" className=" marq-item marq-2" />
        <img src={amazon} alt="" className=" marq-item marq-5" />
        <img src={venmo} alt="" className=" marq-item marq-3" />
        <img src={paypal} alt="" className=" marq-item marq-7" />
        <img src={microsoft} alt="" className=" marq-item marq-8" />
        <img src={fastCompany} alt="" className=" marq-item marq-4" />
       
        {/* <img src={stripe} alt="" className="w-[200px] " />
        <img src={pyments} alt="" className="w-[200px] marq-item" />
        <img src={venmo} alt="" className="w-[200px] marq-item" />
        <img src={fastCompany} alt="" className="w-[200px] " />
        <img src={cio} alt="" className="w-[200px] marq-item" />
        <img src={coinbase} alt="" className="w-[200px] marq-item" /> */}
      </div>
    </div>
  );
}
