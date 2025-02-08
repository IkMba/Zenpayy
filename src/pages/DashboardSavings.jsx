import DashCards from "@/components/dashboard/DashCards";
import DashSavingsCard from "@/components/dashboard/DashSavingsCard";
import { Shield, User } from "lucide-react";

export default function DashboardSavings() {
  return (
    <div className="py-12 px-4 w-screen md:w-full ">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-semibold">Savings</h2>
          <h3 className="text-[--gray2] text-sm">
            See how well you are doing{" "}
          </h3>
        </div>
        <User className="" color="#062863" fill="#062863" size={32} />
      </div>
      <div>
        <div className="border border-[--gray2] px-4 py-6">
          <h3 className="text-[--gray] text-sm">Total Balance</h3>
          <h4 className="text-[--blue] text-3xl">$0.00</h4>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap my-8">
        <DashSavingsCard
          title="Total Savings"
          text="this is the total savings you have in your account"
          icon={<Shield />}
          amount="0.00"
          bgColor="bg-[#CCF0FE]"
          // size="lg"
        />
        <DashSavingsCard
          title="Flex Savings"
          text="this is the total savings you have in your account"
          icon={<Shield />}
          amount="0.00"
          bgColor="bg-[#FFEAF5]"
          // size="lg"
        />
        <DashSavingsCard
          title="Safelock"
          text="this is the total savings you have in your account"
          icon={<Shield />}
          amount="0.00"
          bgColor="bg-[#E7F6FF]"
          // size="lg"
        />
        <DashSavingsCard
          title="Goals"
          text="this is the total savings you have in your account"
          icon={<Shield />}
          amount="0.00"
          bgColor="bg-[#DCFFEB]"
          // size="lg"
        />
        <DashSavingsCard
          title="Targets"
          text="this is the total savings you have in your account"
          icon={<Shield />}
          amount="0.00"
          bgColor="bg-[#f5be92]"
          // size="lg"
        />
        <DashSavingsCard
          title="Flex"
          text="this is the total savings you have in your account"
          icon={<Shield />}
          amount="0.00"
          bgColor="bg-[#EFF4F5]"
          // size="lg"
        />
      </div>
      
    </div>
  );
}
