import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
// import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetails,
  getRegisterDetails,
  getStep,
  next,
  prev,
} from "@/utils/registerSlice";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const formSchema = z.object({
  amount: z.string({
    required_error: "Input deposit amount",
  }),
  payMethod: z.string({
    required_error: "Select a payment method",
  }).default('Bitcoin')
});

export default function DepositForm({ setPaymentMethod }) {
  const userDetails = useSelector(getRegisterDetails);
  const dispatch = useDispatch();
  const [ isLoading,setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
// setIsLoading(true)

// setTimeout(() => {
//   setIsLoading(false)
//   toast.error('Please scan the code below to deposit money into your account.')
// },3000)
  }

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4  rounded-lg py-10 px-4 md:px-10 w-full  bg-white"
      >
        <div className="">
          <h2 className="text-2xl font-bold text-[--blue]">Deposit</h2>
          <FormDescription className="text-[--gray2] font-medium">
            Deposit money into your account
          </FormDescription>
        </div>
        {/* <div className=""> */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="payMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                onChange={setPaymentMethod(field.value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Btc">Bitcoin </SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="btc"> Bitcoin</SelectItem>
                  {/* <SelectItem value="usdt"> USDT</SelectItem>
                  <SelectItem value="eth"> Ethereum</SelectItem> */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
            {/* {
              isLoading ?  <Button disabled className="bg-[--blue]  text-white w-full">
              <Loader2 className="animate-spin" />
              Please wait
            </Button> :   <Button type="submit" className="bg-[--blue]  text-white w-full"  ><Link to='https://pay.binance.com/' target="_blank" rel="noopener noreferrer" className="w-full">Continue</Link></Button>
            } */}
      
      </form>
    </Form>
  );
}
