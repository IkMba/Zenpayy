import React from "react";
import img1 from "@/assets/stri/ML_card_testing_index.webp";
import img2 from "@/assets/stri/Rise_of_real-time_payments_Index.webp";
import img3 from "@/assets/stri/Real-time_payments_challenges_Index.webp";

export default function Systems() {
  return (
    <div className="px-8 py-12">
      <div className="md:flex items-center gap-16 md:px-12 lg:px-24">
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl text-[--dark-shade] font-bold my-4 system-header">
            A fully integrated suite of financial and payments products.
          </h2>
          <p className="text-[--gray2] text-lg">
            Everything you need for better money management in one place.Sending
            money abroad or sticking to a budget has never been easier.
          </p>
        </div>
        <div className="flex-1">
        <img src={img1} alt=""  className="my-8 "/>
        </div>
      </div>
      <div className="md:flex items-center gap-16 md:px-12 lg:px-24">
      
        <div className="flex-1 md:order-2">
          <h2 className="text-[2.5rem] lg:text-5xl text-[--dark-shade] font-bold system-header ">
            Your money’s safe space
          </h2>
          <p className="text-[--gray2] text-lg">
            With Zenpay Secure, you’re entering a new era of money security —
            where our proactive, purpose-built defences and team of fraud
            specialists help protect every account, 24/7.
          </p>
        </div>
        <div className="flex-1 md:order-1">
        <img src={img2} alt="" className="my-16"/>
      </div>
       
      </div>
      <div className="md:flex items-center gap-16 md:px-12 lg:px-24">
        <div className="flex-1">
          <h2 className="text-[2.5rem] lg:text-5xl text-[--dark-shade] font-bold system-header">
            Life, meet savings
          </h2>
          <p className="text-[--gray2] text-lg">
            Grow your money with zenpay savings and earn interests on your money. Make your money work for you!.Choose to cash out your interests anytime.
          </p>
        </div>
        <div className="flex-1">
        <img src={img3} alt="" className="my-8"/>
      </div>
      </div>
    </div>
  );
}
