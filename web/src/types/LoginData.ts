import { z } from "zod";
import { LoginSchema } from "../pages/auth/login/LoginSchema";

export type LoginData = z.infer <typeof LoginSchema>;