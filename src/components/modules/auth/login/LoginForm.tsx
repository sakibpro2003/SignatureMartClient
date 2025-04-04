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
import loginValidation from "./loginValidation";
import Logo from "@/components/shared/Logo";
import { loginUser } from "@/services/AuthService";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(loginValidation),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res.success) {
        toast({
          description: "Login successful 🎉",
        });
        router.push("/");
      }
      if (!res.success) {
        toast({
          variant: "destructive",
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

          <Button className="w-full mt-4" type="submit">
            <span className="font-bold">Login</span>
          </Button>
          <p className="mt-4">
            Dont have an account?{" "}
            <Link className="text-blue-500" href={"/register"}>
              Register
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
