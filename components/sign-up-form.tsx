"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema, typeSignUpSchema } from "@/schemas/sign-up-schema"
import { Spinner } from "./ui/spinner"
import { authClient } from "@/lib/auth-client"
import { toast, Toaster } from "sonner"
import { redirect } from "next/navigation"
import clsx from "clsx"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const { formState: { errors, isSubmitting }, register, handleSubmit, setError } = useForm<typeSignUpSchema>({ resolver: zodResolver(signUpSchema) })

  return (
    <form noValidate onSubmit={handleSubmit(async ({ name, password, email }) => {
      await authClient.signUp.email({
        name, email, password, callbackURL: "/dashboard"
      }, {
        async onError({ error }) {
          switch (error.message) {
            case "User already exists.":
              setError("name", { message: "Usuário já existente. Tente outro nome." })
            case "User already exists. Use another email.":
              setError("email", { message: "Usuário já existente. Tente outro endereço de email." })
            default:
              toast.error("O cadastro falou.", { duration: 5000 })
              break;
          }
        },
        async onSuccess() {
          toast.success("Cadastro realizado com sucesso", { duration: 2000 })
          setTimeout(() => {
            redirect("/dashboard")
          }, 2000)
        },
      })
    })} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Cadastro</h1>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
          <Input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Digite seu nome completo..."
            required
            className={clsx(errors.name && "border-red-500")}
          />
          {errors.name && <FieldDescription className="text-red-500">{errors.name.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Escolha um email que você possui..."
            required
            className={clsx(errors.email && "border-red-500")}
          />
          {errors.email && <FieldDescription className="text-red-500">{errors.email.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input 
            {...register("password")} 
            placeholder="Crie uma senha forte para sua sessão..." 
            id="password" 
            type="password" 
            required 
            className={clsx(errors.password && "border-red-500")}
          />
          {errors.password && <FieldDescription className="text-red-500">{errors.password.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirmar Senha</FieldLabel>
          <Input 
            {...register("confirmPassword")} 
            placeholder="Digite a mesma senha do campo acima..." 
            id="confirm-password" 
            type="password" 
            required
            className={clsx(errors.confirmPassword && "border-red-500")}
           />
          {errors.confirmPassword && <FieldDescription className="text-red-500">{errors.confirmPassword.message}</FieldDescription>}
        </Field>
        <Field>
          <Button disabled={isSubmitting} type="submit">{isSubmitting ? <Spinner /> : "Cadastro"}</Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center">
            Você já tem uma conta?? <a href="/sign-in">Login.</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
      <Toaster position="top-right" />
    </form>
  )
}
