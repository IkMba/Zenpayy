import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-8 px-12 md:px-24 md:py-24 lg:flex gap-36">
      <div className="w-80 text-[--gray] text-sm ">
        <h2 className="text-2xl font-semibold my-4 text-[--dark-shade]">
          Zenpay
        </h2>
        <h4>
          Reach your financial goals with super secure and efficient systems. Build the life you want with zenpay.
        </h4>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 md:items-center mt-6 md:mt-0">
        <div className="text-sm text-[gray] flex flex-col gap-3">
          <h3 className="text-2xl text-[--dark-shade] font-semibold my-2">
            About
          </h3>
          <Link className="text-sm">Our Story</Link>
          <Link>Careers</Link>
          <Link>Blog</Link>
          <Link>Contact Us</Link>
        </div>
        <div className="text-sm text-[gray] flex flex-col gap-3">
          <h3 className="text-3xl text-[--dark-shade] font-semibold my-2">
            Accounts
          </h3>
          <Link>Personal accounts</Link>
          <Link>Business accounts</Link>
          <Link>Payment Solutions</Link>
          <Link>Integration</Link>
        </div>
        <div className="text-sm text-[gray] flex flex-col gap-3">
          <h3 className="text-2xl text-[--dark-shade] font-semibold my-2">
            Resources
          </h3>
          <Link>Help Center</Link>
          <Link>API Documentation</Link>
          <Link>Community</Link>
          <Link>Partners</Link>
        </div>
        <div className="text-sm text-[gray] flex flex-col gap-3">
          <h3 className="text-2xl text-[--dark-shade] font-semibold my-2">
            Support
          </h3>
          <Link>Customer Support</Link>
          <Link>FAQ</Link>
          <Link>Report a problem</Link>
          <Link>Security and privacy</Link>
        </div>
      </div>
    </div>
  );
}
