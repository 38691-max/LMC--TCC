import { SignupForm } from "@/components/sign-up-form"
import Image from "next/image"
import Logo from "@/public/logo.png"
import Background from "@/public/background.png"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página de Cadastro",
}

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Image src={Logo} alt="Logo" className="size-4" />
            </div>
            LMC+
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={Background}
          alt="Imagem de fundo para a página de cadastro"
          className="absolute inset-0 m-auto h-full dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
