import { z } from "zod";

export const AddressInformationSchema = z.object({
    zipCode:z.string().nonempty("Zip Code is required"), 
    city:z.string().nonempty("City is required"),
    country:z.string().nonempty("Country is required"),
    state:z.string().nonempty("State is required"),
  }).transform((fields)  => ({
    zipCode: fields.zipCode,
    city: fields.city,
    country: fields.country,
    state: fields.state,
}));