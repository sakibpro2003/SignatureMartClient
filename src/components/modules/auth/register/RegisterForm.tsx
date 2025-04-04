/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import registrationSchema from "./registerValidation";
import Logo from "@/components/shared/Logo";
import { registerUser } from "@/services/AuthService";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  //!NOTE: Dont remove this 2 commnets
  // const password = form.watch("password");
  // const confirmPassword = form.watch("confirmPassword");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      if (res.success) {
        toast({
          description: "Registration successfull 🙌",
        });
        router.push("/login");
      }
      if (!res.success) {
        toast({
          variant: "destructive",
          title: "Registration failed!",
          description: res.message,
        });
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md flex flex-col flex-grow w-full p-5 border rounded-3xl">
      {/* <Logo></Logo> */}
      <Logo></Logo>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            //!NOTE: form.control to get the control of form inputs........................
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            //!NOTE: form.control to get the control of form inputs........................
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            //!NOTE: form.control to get the control of form inputs........................
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            //!NOTE: form.control to get the control of form inputs........................
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password:</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-4" type="submit">
            Register
          </Button>
          <p className="mt-4">
            Already have an account?{" "}
            <Link className="text-blue-500" href={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default Register;
