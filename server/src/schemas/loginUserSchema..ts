import { z } from "zod";

export const loginUserSchema = z.object({
    email: z.string().nonempty("Email is required").email(),
    password: z.string().nonempty("Password is required").min(6,"Password must be at least 6 characters"),
})