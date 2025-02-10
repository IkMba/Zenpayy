import { Button } from '@/components/ui/button'
import DepositForm from '@/pageSections/deposit/DepositForm'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import savings1 from "@/assets/rev/save-1.webp"
import savings2 from "@/assets/rev/save-2.webp"
import savings3 from "@/assets/rev/save-3.webp"
import img from "@/assets/wallet-qrcode.png"


export default function DepositPage() {
  const [openPlay,setopenPlay] = useState()
  const [paymentMethod,setPaymentMethod] = useState()

  const btcAddress = 'TG9j5dNnqFhB7d4BsoW4PtLtNRRjicpPbe'
  const ethAddress = 'eth345692aakaksmmssassaedxaa'
  const usdtAddress = 'usdejs345692klmlaakslm;,aoiowe'

  const address = paymentMethod === "usdt" ? usdtAddress : paymentMethod === 'eth' ? ethAddress : btcAddress

  // const img =  paymentMethod === "usdt" ? savings1 : paymentMethod === 'eth' ? savings2 : savings3
  return (
    // <div className='px-8 py-12 max-w-[600px] flex flex-col gap-4'>
    //   <h2 className='text-3xl text-[--dark-shade]'>Deposit</h2>
    //   <p>To depost money into your account make a trnasfer to the account below:</p>
    //   <div className='bg-[#CCF0FE] w-fit px-12 py-8 rounded-xl text-xl'>
    //     <p>Account no: 03458695</p>
    //     <p>Bank name: JP Morgan Chase</p>
    //     <p>Swift code: 03458695</p>
    //   </div>
    //   <p>The money will be reflected in a few minutes.</p>
    //   <Button className='bg-[--blue2] w-fit px-8' onClick={() => setopenPlay(!openPlay)}>
    //     <Link to='/dashboard/pay'>
    //     Deposit with Stripe</Link></Button>
    // </div>
    <div className=''>
    <div className='md:flex gap-16 border border-[--gray2] my-8 mx-4 md:my-16 py-8 md:pl-2 md:pr-12 md:w-fit '>
      <div className='md:mt-10 md:max-w-[400px] flex-1'>
    
    <DepositForm setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod}/>
    </div>
    <div>
      <img src={img} alt="" className='w-[250px] mx-auto h-[250px]'/>
    <div className='px-4'>
      <div className='border border-[--gray] text-sm mt-8 px-2 py-1 flex justify-between'>
        <div className=''>
      <p className='font-semibold text-[--gray2]'>Address</p>
      <p className='text-[11px]'>{address}</p>
      </div>
      <Button className='bg-[--dark-shade] text-white py-0  rounded-xl hover:bg-[--blue]' onClick={() => {navigator.clipboard.writeText(address)}}
      >Copy</Button>
      </div>
      
    </div>
    </div>
    </div>
    </div>
  )
}
