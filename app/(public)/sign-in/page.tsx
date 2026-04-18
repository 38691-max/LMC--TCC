import Image from "next/image";
import Logo from "../../../public/logo.png"
import { SignInForm } from "@/components/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Login",
}

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-20 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Image src={Logo} alt="" />
          </div>
          LMC+
        </a>
        <SignInForm />
      </div>
    </div>
  )
}