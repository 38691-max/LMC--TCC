import z from "zod";

export const signInSchema = z.object({
  email: z
    .email({ error: "Endereço de e-mail inválido." }),
  password: z.string().min(8, { error: "A senha tem que ter no mínimo 8 caracteres." }).max(20, { error: "A senha tem que ter no máximo 20 caracteres." }).nonempty("A senha não pode estar vazia.")
})

export type typeSignInSchema = z.infer<typeof signInSchema>