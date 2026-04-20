"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema, typeSignUpSchema } from "@/schemas/sign-up-schema"
import { Spinner } from "./ui/spinner"
import { authClient } from "@/lib/auth-client"
import { toast, Toaster } from "sonner"
import { redirect } from "next/navigation"

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
          <p className="text-sm text-balance text-muted-foreground">
            Preencha os credenciais para a realização do cadastro.
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
          <Input {...register("name")} id="name" type="text" placeholder="Digite seu nome completo..." required />
          {errors.name && <FieldDescription className="text-red-500">{errors.name.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input {...register("email")} id="email" type="email" placeholder="Escolha um email que você possui..." required />
          {errors.email && <FieldDescription className="text-red-500">{errors.email.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input {...register("password")} placeholder="Crie uma senha forte para sua sessão..." id="password" type="password" required />
          {errors.password && <FieldDescription className="text-red-500">{errors.password.message}</FieldDescription>}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirmar Senha</FieldLabel>
          <Input {...register("confirmPassword")} placeholder="Digite a mesma senha do campo acima..." id="confirm-password" type="password" required />
          {errors.confirmPassword && <FieldDescription className="text-red-500">{errors.confirmPassword.message}</FieldDescription>}
        </Field>
        <Field>
          <Button disabled={isSubmitting} type="submit">{isSubmitting ? <Spinner /> : "Cadastro"}</Button>
        </Field>
        <FieldSeparator>Ou continua com</FieldSeparator>
        <Field>
          <Button variant="outline" type="button" onClick={async () => await authClient.signIn.social({ provider: "github", callbackURL: "/dashboard" })}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="currentColor"
              />
            </svg>
            Login com GitHub
          </Button>
          <Button variant="outline" type="button" onClick={async () => await authClient.signIn.social({ provider: "google", callbackURL: "/dashboard" })}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Login com Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Você já tem uma conta?? <a href="/sign-in">Login.</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
      <Toaster position="top-right" />
    </form>
  )
}
