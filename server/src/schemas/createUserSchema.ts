import { z } from "zod";

export const createUserSchema = z.object({
    fullName: z.string().nonempty("FullName is required")
    .regex(/^[a-zA-Z\s]*$/, "Cannot contain special characters or numbers"),
    email: z.string().nonempty("Email is required").email(),
    zipCode:z.string().nonempty("Zip Code is required"), 
    city:z.string().nonempty("City is required"),
    country:z.string().nonempty("Country is required"),
    state:z.string().nonempty("State is required"),
    gender:z.string().nonempty("Gender is required"),
    password: z.string().nonempty("Password is required").min(6,"Password must be at least 6 characters"),
    urlLinkedin:z.string().nonempty("Linkedin url is required").url("Is not url link"),
    urlGitHub:z.string().nonempty("GitHub url is required").url("Is not url link"),
})