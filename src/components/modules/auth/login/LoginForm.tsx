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
import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";

const LoginForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const form = useForm({
    resolver: zodResolver(),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const password = form.watch("password");
  const confirm_password = form.watch("confirm_password");
  console.log(password, confirm_password);
  return (
    <div className="max-w-md p-4 rounded-2xl border-2 shadow-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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

          <Button
            disabled={
              (confirm_password !== "" && password !== confirm_password) ||
              isSubmitting
            }
            type="submit"
          >
            {isSubmitting ? "Logging In..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
