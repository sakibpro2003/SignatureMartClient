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
// import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { createShopSchema } from "./createShopValidation";
import SMImageUploader from "@/components/ui/core/SMImageUploader";
import { useState } from "react";

const CreateShopForm = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const servicesOffered = data?.servicesOffered
      .split(",")
      .map((service: string) => service.trim())
      .filter((service: string) => service !== "");
    // console.log(servicesOffered)
    // console.log(data)
    const modifiedData = {
      ...data,
      establishedYear: Number(data?.established_year),
      servicesOffered: servicesOffered,
    };
    console.log(modifiedData, "mod");
    // try {
    //   const res = await registerUser(data);
    //   if (res?.success) {
    //     toast.success(res?.message);
    //   } else {
    //     toast.error(res?.message);
    //   }
    // } catch (err: any) {
    //   console.error(err);
    // }
  };

  const form = useForm({
    resolver: zodResolver(createShopSchema), // Add your schema here
  });

  const {
    formState: { isSubmitting },
  } = form;

  // const password = form.watch("password");
  // const confirm_password = form.watch("confirm_password");

  return (
    <div className="w-11/12 max-w-6xl mx-auto p-6 rounded-2xl border-2 shadow-xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4"
        >
          <FormField
            control={form.control}
            name="shop_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shop Name</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="business_license_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business License Number</FormLabel>
                <FormControl>
                  <Input type="number" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="established_year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Established Year</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tax_identification_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tax Identification Number</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Facebook</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instagram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram</FormLabel>
                <FormControl>
                  <Input type="text" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <FormField
                control={form.control}
                name="servicesOffered"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Offered</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the services you offer..."
                        {...field}
                        value={field.value || ""}
                        className="min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormItem>
                <FormLabel>Upload Shop Logo</FormLabel>
                <SMImageUploader
                  imageFiles={imageFiles}
                  setImageFiles={setImageFiles}
                />
              </FormItem>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Button
              // disabled={}
              type="submit"
              className="w-full"
            >
              {isSubmitting ? "Creating..." : "Create Shop"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateShopForm;
