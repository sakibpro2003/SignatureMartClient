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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema } from "./registerValidation";

const RegisterForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  
  const form = useForm({
    resolver: zodResolver(registrationSchema)
  });

  const password = form. watch("password")
  const confirm_password = form. watch("confirm_password")
  console.log(password,confirm_password)
  return (
    <div className="max-w-md p-4 rounded-2xl border-2 shadow-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  {/* {field is used in render to grab the access of onChange, onBlur...} */}
                  <Input {...field} value={field.value || ""} />
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
                  {/* {field is used in render to grab the access of onChange, onBlur...} */}
                  <Input type="email" {...field} value={field.value || ""} />
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
                  {/* {field is used in render to grab the access of onChange, onBlur...} */}
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  {/* {field is used in render to grab the access of onChange, onBlur...} */}
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                {
                    confirm_password && password !== confirm_password ? <FormMessage >Password does not match!</FormMessage >:<FormMessage />
                }
              </FormItem>
            )}
          />

          <Button disabled={confirm_password !=="" && password !==confirm_password} type="submit">Register</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
