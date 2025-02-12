import React, { useState } from "react";
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
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
 


const formSchema = z.object({
  amount: z.coerce.number({
    required_error: "Please input the amount you want to transfer.",
  }),
  method: z.string({
    required_error: "How do you want to make the transfer",
  }),
  bankName: z.string({
    required_error: "Please input the name of the bank",
  }),
  swiftCode: z.string(),
  description: z.string(),
});

export default function TransferForm() {
  const userDetails = useSelector(getRegisterDetails);
  const dispatch = useDispatch();
    const [ isLoading,setIsLoading] = useState(false)
  // const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: userDetails,
    // defaultValues: {
    //     username:""
    // }
  });
  //   useEffect(() => {
  //     form.reset(currentUser);
  //   }, [currentUser, form]);

  // console.log(userDetails)
  function onSubmit(values) {
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      toast.error("Error!! Please contact admin if this issue continues.");
    },3000)
      }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4  rounded-lg py-10 px-4 md:px-10"
      >
        {/* <div className="text-center">
          <h2 className="text-2xl font-bold text-[--blue]">Signup</h2>
          <FormDescription className="text-[--gray2] font-medium">
            Create an account to start using our services
          </FormDescription>
        </div> */}
        <h3 className="font-semibold text-xl pt-4 ">Transfer</h3>
        {/* <div className=""> */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select transfer method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="usdt">USDT</SelectItem>
                  <SelectItem value="btc">BTC</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bankName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="swiftCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Swift code</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Description</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <div className="flex justify-end pt-4">

          {
              isLoading ?  <Button disabled className="bg-[--blue]  text-white ">
              <Loader2 className="animate-spin" />
              Please wait
            </Button> : <Button type="submit" className="bg-[--blue]  text-white "  >Transfer</Button>
            }
             </div>
        {/* <div className="flex justify-end pt-4">
          <Button className="bg-[--blue] text-white" type="submit">Transfer</Button>
        </div> */}
      </form>
    </Form>
  );
}
