import { z } from "zod";
import { AddressInformationSchema } from "../pages/auth/register/step2/AddressInformationSchema";
import { SocialProfileSchema } from "../pages/auth/register/step3/SocialProfileSchema";

export interface informationPessoalType {
    fullName:string,
    email:string,
    password:string,
    gender:string
}
export type AddressInformationData = z.infer <typeof AddressInformationSchema>;

export type UserSocialProfileData = z.infer <typeof SocialProfileSchema>;

export interface UserProps {
    informationPessoal : informationPessoalType
    address: AddressInformationData
    socialProfile : UserSocialProfileData
}
