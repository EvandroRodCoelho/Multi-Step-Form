import { z } from "zod";
import { UserInformationPersonalSchema } from "./UserInformationPersonalSchema";

export type UserInformationPersonalData = z.infer <typeof UserInformationPersonalSchema>;