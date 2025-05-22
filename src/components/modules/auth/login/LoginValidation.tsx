import { z } from "zod";

export const loginValidation = z.object({
  email: z.string().email("Invalid email address"),
  password:z.string().min(1,"Password is required")
});
