import { z } from "zod";

export const UserInformationPersonalSchema = z.object({
    fullName: z.string().nonempty("FullName is required").
    regex(/^[a-zA-Z]*$/,"Cannot contain special characters or numbers"),
    email: z.string().nonempty("Email is required").email(),
    gender:z.string().nonempty("Gender is required"),
    password: z.string().nonempty("Password is required").min(6,"Password must be at least 6 characters"),
    confirmPassword: z.string().nonempty("Password confirmation is required"),
}).refine((field) => field.password === field.confirmPassword, {
    path:["confirmPassword"],
    message: "Passwords do not match"
} )