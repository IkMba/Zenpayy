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
    console.log("submitted");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-6 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">Login</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
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
                <SelectContent>
                  <SelectItem value="personal">Personal Account</SelectItem>
                  <SelectItem value="business">Business Account</SelectItem>
                  <SelectItem value="domiciliary">Domiciliary</SelectItem>
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
                <SelectContent>
                  <SelectItem value="a-Less than$10,000">
                    {" "}
                    Less than$10,000
                  </SelectItem>
                  <SelectItem value="b-$10,000 - $100,000">
                    $10,000 - $100,000
                  </SelectItem>
                  <SelectItem value="c-$100,000 - $500,000">
                    $100,000 - $500,000
                  </SelectItem>
                  <SelectItem value="d-Above  $500,000">
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
                <SelectContent>
                  <SelectItem value="employed"> Employed</SelectItem>
                  <SelectItem value="self-employed"> Self-employed</SelectItem>
                  <SelectItem value="business-owner">
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
                <SelectContent>
                  <SelectItem value="single"> Single</SelectItem>
                  <SelectItem value="married"> Married</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch(prev());
            }}
            className="bg-orange-500"
          >
            Go back
          </Button>
          <Button type="submit" className="bg-orange-500">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
