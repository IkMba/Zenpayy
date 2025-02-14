import React from 'react'
import { formatNumber } from './TransactionCard';
import { useSelector } from 'react-redux';
import { getUser } from '@/utils/registerSlice';

export default function DashBalance() {
  const currentUser = useSelector(getUser);

  return (
    <div>
      <p className='text-sm text-[--gray2]'>Total Balance</p>
      <p className='text-2xl'>${formatNumber(currentUser.balance)}</p>
    </div>
  )
}
