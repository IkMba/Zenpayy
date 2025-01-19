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

const formSchema = z
  .object({
    username: z.string({
      required_error: "username is required",
    }),
    email: z.string({
      required_error: "email is required",
    }),
    password: z
      .string({
        required_error: "password is required",
      })
      .min(8, "Password must not be less than eight characters"),
    passwordConfirm: z.string({
      required_error: "password is required",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

export default function SignupForm1() {
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

  // console.log(userDetails)
  function onSubmit(values) {
    console.log(values);
    dispatch(addDetails(values));
    dispatch(next());
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4  rounded-lg p-10"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[--blue]">Signup</h2>
          <FormDescription className="text-[--gray2] font-medium">
            Create an account to start using our services
          </FormDescription>
        </div>
        <h3 className="font-semibold text-xl pt-4 ">Personal Details</h3>
        {/* <div className=""> */}
          <FormField
        
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Confirm Password</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
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
