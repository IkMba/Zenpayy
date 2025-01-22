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
import { useLogin } from "@/api/MyUserApi";

const formSchema = z.object({
  email: z.string({
    required_error: "email is required",
  }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(8, "Password must not be less than eight characters"),
});
export default function SignupForm1() {
  const {loginUser,isLoading} = useLogin()
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
  async function onSubmit(values) {
    console.log(values);

    await loginUser(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 p-10 rounded-lg "
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[--blue]">Login</h2>
          <FormDescription className="text-[--gray2] font-medium">
            Login to your Zenpay account
          </FormDescription>
        </div>

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
        <div className=" pt-4">
          <Button className="bg-[--blue] text-white w-full">Login</Button>
        </div>
      </form>
    </Form>
  );
}
