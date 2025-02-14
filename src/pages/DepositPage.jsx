import { Button } from '@/components/ui/button'
import DepositForm from '@/pageSections/deposit/DepositForm'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import savings1 from "@/assets/rev/save-1.webp"
import savings2 from "@/assets/rev/save-2.webp"
import savings3 from "@/assets/rev/save-3.webp"
import img from "@/assets/wallet-qrcode.png"
import bitImg from "@/assets/btcImage.png"


export default function DepositPage() {
  const [openPlay,setopenPlay] = useState()
  const [paymentMethod,setPaymentMethod] = useState()

  const btcAddress = 'bc1qzxdrnsyxr4hljlj0vsvzxla72343cq9wfpcpz3v8wgj4datln6fs48c6lq'
  const usdtAddress = 'TG9j5dNnqFhB7d4BsoW4PtLtNRRjicpPbe'
  const ethAddress = 'eth345692aakaksmmssassaedxaa'

  const address = paymentMethod === "usdt" ? usdtAddress : paymentMethod === 'eth' ? ethAddress : btcAddress

  // const img =  paymentMethod === "usdt" ? savings1 : paymentMethod === 'eth' ? savings2 : savings3
  return (
    <div className=''>
    <div className='md:flex gap-16 border border-[--gray2] my-8 mx-4 md:my-16 py-8 md:pl-2 md:pr-12 md:w-fit'>
      <div className='md:mt-10  flex-1'>
    
    <DepositForm setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod}/>
    </div>
    <div>
      <img src={bitImg} alt="" className='w-[300px] mx-auto h-[300px]'/>
    <div className='px-4'>
      <div className='border border-[--gray] text-sm mt-8 px-2 py-1 flex justify-between items-center'>
        <div className=''>
      <p className='font-semibold text-[--gray2]'>Address</p>
      <p className='text-[11px] w-full break-all'>{address}</p>
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
