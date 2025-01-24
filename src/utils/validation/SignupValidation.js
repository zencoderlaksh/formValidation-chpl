import * as z from "zod";

export const signupSchema = z.object({
  dateOfBirth: z.date().refine((date) => date <= new Date(), {
    message: "Date of birth must be in the past.",
  }),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  mobileNo: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits"),
  gender: z.enum(["male", "female", "other"], "Please select a gender"),
  hobbies: z.array(z.string()).optional(),
  profile: z.string().optional(),
  address: z.string().min(1, "Address is required"),
});
