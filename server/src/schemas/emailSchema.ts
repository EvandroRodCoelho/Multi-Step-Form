import { z } from "zod";

export const emailSchema = z.object({
    email: z.string().nonempty("Email is required").email()
});