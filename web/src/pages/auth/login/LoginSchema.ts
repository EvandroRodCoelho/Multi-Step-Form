import { z } from "zod";

export const LoginSchema = z.object({
    email:z.string().nonempty("Password is required").email(),
    password:z.string().nonempty("Password is required")
})