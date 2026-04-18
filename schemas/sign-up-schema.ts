import z from "zod";
import { signInSchema } from "./sign-in-schema";

export const signUpSchema = signInSchema.extend({
  name: z.string().nonempty({ error: "O campo de nome precisa ser preenchido." }).min(6, { error: "O nome de usuário precisa ter no mínimo 6 caracteres." }).max(40, "O nome de usuário pode ter no máximo 40 caracteres."),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "A senha não se coincidem.",
  path: ["confirmPassword"]
})

export type typeSignUpSchema = z.infer<typeof signUpSchema>