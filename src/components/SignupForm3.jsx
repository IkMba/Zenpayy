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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addDetails, getRegisterDetails, prev } from "@/utils/registerSlice";
import { useCreateUser } from "@/api/MyUserApi";
import { Loader2 } from "lucide-react";

const formSchema = z
  .object({
    // jobTitle: z.string({
    //   required_error: " JOB title is required",
    // }),
    accountType: z.string({
      required_error: "Choose an account type",
    }),
    incomeRange: z
      .string({
        required_error: "Income range is required",
      })
      .optional(),
    employmentStatus: z
      .string({
        required_error: "Employment status is required",
      })
      .optional(),
    relationshipStatus: z.string({
      required_error: "Relationship status is required",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

export default function SignupForm3() {
  const userDetails = useSelector(getRegisterDetails);
  const dispatch = useDispatch();
  const {createUser,isLoading,isError} = useCreateUser()

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

  const onSubmit = async (values) => {
    await dispatch(addDetails(values));
    const regDetails = userDetails;
    console.log(regDetails);

   await createUser({...regDetails,...values})
    console.log("submitted");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 px-4 py-10 md:px-10 bg-gray-50 rounded-lg"
      >
        {isError && <h2>{isError}</h2>}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[--blue]">Signup</h2>
          <FormDescription className="text-[--gray2] font-medium">
            Create an account to start using our services
          </FormDescription>
        </div>
        <h3 className="font-semibold text-xl pt-4 ">Account information</h3>

        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your account type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Personal account">Personal Account</SelectItem>
                  <SelectItem value="Business account">Business Account</SelectItem>
                  <SelectItem value="Domiciliary account">Domiciliary</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="incomeRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Income range</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="How much do you earn anually" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Less than $10,000">
                    {" "}
                    Less than$10,000
                  </SelectItem>
                  <SelectItem value="$10,000 - $100,000">
                    $10,000 - $100,000
                  </SelectItem>
                  <SelectItem value="$100,000 - $500,000">
                    $100,000 - $500,000
                  </SelectItem>
                  <SelectItem value="Above $500,000">
                    {" "}
                    Above $500,000
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employmentStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="What's your employment status?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Employed"> Employed</SelectItem>
                  <SelectItem value="Self-employed"> Self-employed</SelectItem>
                  <SelectItem value="Business-owner">
                    {" "}
                    Business Owner
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="relationshipStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Relationship Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your relationship status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Single"> Single</SelectItem>
                  <SelectItem value="Married"> Married</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <div className="flex justify-between pt-4">
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(prev());
              }}
              className="bg-[--blue] text-white"
            >
              Go back
            </Button>
            {
              isLoading ?  <Button disabled className="bg-[--blue]  text-white">
              <Loader2 className="animate-spin" />
              Please wait
            </Button> : <Button type="submit" className="bg-[--blue]  text-white ">Submit</Button>
            }
            
          </div>
        </div>
      </form>
    </Form>
  );
}
