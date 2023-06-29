import { z } from "zod";

export const SocialProfileSchema = z.object({
    urlLinkedin:z.string().nonempty("Linkedin url is required").url("Is not url link"),
    urlGitHub:z.string().nonempty("GitHub url is required").url("Is not url link"),
})