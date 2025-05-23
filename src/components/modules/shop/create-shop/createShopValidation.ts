import * as z from "zod";

export const createShopSchema = z.object({
  shop_name: z.string().min(1, "Shop name is required"),
  business_license_number: z.string().min(1, "Business license is required"),
  address: z.string().min(1, "Address is required"),
  contact_number: z.string().min(1, "Contact number is required"),
  website: z.string().optional(),
  established_year: z.string().optional(),
  tax_identification_number: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  services_offered: z.string().optional(),
});
