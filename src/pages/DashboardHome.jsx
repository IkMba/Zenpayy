import DashActions from '@/components/dashboard/DashActions'
import DashCards from '@/components/dashboard/DashCards'
import TransactionCard from '@/components/dashboard/TransactionCard'
import TransactionTable from '@/components/dashboard/TransactionTable'
import { Banknote, CircleUser, Lock, Shield, TrendingUp, User } from 'lucide-react'
import React from 'react'

const transactionDetails = {
    description:"September Salary",
    amount:"$600.00",
    name:"Friesland network",
date:"17 Jan,2024",
type:""
}

export default function DashboardHome() {
  return (
    <div className='py-12 px-4 w-screen md:w-full '>
        <div className='flex justify-between items-center mb-8'>
            <div>
            <h2 className='text-2xl font-semibold'>Mba,</h2>
            <h3 className='text-[--gray2] text-sm'>Welcome to your dashboard </h3>
            </div>
            <User className='' color='#062863' fill='#062863' size={32} />
        </div>
    <div className='flex gap-4 py-2 overflow-x-scroll w-full md:w-full md:overflow-hidden'>
      <DashCards title="Total Savings" amount="$0.00" bgColor="bg-[--blue]" size="md" icon={<Shield />}/>
      <DashCards title="Total Investments" amount="$0.00" bgColor="bg-[--blue]" size="md" icon={<TrendingUp />}/>
      <DashCards title="Total Loans" amount="$0.00" bgColor="bg-[--blue]" size="md" icon={<Banknote />}/>
      {/* <DashCards title="Total Savings" amount="$0.00" bgColor="bg-[--blue]" size="md" icon={<Shield />}/> */}
    </div>
    <div>
        {/* <TransactionTable /> */}
        <h2 className='text-2xl pt-4'>Recent Transactions</h2>
        <TransactionCard transactionDetails={transactionDetails} />
        <TransactionCard transactionDetails={transactionDetails} />
        <TransactionCard transactionDetails={transactionDetails} />
        <TransactionCard transactionDetails={transactionDetails} />
    </div>
    <div>
        <h2 className='text-2xl pt-4'>Recent actions</h2>
    <DashActions title="Connect an Account" info="Avoid spending temptations. Tap to create a safelock." icon={<Lock />} />
    <DashActions title="Create a Safelock" info="Avoid spending temptations. Tap to create a safelock." icon={<Lock />} />
    </div>
    </div>
  )
}
