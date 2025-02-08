import React from "react";
import InvestHero from "@/pageSections/invest/InvestHero.jsx"
import InvestWhy from "@/pageSections/invest/InvestWhy";
import InvestBanner from "@/pageSections/invest/InvestBanner";

export default function InvestPage() {
  return (
    <div>
        <InvestBanner />
    <InvestWhy />
    <InvestHero />

    </div>
  );
}
