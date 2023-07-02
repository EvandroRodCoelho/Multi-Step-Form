import { z } from "zod";

const addressSchema = z.object({
  city: z.string().nonempty("City is required"),
  country: z.string().nonempty("Country is required"),
  state: z.string().nonempty("State is required"),
  zipCode: z.string().nonempty("Zip Code is required"),
});

const socialProfileSchema = z.object({
  urlGitHub: z.string().nonempty("GitHub url is required").url("Is not a valid URL"),
  urlLinkedin: z.string().nonempty("LinkedIn url is required").url("Is not a valid URL"),
});

const informationPessoalSchema =  z.object({
    email: z.string().nonempty("Email is required").email(),
    fullName: z.string()
      .nonempty("Full Name is required")
      .regex(/^[a-zA-Z\s]*$/, "Cannot contain special characters or numbers"),
    password: z.string().nonempty("Password is required"),
    gender: z.string().nonempty("Gender is required"),
  })
export const createUserSchema = z.object({
  informationPessoal:informationPessoalSchema,
  address: addressSchema,
  socialProfile: socialProfileSchema,
});
