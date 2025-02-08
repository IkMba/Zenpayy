import React from "react";
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

const formSchema = z
  .object({
    name: z.string({
      required_error: "Full name is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
    phone: z
      .string({
      }),
    message: z
      .string({
        required_error: "Message is required",
      }).min(10, {
        message: "Message must be at least 10 characters.",
      })
      .max(150, {
        message: "Message must not be longer than 150 characters.",
      })
      })



export default function ContactForm() {
  const userDetails = useSelector(getRegisterDetails);
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: userDetails,
 
  });

  function onSubmit(values) {
    console.log(values);
    dispatch(addDetails(values));
    dispatch(next());
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4  rounded-lg py-10 px-4 md:px-10 md:w-[500px] bg-white"
      >
        <div className="">
          <h2 className="text-2xl font-bold text-[--blue]">Ask us anything</h2>
          <FormDescription className="text-[--gray2] font-medium">
            We just need a few quick details
          </FormDescription>
        </div>
        {/* <div className=""> */}
          <FormField
        
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Message</FormLabel>
                <FormControl>
                  <Textarea {...field} className="bg-[--light-blue]" />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
        {/* </div> */}
        <div className="flex justify-end pt-4">
          <Button className="bg-[--blue] text-white">Continue</Button>
        </div>
      </form>
    </Form>
  );
}

