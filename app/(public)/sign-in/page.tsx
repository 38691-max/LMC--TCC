import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { SignInForm } from "@/components/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Login",
}

export default function SignInPage() {
  return (
    <>
      <HeroHeader />
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6 mt-36">
          <SignInForm />
        </div>
      </div>
      <FooterSection />
    </>
  )
}