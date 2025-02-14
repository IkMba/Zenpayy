import DashActions from "@/components/dashboard/DashActions";
import DashBanner from "@/components/dashboard/DashBanner";
import DashCards from "@/components/dashboard/DashCards";
import TransactionCard, { formatNumber } from "@/components/dashboard/TransactionCard";
import TransactionTable from "@/components/dashboard/TransactionTable";
import { getUser } from "@/utils/registerSlice";
import {
  Banknote,
  CircleUser,
  DollarSign,
  Lock,
  Shield,
  TrendingUp,
  User,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import atm from "@/assets/card-reader.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashBalance from "@/components/dashboard/DashBalance";
import { useGetTransactions } from "@/api/MyUserApi";

const transactionDetails = {
  description: "September Salary",
  amount: "$600.00",
  name: "Friesland network",
  date: "17 Jan,2024",
  type: "",
};

export default function DashboardHome() {
  const currentUser = useSelector(getUser);
  const [transactions, setTransactions] = useState([]);
  const { userTransactions } = useGetTransactions();

  useEffect(() => {
    const fetch = async () => {
      const transactions = await userTransactions(currentUser._id);
      setTransactions(transactions.reverse());
    };

    fetch();
  }, []);

  return (
    <div className="py-12 px-4 w-screen md:w-full ">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-semibold">{currentUser.name},</h2>
          <h3 className="text-[--gray2] text-sm">Welcome to your dashboard </h3>
        </div>
        <User className="" color="#062863" fill="#062863" size={32} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <DashBalance />
        <div className="flex gap-4 justify-end">
          <Link
            to="deposit"
            className="px-4 py-2 md:px-10 md:py-4 bg-[#E743A9] rounded-lg text-white"
          >
            Deposit
          </Link>
          <Link
            to="transfer"
            className="px-4 py-2 md:px-10 md:py-4 bg-[#7B17E5] rounded-lg text-white"
          >
            Withdraw
          </Link>
        </div>
      </div>
      <div className="flex gap-4 py-2 overflow-x-scroll w-full md:w-full md:overflow-hidden">
        <DashCards
          title="Total Savings"
          amount={`$${formatNumber(currentUser.balance)}`}
          bgColor="bg-[--blue]"
          size="md"
          icon={<Shield />}
        />
        <DashCards
          title="Total Investments"
          amount="$0.00"
          bgColor="bg-[--blue]"
          size="md"
          icon={<TrendingUp />}
        />
        <DashCards
          title="Total Loans"
          amount="$0.00"
          bgColor="bg-[--blue]"
          size="md"
          icon={<Banknote />}
        />
        <DashCards
          title="Flex Total"
          amount="$0.00"
          bgColor="bg-[--blue]"
          size="md"
          icon={<DollarSign />}
        />
        {/* <DashCards title="Total Savings" amount="$0.00" bgColor="bg-[--blue]" size="md" icon={<Shield />}/> */}
      </div>
      <div className="lg:flex gap-8 w-full">
        <div className="">
          {/* <TransactionTable /> */}
          <h2 className="text-2xl pt-4">Recent Transactions</h2>
          {transactions.length === 0 && (
            <h3 className="text-lg py-4">
              Your transactions appear here. No transactions made.
            </h3>
          )}
          {transactions.length > 0 &&
            transactions.map((item) => (
              <TransactionCard transactionDetails={item} />
            ))}
          {/* <TransactionCard transactionDetails={transactionDetails} />
        <TransactionCard transactionDetails={transactionDetails} />
        <TransactionCard transactionDetails={transactionDetails} />
        <TransactionCard transactionDetails={transactionDetails} /> */}
        </div>
        {/* <div className='flex-1 md:mt-16'>
          <DashBanner btnText='Connect Account' bannerText='Connect your account' img={atm}/>
        </div> */}
      </div>
      <div>
        <h2 className="text-2xl pt-4">Recent actions</h2>
        <DashActions
          title="Connect an Account"
          info="Avoid spending temptations. Tap to create a safelock."
          icon={<Lock />}
        />
        <DashActions
          title="Create a Safelock"
          info="Avoid spending temptations. Tap to create a safelock."
          icon={<Lock />}
        />
      </div>
    </div>
  );
}
