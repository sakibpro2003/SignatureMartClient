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
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { loginValidation } from "./LoginValidation";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleUser1 = ()=>{
    form.setValue('password',"s@SD,sdf1111")
    form.setValue('email',"user1@gmail.com")
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const form = useForm({
    resolver: zodResolver(loginValidation),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const email = form.watch("email");
  return (
    <div className="max-w-md p-4 rounded-2xl border-2  shadow-xl">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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

          <Button disabled={email == "" || isSubmitting} type="submit">
            {isSubmitting ? "Logging In..." : "Login"}
          </Button>
          <Button onClick={handleUser1}>user1</Button>
          <Button>admin</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
